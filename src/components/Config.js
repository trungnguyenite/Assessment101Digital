const config = {

	SERVER_URL: 'https://sandbox.101digital.io',
		
	access_token: '',
	org_token: '',
}

export function getBaseURL() {
	return AppConfig.SERVER_URL
}
export function setBaseURL(url) {
	AppConfig.SERVER_URL = url
}

export function getAccessToken() {
	return AppConfig.access_token
}
export function setAccessToken(t) {
	AppConfig.access_token = t
}

export function getOrgToken() {
	return AppConfig.org_token
}
export function setOrgToken(t) {
	AppConfig.org_token = t
}

export default AppConfig = config;