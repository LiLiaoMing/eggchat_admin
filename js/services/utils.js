scpApp.factory('$utils', function($http, $location) {

	// var server_base_url =  'http://52.39.194.215/eggchat/api/';
	var server_base_url =  'http://192.168.1.50/projects/eggchat/api/';

	public_members = {
		server_base_url: server_base_url,

		/*------------------------------------------------------
		 * 				Token information
		 *------------------------------------------------------*/

		user : {
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
		},

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

						
						public_members.user.uid = res.data.data.user.id;
						public_members.user.qb_id = res.data.data.user.qb_id;
						public_members.user.username = res.data.data.user.username;
						public_members.user.mobile = res.data.data.user.mobile;
						public_members.user.email = res.data.data.user.email;
						public_members.user.avatar = res.data.data.user.avartar;
						public_members.user.full_name = res.data.data.user.full_name;
						public_members.user.reply_email = res.data.data.user.reply_email;
						public_members.user.level = res.data.data.user.level;
						public_members.user.path = res.data.data.user.path;
						public_members.user.permission = res.data.data.user.permission;

						public_members.user.token = res.data.data.token;
						public_members.user.qb_token = res.data.data.qb_token;

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
		},

		// get: function (success_callback, error_callback) {
			
		// 	$http({
		// 		method: 'GET',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 			'Authorization': localStorage.getItem('token')
		// 		},
		// 		url: $utils.server_base_url + 'Users',
		// 		cache: false
		// 	}).then (
		// 		function successCallback(res) {
		// 			success_callback(res);
		// 		},
		// 		function errorCallback(res) {
		// 			error_callback(res);
		// 		}
		// 	);
		// },
		// update: function (user, success_callback, error_callback) {
			
		// 	$http({
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 			'Authorization': localStorage.getItem('token')
		// 		},
		// 		data: JSON.stringify(user),
		// 		url: $utils.server_base_url + 'Users/' + user.Id,
		// 		cache: false
		// 	}).then (
		// 		function successCallback(res) {
		// 			success_callback(res);
		// 		},
		// 		function errorCallback(res) {
		// 			error_callback(res);
		// 		}
		// 	);
		// },
		userCreate: function (user, success_callback, error_callback) {
			
			$http({
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': localStorage.getItem('token')
				},
				data: user,
				url: server_base_url + 'user/',
				cache: false
			}).then (
				function successCallback(res) {
					success_callback(res);
				},
				function errorCallback(res) {
					error_callback(res);
				}
			);
		},
		// delete: function (id, success_callback, error_callback) {
			
		// 	$http({
		// 		method: 'GET',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 			'Authorization': localStorage.getItem('token')
		// 		},
		// 		url: $utils.server_base_url + 'Users/' + id + '?op=del'
		// 	}).then (
		// 		function successCallback(res) {
		// 			success_callback(res);
		// 		},
		// 		function errorCallback(res) {
		// 			error_callback(res);
		// 		}
		// 	);
		// }
	};

	return public_members;
});
