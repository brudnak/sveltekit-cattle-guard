import { AuthApiError } from "@supabase/supabase-js";
import { error, fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
	register: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());

		let myCheck = new RegExp(
			"^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+.)?[a-zA-Z]+.)?(suse|suse).com$"
		);
		let test = myCheck.test(body.email as string);

		if (test === false) {
			throw error(400, {
				message: "Can only register a suse email address",
			});
		}

		const { data, error: err } = await locals.sb.auth.signUp({
			email: body.email as string,
			password: body.password as string,
		});

		if (err) {
			if (err instanceof AuthApiError && err.status === 400) {
				return fail(400, {
					error: "Invalid email or password",
				});
			}
			return fail(500, {
				error: "Server error. Please try again later.",
			});
		}

		throw redirect(303, "/");
	},
};
