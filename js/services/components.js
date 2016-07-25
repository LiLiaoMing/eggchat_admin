scpApp.factory('$components', function($http, $utils) {
	return {
		get: function (project_id, success_callback, error_callback) {
			$http({
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': localStorage.getItem('token')
				},
				url: $utils.server_base_url + 'Components?projectId=' + project_id,
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
		get_all: function (success_callback, error_callback) {
			$http({
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': localStorage.getItem('token')
				},
				url: $utils.server_base_url + 'Components',
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
		update: function (component, success_callback, error_callback) {
			
			$http({
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': localStorage.getItem('token')
				},
				data: component,
				url: $utils.server_base_url + 'Components/' + component.Id,
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
		create: function (component, success_callback, error_callback) {
			
			$http({
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': localStorage.getItem('token')
				},
				data: JSON.stringify(component),
				url: $utils.server_base_url + 'Components',
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
				url: $utils.server_base_url + 'Components/' + id + '?op=del'
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
