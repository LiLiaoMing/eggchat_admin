scpApp.factory('$projects', function($http, $utils) {
	return {
		get_dashboard: function (success_callback, error_callback) {
			
			$http({
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': localStorage.getItem('token')
				},
				url: $utils.server_base_url + 'Dashboard',
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
		get: function (success_callback, error_callback) {
			
			$http({
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': localStorage.getItem('token')
				},
				url: $utils.server_base_url + 'Projects',
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
		update: function (project, success_callback, error_callback) {
			
			$http({
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': localStorage.getItem('token')
				},
				data: project,
				url: $utils.server_base_url + 'Projects/' + project.Id,
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
		create: function (project, success_callback, error_callback) {
			
			$http({
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': localStorage.getItem('token')
				},
				data: JSON.stringify(project),
				url: $utils.server_base_url + 'Projects',
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
				url: $utils.server_base_url + 'Projects/' + id + '?op=del'
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
