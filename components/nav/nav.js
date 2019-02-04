var Nav = angular.module('myApp');

Nav.controller('navCtrl', function($scope, $location, $window, $rootScope, $routeParams){


    //activating a nav entry based on the location you are in
    $scope.isActive = function (viewLocation) {
      var string = $location.path();
      var firstString = string.split('/')[1];
      return viewLocation == firstString;
    };


//........................................................NAV scroll function
  $rootScope.cornerLogo = false;
  $rootScope.burger = true;
  $scope.colorNav = true;
  $scope.colorMobileNav = true;
  $rootScope.hideNav = false;
  $scope.hideFollow = true;
  var navScroll = 0;
  $rootScope.popBlack = false;


  $scope.$on('$routeChangeSuccess', function(){
    var detailPath_1 = "/worldoftheblonds/"+$routeParams.category+"/"+$routeParams.event;
    var detailPath_2 = "/worldoftheblonds/"+$routeParams.category+"/"+$routeParams.event+"/"+$routeParams.id;

             if ($location.path() == '/'){
               $scope.colorNav = true;
               $scope.colorMobileNav = true;
               $rootScope.cornerLogo = false;
               $rootScope.burger = true;
               $rootScope.hideNav = false;
               $scope.hideFollow = true;
               $scope.colorMobileNav = true;
               $rootScope.popBlack = false;

             }else if(($location.path() == detailPath_1)||($location.path() == detailPath_2)){
               $scope.colorNav = true;
               $scope.colorMobileNav = false;
               $rootScope.cornerLogo = true;
               $rootScope.burger = false;
               $rootScope.hideNav = true;
               $scope.hideFollow = true;
               $rootScope.popBlack = true;



             }else{
               $scope.colorNav = false;
               $scope.colorMobileNav = false;
               $rootScope.cornerLogo = true;
               $rootScope.burger = false;
               $rootScope.hideNav = false;
               $scope.hideFollow = false;
               $rootScope.popBlack = true;
             }

  });






$rootScope.openPop_FN=function(){
  $rootScope.openPop = !$rootScope.openPop;
}


$rootScope.closePop_FN = function(path){
  if($rootScope.isMobile){
    $rootScope.openPop = false;
    // $location.path(path, true);
  }

    $location.path(path, true);

    //in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
    if( $('.cd-primary-nav').hasClass('is-visible') ) {

      $('.cd-menu-icon').toggleClass('is-clicked');
      $('.cd-header').toggleClass('menu-is-open');


      $('.navigation-ul').removeClass('nav__on');
      $('.nav-follow').removeClass('nav__on');



      setTimeout(removeNavi, 300);

      function removeNavi() {

        $('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
          $('body').removeClass('overflow-hidden');
        });

      }

    } else {

    }

}

});
