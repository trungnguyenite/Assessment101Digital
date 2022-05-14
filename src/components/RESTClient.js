import { getBaseURL, getAccessToken, getOrgToken } from './Config';

import axios from 'axios';

let headers = {
	Accept: 'application/json',
}

export class RESTFulAPI {

	async _getAccessToken() {
		let api = getBaseURL() + '/token'

		headers['Content-Type'] = 'application/x-www-form-urlencoded'
				
		/* var params = new URLSearchParams()
		params.append('client_id', 'oO8BMTesSg9Vl3_jAyKpbOd2fIEa')
		params.append('client_secret', '0Exp4dwqmpON_ezyhfm0o_Xkowka')
		params.append('grant_type', 'password')
		params.append('scope', 'openid')
		params.append('username', 'dung+octopus4@101digital.io')
		params.append('password', 'Abc@123456') */

		var qs = require('qs');
		var params = qs.stringify({
		'client_id': 'oO8BMTesSg9Vl3_jAyKpbOd2fIEa',
		'client_secret': '0Exp4dwqmpON_ezyhfm0o_Xkowka',
		'grant_type': 'password',
		'scope': 'openid',
		'username': 'dung+octopus4@101digital.io',
		'password': 'Abc@123456'
		});

		return this.fetchData(api, 'POST', params);
	}

	async _getOrgToken() {
		let api = getBaseURL() + '/membership-service/1.2.0/users/me'

		headers['Authorization'] = 'Bearer ' + getAccessToken()
		headers['Content-Type'] = 'application/json'

		return this.fetchData(api, 'GET', null);
	}

	async getInvoicesList(currentPage, sortType, keyword) {
		let api = getBaseURL() + `/invoice-service/1.0.0/invoices?
			pageNum=${currentPage}
			&pageSize=10
			&dateType=INVOICE_DATE
			&sortBy=CREATED_DATE
			&ordering=${sortType}
			&keyword=${keyword}`

		headers['Authorization'] = 'Bearer ' + getAccessToken()
		headers['org-token'] = getOrgToken()

		return this.fetchData(api, 'GET', null);
	}

	async newInvoice(body) {
		let api = getBaseURL() + '/invoice-service/1.0.0/invoices'

		headers['Authorization'] = 'Bearer ' + getAccessToken()
		headers['Content-Type'] = 'application/json'
		headers['org-token'] = getOrgToken()
		headers['Operation-Mode'] = 'SYNC'

		return this.fetchData(api, 'POST', body);
	}

	////
	async fetchData(api, method = 'GET', body) {
		
		try {
			
			console.log('\n\n# # # # ' + api + '\n')
			console.log(JSON.stringify(headers) + '\n')
			console.log(JSON.stringify(body) + '\n')
			
			var config = {
				method: method,
				url: api,
				headers: headers,//{ 
				//...body.getHeaders()
				//},
				data: body,
			};

			let response = await axios(config)

			console.log(response.data)

			return response.data

		}
		catch (error) {
			
			console.log('# # # # error')
			console.log(error)
			
			if (error.response) {
				/*
				 * The request was made and the server responded with a
				 * status code that falls out of the range of 2xx
				 */

				console.log('# # # # error.response.data')
				console.log(error.response.data);
				
				//console.log(error.response.status);
				
				console.log('# # # # error.response.headers')
				console.log(error.response.headers);
			
			} else if (error.request) {
				/*
				 * The request was made but no response was received, `error.request`
				 * is an instance of XMLHttpRequest in the browser and an instance
				 * of http.ClientRequest in Node.js
				 */
				 
				console.log('# # # # error.request')
				console.log(error.request);
			
			} else {
				// Something happened in setting up the request and triggered an Error
				
				console.log('# # # # error.message')
				console.log(error.message);
			}
			
			return error.response.data//error//networkError;
		}
	}
}

export default RESTClient = new RESTFulAPI();
