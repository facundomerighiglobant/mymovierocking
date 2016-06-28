(function (angular, undefined) { 'use strict';

	angular.module('mymovierockingApp')
		.directive('favoriteDirective', [function () {

			function selectFavorite (scope) {

				scope.updateFavoriteImage = function(){					
					if ((scope.movie.getFavorite()) === null) {
						scope.favoriteImage = '../images/starDefault.png';
					}
					else {
						scope.favoriteImage = '../images/starActive.png';
					}
				};

				scope.changeFavorite = function () { 
					scope.movie.setFavorite();
					scope.updateFavoriteImage();				
				};

				scope.$watch('movie', function() {
					if (scope.movie === undefined){
							scope.favoriteImage = '../images/starDefault.png';
					}else{
							scope.updateFavoriteImage();
					}
				});
			}

			return {
				restrict: 'E',
				templateUrl: '../views/favorite.html',
				scope: {
					movie: '='
				},
				link: selectFavorite
			};			
		}]); 

}(angular));