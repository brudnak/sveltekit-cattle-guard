import { AuthApiError } from "@supabase/supabase-js";
import { error, fail, redirect } from "@sveltejs/kit";
import { sortUserPlugins } from "vite";
import type { Actions } from "./$types";

export const actions: Actions = {
	register: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());

		const { data, error: err } = await locals.sb.auth.signUp({
			email: body.email as string,
			password: body.password as string,
		});

		let myCheck = new RegExp(
			"^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+.)?[a-zA-Z]+.)?(suse|suse).com$"
		);
		let test = myCheck.test(body.email as string);

		if (test === false) {
			throw error(400, {
				message: "Can only register a suse email address",
			});
		}

		throw redirect(303, "/email");
	},
};
