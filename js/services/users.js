scpApp.factory('$users', function($http, $utils) {

	return {
		get: function (success_callback, error_callback) {
			
			$http({
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': localStorage.getItem('token')
				},
				url: $utils.server_base_url + 'Users',
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
		update: function (user, success_callback, error_callback) {
			
			$http({
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': localStorage.getItem('token')
				},
				data: JSON.stringify(user),
				url: $utils.server_base_url + 'Users/' + user.Id,
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
		create: function (user, success_callback, error_callback) {
			
			$http({
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': localStorage.getItem('token')
				},
				data: user,
				url: $utils.server_base_url + 'Users',
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
		delete: function (id, success_callback, error_callback) {
			
			$http({
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': localStorage.getItem('token')
				},
				url: $utils.server_base_url + 'Users/' + id + '?op=del'
			}).then (
				function successCallback(res) {
					success_callback(res);
				},
				function errorCallback(res) {
					error_callback(res);
				}
			);
		}
	}
});
