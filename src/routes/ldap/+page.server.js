
	import {
		HOSTNAME,
		SVC_ACC_NAME,
		SVC_ACC_PW,
		USR_SEARCH_BASE,
		USERNAME,
		PASSWORD
	} from '$env/static/private';
	import { redirect, fail } from '@sveltejs/kit';


    
export const actions = {
	// @ts-ignore
	default: async ({request}) => {
		const values = await request.formData()

        const url = values.get("url")
        const token = values.get("token")
        let result = null

        let postUrl = `https://${url}/v3/openLdapConfigs/openldap?action=testAndApply`;
		let jsonUrl = `https://${url}`;
		const res = await fetch(postUrl, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Access-Control-Allow-Origin': '*'
			},
			method: 'POST',
			body: JSON.stringify({
				enabled: true,
				ldapConfig: {
					actions: {
						testAndApply: `${jsonUrl}/v3/openLdapConfigs/openldap?action=testAndApply`
					},
					baseType: 'authConfig',
					enabled: true,
					groupDNAttribute: 'entryDN',
					groupMemberMappingAttribute: 'member',
					groupMemberUserAttribute: 'entryDN',
					groupNameAttribute: 'cn',
					groupObjectClass: 'groupOfNames',
					groupSearchAttribute: 'cn',
					id: 'openldap',
					labels: {
						'cattle.io/creator': 'norman'
					},
					links: {
						self: `${jsonUrl}/v3/openLdapConfigs/openldap`,
						update: `${jsonUrl}/v3/openLdapConfigs/openldap`
					},
					name: 'openldap',
					nestedGroupMembershipEnabled: false,
					port: 389,
					starttls: false,
					tls: false,
					type: 'openLdapConfig',
					userDisabledBitMask: 0,
					userLoginAttribute: 'uid',
					userMemberAttribute: 'memberOf',
					userNameAttribute: 'cn',
					userObjectClass: 'inetOrgPerson',
					userSearchAttribute: 'uid|sn|givenName',
					uuid: '608b769c-ab3b-4652-b178-20a95125a2bf',
					__clone: true,
					servers: [`${HOSTNAME}`],
					accessMode: 'unrestricted',
					disabledStatusBitmask: 0,
					serviceAccountDistinguishedName: `${SVC_ACC_NAME}`,
					serviceAccountPassword: `${SVC_ACC_PW}`,
					userSearchBase: `${USR_SEARCH_BASE}`
				},
				username: `${USERNAME}`,
				password: `${PASSWORD}`
			})
		});

		throw redirect(303, '/')
    }
}




