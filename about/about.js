var About = angular.module('myApp');


About.controller('aboutCtrl',['$scope', function($scope){

  $scope.pageClass='page-about';

}]);



About.directive('aboutDirective', function(){
  return{
    restrict:'E',
    replace: true,
    templateUrl:'about/about.html'
  }
});
