scpApp.factory('$initiatives', function($http, $utils) {
	return {
		get: function (success_callback, error_callback) {
			
			$http({
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': localStorage.getItem('token')
				},
				url: $utils.server_base_url + 'Initiatives',
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
		update: function (initiative, success_callback, error_callback) {
			
			$http({
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': localStorage.getItem('token')
				},
				data: initiative,
				url: $utils.server_base_url + 'Initiatives/' + initiative.Id,
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
		create: function (initiative, success_callback, error_callback) {
			
			$http({
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': localStorage.getItem('token')
				},
				data: JSON.stringify(initiative),
				url: $utils.server_base_url + 'Initiatives',
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
				url: $utils.server_base_url + 'Initiatives/' + id + '?op=del'
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
