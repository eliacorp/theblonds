var Logo = angular.module('myApp');

Logo.controller('logoCtrl', function($scope, $location){
});


Logo.directive('logoDirective', function(){
  return{
    restrict:'E',
    replace: true,
    templateUrl:'components/logo/logo.html'
  }
});
