var Intro = angular.module('myApp');

Intro.controller('introCtrl',['$scope','$rootScope','$location', function($scope, $rootScope, $location){

$rootScope.myVideo;
// $scope.player;
$rootScope.playPause;
$rootScope.makeBig;
$rootScope.makeSmall;
$rootScope.makeNormal;
$scope.createVideo;

$scope.pageClass='page-home';
$scope.volumeIntroLevel=0.5;
$rootScope.hideGallery=true;
$rootScope.hidePlayButton=true;
$rootScope.hideBackground=true;





var player;

setTimeout(function(){

    player = videojs("#video").ready(function(){
        $rootScope.myVideo = this;
        this.volume(0.5);
    });

    $scope.$on('$destroy', function () {
      player.dispose();
    });


}, 800);






//DESKTOP

if (($rootScope.isDevice==false)&&($rootScope.isiPad==false)){

  $rootScope.hideGallery=true;
  $rootScope.hidePlayButton=true;
  $rootScope.hideBackground=true;

$rootScope.volumeIntro = function() {
    if ($scope.volumeIntroLevel==0.5){
        $rootScope.myVideo.volume(0);
        $scope.volumeIntroLevel=0;
    }
    else{
        $rootScope.myVideo.volume(0.5);
        $scope.volumeIntroLevel=0.5;
    }
}

      setTimeout(function(){
        $rootScope.myVideo.play();
      }, 800);


    }//DESKTOP






    else if(($rootScope.isDevice=true)&&($rootScope.isiPad==false)){



        $rootScope.hideGallery=true;
        $rootScope.hidePlayButton=false;
        $rootScope.hideBackground=false;

        var playObject = document.getElementById("play-button");
        playObject.addEventListener("click", playVideo);
        function playVideo(){
          $rootScope.myVideo.play();
        }


    }// end if mobile device



    else if(($rootScope.isDevice==true)&&($rootScope.isiPad==true)){

        $rootScope.hideGallery=true;
        $rootScope.hidePlayButton=false;
        $rootScope.hideBackground=true;

        $rootScope.volumeIntro = function() {
            if ($scope.volumeIntroLevel==0.5){
                $rootScope.myVideo.volume(0);
                $scope.volumeIntroLevel=0;
            }
            else{
                $rootScope.myVideo.volume(0.5);
                $scope.volumeIntroLevel=0.5;
            }
        }

        // setTimeout(function(){
        //  $rootScope.playVideoiPad();
        // }, 1000);


        $rootScope.playVideoiPad = function(){
          $rootScope.myVideo.play();
          $('#mobile-gallery').fadeOut(1500);
          $('#background').fadeOut(1500);
        }

    }// end if iPAD


}]); //end of controller








Intro.directive('introDirective', function(){
  return{
    restrict:'E',
    replace: true,
    templateUrl:'intro/intro.html',
    link: function(){


    }//end of the link function
  }
});



