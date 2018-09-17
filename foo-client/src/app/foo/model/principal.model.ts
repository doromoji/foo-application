export interface Principal {
	authorities: Array<any>,
	details: {
		remoteAddress: string,
		sessionId: string
	},
	authenticated: boolean,
	principal: {
		password: string,
		username: string,
		authorities: Array<any>,
		accountNonExpired: boolean,
		accountNonLocked: boolean,
		credentialsNonExpired: boolean,
		enabled: boolean
	},
	credentials: string,
	name: string
}