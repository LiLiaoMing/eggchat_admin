scpApp.factory('$utils', function($http, $location) {

	var server_base_url =  'http://52.39.194.215/eggchat/api/';
	// var server_base_url =  'http://192.168.1.50/projects/eggchat/api/';

	return {
		server_base_url: server_base_url,

		/*------------------------------------------------------
		 * 				Token information
		 *------------------------------------------------------*/

		uid: localStorage.getItem('uid'),
		qb_id: localStorage.getItem('qb_id'),
		username: localStorage.getItem('username'),
		mobile: localStorage.getItem('mobile'),
		email: localStorage.getItem('email'),
		avatar: localStorage.getItem('avatar'),
		full_name: localStorage.getItem('full_name'),
		reply_email: localStorage.getItem('reply_email'),
		level: localStorage.getItem('level'),
		path: localStorage.getItem('path'),
		permission: localStorage.getItem('permission'),

		token: localStorage.getItem('token'),
		qb_token: localStorage.getItem('qb_token'),

		/*------------------------------------------------------
		 * 				Constants
		 *------------------------------------------------------*/
		user_types: ['Core User', 'Client', 'Client Profile', 'User'],


		/*------------------------------------------------------
		 * 				Login
		 *------------------------------------------------------*/
		login: function (username, password, callback) {

			$http({
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'username': username,
					'password': password
				},
				url: server_base_url + 'user/login',
				cache: false
			}).then (
				function successCallback(res) {
					
					// console.log(JSON.stringify(res));

					if (res.data.status == "success")
					{
						localStorage.setItem('uid', res.data.data.user.id);
						localStorage.setItem('qb_id', res.data.data.user.qb_id);
						localStorage.setItem('username', res.data.data.user.username);
						localStorage.setItem('mobile', res.data.data.user.mobile);
						localStorage.setItem('email', res.data.data.user.email);
						localStorage.setItem('avatar', res.data.data.user.avartar);
						localStorage.setItem('full_name', res.data.data.user.full_name);
						localStorage.setItem('reply_email', res.data.data.user.reply_email);
						localStorage.setItem('level', res.data.data.user.level);
						localStorage.setItem('path', res.data.data.user.path);
						localStorage.setItem('permission', res.data.data.user.permission);

						localStorage.setItem('token', res.data.data.token);
						localStorage.setItem('qb_token', res.data.data.qb_token);

						callback(true, "Success!");
					}
					else
					{
						callback(false, res.data.message);
					}
				},
				function errorCallback(res) {
					callback(false, "Connection problem!");
				}
			);
		}	
	}
});
