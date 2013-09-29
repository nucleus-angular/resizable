/**
 * Uses jQuery UI to give resize functionality to the element
 *
 * @module nag.resizable
 * @ngdirective nagResizable
 */
angular.module('nag.resizable', [])
.directive('nagResizable', [
  'nagDefaults',
  function(nagDefaults) {
    return {
      restrict: 'A',
      priority: 0,
      compile: function(tElement, tAttributes, transclude) {
        return {
          pre: function(scope, element, attributes) {},
          post: function(scope, element, attributes) {
            $(element).resizable(scope.options);
          }
        }
      }
    }
  }
]);
