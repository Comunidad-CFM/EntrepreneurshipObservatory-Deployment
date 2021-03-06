/**
* Entrepreneurship Observatory
*
* @authors Fauricio Rojas Hernández, Manfred Artavia Gómez y Carlos Jiménez González.
* @version 1.0
*/
(function() {
	'use strict';

	angular
		.module('observatoryApp')
		.factory('RegionesFactory', RegionesFactory);

		function RegionesFactory($http, $q, API_URL) {
		var factory = {
			getAll: getAll,
			store: store,
			destroy: destroy,
			update: update,
		};

		return factory;

		function getAll() {
			var defered = $q.defer();
			var promise = defered.promise;
			
			$http.get(API_URL + 'regiones/todas')
			.success(function(response) {				
				defered.resolve(response);
			})
			.error(function(err) {
				defered.reject(err);
			});

			return promise;
		}

		

		/**
		* Almacenar una region
		* @param {Object} Sector: Objeto a almacenar	
		* @returns {Object} El resultado del request de almacenar, si es correcto, da true
		*/
		function store (region) {			
			 var defered = $q.defer();
			 var promise = defered.promise;
			 
 			 $http({
			 	'method': 'POST',
			 	'url' : API_URL + 'regiones/registro',
			 	'data' : region
			 })
			 	.success(function (response) {			 	
				 	defered.resolve(response);
				 })
			 	.error(function (err) {
			 		defered.reject(err);
			 	});

		 	return promise;

		}

		/**
		* Eliminar una región
		* @param {Object} id: id de la región a eliminar
		* @returns {Object}  si se eliminar correctarmente retorna true
		*/
		function destroy (id) {			
			 var defered = $q.defer();
			 var promise = defered.promise;			 
 			 $http({
			 	'method': 'DELETE',
			 	'url' : API_URL + 'regiones/destroy/'+id
			 })
			 	.success(function (response) {			 	
				 	defered.resolve(response);
				 })
			 	.error(function (err) {
			 		defered.reject(err);
			 	});

		 	return promise;
		}

		/**
		* Actualiza los datos de una región
		* @param {Object} sector: objeto a actualizar, se utiliza el campo id del objeto, para actualizar el registro
		* correspondiente
		* @returns {Object} El resultado del request de almacenar, si es correcto, da true
		*/
		function update(region){
			var defered = $q.defer();
			var promise =  defered.promise;			
			$http({
				method: 'POST',
				url: API_URL + 'regiones/editar/',
				data: region
			})
				.success(function(response){					
					defered.resolve(response);
				})
				.error(function(err){
					defered.reject(err);
				});			

			return promise;
		}		
	}
})();