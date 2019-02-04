'use strict';

var Route =  angular.module('myApp', ['ngRoute', 'ngAnimate', 'ngResource', 'myapp.services','ngSanitize'
]);



Route.filter('trustUrl', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
  });

Route.run(['$anchorScroll', '$route', '$rootScope', '$location','$templateCache','$routeParams', function($anchorScroll, $route, $rootScope, $location, $templateCache, $routeParams) {

      var original = $location.path;
      $location.path = function (path, reload) {
          if (reload === false) {
              var lastRoute = $route.current;
              var un = $rootScope.$on('$locationChangeSuccess', function () {
                  $route.current = lastRoute;
                  un();
              });
          }
          else if (reload === true){

              var currentPageTemplate = $route.current.templateUrl;
              $templateCache.remove(currentPageTemplate);

              var un = $rootScope.$on('$locationChangeSuccess', function () {
                $route.current = 'worldoftheblonds/'+$routeParams.category+'/'+$routeParams.event;
                un();
                $route.reload();

              });

          }
          return original.apply($location, [path]);
      };


//...................................loader
  $rootScope.pageLoading = true;



}]);


  Route.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    // use the HTML5 History API
    $locationProvider.html5Mode(true);

    $routeProvider
    // $locationChangeStart

    .when('/worldoftheblonds/:category/:event/:id', {
        templateUrl: 'world/world-detail.html',
        reloadOnSearch: true,
        controller: 'detailworldCtrl'
    })


    .when('/worldoftheblonds/:category/:event', {
        templateUrl: 'world/world-detail.html',
        reloadOnSearch: true,
        controller: 'detailworldCtrl'
    })


      .when('/worldoftheblonds/:category', {
        templateUrl: 'world/world.html',
        reloadOnSearch: true
      })


      .when('/worldoftheblonds', {
        templateUrl: 'world/world.html',
        controller: 'worldCtrl'
      })

      .when('/social', {
        templateUrl: 'social/social.html',
        controller: 'socialCtrl'
      })

      .when('/about', {
        templateUrl: 'about/about.html',
        controller: 'aboutCtrl'
      })

      .when('/contact', {
        templateUrl: 'contact/contact.html',
        controller: 'contactCtrl'
      })

      .when('/', {
        templateUrl: 'intro/intro.html',
        controller: 'introCtrl'
      })



      // put your least specific route at the bottom
      .otherwise({redirectTo: '/'});


  }]);

Route.controller('routeCtrl', ['$anchorScroll', '$location', '$scope','anchorSmoothScroll','$window','$route','getService','$rootScope','$routeParams','$location','$window', function ($anchorScroll, $location, $scope, anchorSmoothScroll,$window, $route,getService, $rootScope, $routeParams, $location, $window) {

//.......page class
$scope.pageClass = "page-home";


//.......initializing variables
$scope.colorNav = true;
$rootScope.isWorldOfTheBlonds =false;
$scope.scrolledThroughWorld = 0;


  //...........................get MAIN

    $rootScope.main = [];
    $rootScope.intro;
    $rootScope.world;
    $rootScope.social;
    $rootScope.about;
    $rootScope.contact;

      // This service's function returns a promise, but we'll deal with that shortly

      getService.get('main')
      // then() called when son gets back
      .then(function(data) {

        $rootScope.main = data;
        $rootScope.intro = data[0];
        $rootScope.world = data[1];
        $rootScope.social = data[2];
        $rootScope.about = data[3];
        $rootScope.contact = data[4];
        $rootScope.pageLoading = false;
        $rootScope.$broadcast("data_ready");


      }, function(error) {
          // promise rejected, could log the error with: console.log('error', error);

      });





  $scope.goHome = function(){
    $location.path('/', true);
  }


  $scope.$on('$routeChangeSuccess', function(){

    $scope.hideLogo = false;
    $rootScope.firstTime =0;
    if ($location.path() == '/'){
      $scope.hideLogo= false;
      $rootScope.createCanvas();

    }else{
      $scope.hideLogo= true;
    }

  });




//..................................................RESIZE FUNCTION
  angular.element(window).on("resize", function() {


    if (($location.path() == '/social') || ($location.path() == '/about') || ($location.path() == '/contact') || ($location.path() == '/')){

    }else if(($location.path() == '/worldoftheblonds/all') || ($location.path() == '/worldoftheblonds/editorials') || ($location.path() == '/worldoftheblonds/specialprojects') || ($location.path() == '/worldoftheblonds/collections')){
      $route.reload();
    }else{

    }




    // if ($rootScope.isDevice && !$rootScope.isiPad) {
    //   $route.reload();
    // }

      $rootScope.isMobile_FN();
      // $rootScope.closePop_FN();
      $scope.landscapeFunction();
      $scope.$apply();





   });









       /*................................CHECK DEVICE OR NOT.......................................*/
  $rootScope.isMobile_FN = function(){

        $rootScope.checkDevice, $rootScope.mobileQuery, $rootScope.isMobile, $rootScope.isDevice, $rootScope.isMobileDevice, $rootScope.isiPad;
       //....this is the function that checks the header of the browser and sees what device it is

       $rootScope.checkDevice = {
             Android: function() {
                 return navigator.userAgent.match(/Android/i);
             },
             BlackBerry: function() {
                 return navigator.userAgent.match(/BlackBerry/i);
             },
             iOS: function() {
                 return navigator.userAgent.match(/iPhone|iPad|iPod/i);
             },
             iPad: function() {
                 return navigator.userAgent.match(/iPad/i);
             },
             Opera: function() {
                 return navigator.userAgent.match(/Opera Mini/i);
             },
             Windows: function() {
                 return navigator.userAgent.match(/IEMobile/i);
             },
             any: function() {
                 return ($rootScope.checkDevice.Android() || $rootScope.checkDevice.BlackBerry() || $rootScope.checkDevice.iOS() || $rootScope.checkDevice.Opera() || $rootScope.checkDevice.Windows());
             }
         };

       //........checks the width

         $rootScope.mobileQuery = window.matchMedia( "screen and (max-width: 768px)" );
         $rootScope.isMobile = $rootScope.mobileQuery.matches;
       //.........returning true if device

         if ($rootScope.checkDevice.any()){
             $rootScope.isDevice= true;
         }else{
             $rootScope.isDevice=false;
         }


         if ($rootScope.isMobile){

         }else if(!$rootScope.isMobile){

         }

         if (($rootScope.isDevice==true)&&($rootScope.isMobile==true)){
             $rootScope.isMobileDevice= true;
         }else{
             $rootScope.isMobileDevice=false;
         }



         if ($rootScope.checkDevice.iPad()){
           $rootScope.isiPad=true;

         }else{
           $rootScope.isiPad=false;
         }




}//isMobile_FN


$rootScope.isMobile_FN();

//function removing website if landscape
 $rootScope.landscapeView = false;
  $scope.landscapeFunction = function(){

    if ($rootScope.isMobile==true){
        if(window.innerHeight < window.innerWidth){
          $rootScope.landscapeView = true;
          $rootScope.pageLoading = false;
          jQuery(".landscape-view-wrapper").css({
            "width":"100vw",
            "height": "100vh",
            "display": "block"
        });

        }else{
          $rootScope.landscapeView = false;
          $rootScope.pageLoading = false;
        }
    }

  }

$scope.landscapeFunction();


//............................................................................disableScroll functions

        // left: 37, up: 38, right: 39, down: 40,
        // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
        var keys = {37: 1, 38: 1, 39: 1, 40: 1};

        function preventDefault(e) {
          e = e || window.event;
          if (e.preventDefault)
              e.preventDefault();
          e.returnValue = false;
        }

        function preventDefaultForScrollKeys(e) {
            if (keys[e.keyCode]) {
                preventDefault(e);
                return false;
            }
        }

        $rootScope.disableScroll = function(){
          if (window.addEventListener) // older FF
              window.addEventListener('DOMMouseScroll', preventDefault, false);
          window.onwheel = preventDefault; // modern standard
          window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
          window.ontouchmove  = preventDefault; // mobile
          document.onkeydown  = preventDefaultForScrollKeys;
        }

        $rootScope.enableScroll = function(){
            if (window.removeEventListener)
                window.removeEventListener('DOMMouseScroll', preventDefault, false);
            window.onmousewheel = document.onmousewheel = null;
            window.onwheel = null;
            window.ontouchmove = null;
            document.onkeydown = null;
        }



}]);


Route.directive('canvasDirective', ['$rootScope',function($rootScope){
  return{
    restrict: 'A',
    link: function(scope, attr, elem){

      $rootScope.createCanvas = function(){

                var scene, camera, renderer, cubeCamera;
                var controls, guiControls, datGUI;
                var stats;
                var dae, spotLight;
                var SCREEN_WIDTH, SCREEN_HEIGHT;

                var loader = new  THREE.ColladaLoader();
                loader.options.convertUpAxis = true;
                loader.load('3d/theblonds.dae', function (collada){


                    dae = collada.scene;
                    dae.scale.x = dae.scale.y = dae.scale.z = 2;
                    dae.position.set(0,0,0);//x,z,y- if you think in blender dimensions ;)
                    dae.updateMatrix();
                    init();
                    animate();
                    console.log(scene);
                });
                function init(){
                    /*creates empty scene object and renderer*/
                    scene = new THREE.Scene();
                    camera =  new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, .1, 500);
                   cubeCamera = new THREE.CubeCamera(1, 1000, 256); // parameters: near, far, resolution
                   cubeCamera.renderTarget.minFilter = THREE.LinearMipMapLinearFilter; // mipmap filter

                   scene.add(cubeCamera);

                    renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});


                    renderer.setClearColor( 0x000000, 0 ); // the default
                    renderer.setSize(window.innerWidth, window.innerHeight);

                    camera.position.x = 0;
                    camera.position.y = 0;
                    camera.position.z = 42;



                    //golden materials
                    var other = new THREE.MeshPhongMaterial({
                        color: 0xcc9966,
                        specular: 0xffee00,
                        shininess: 60,
                        combine: THREE.MultiplyOperation
                    });

                    gold = new THREE.MeshPhongMaterial({
                        color: 0xffe489,
                        specular: 0xfffe489,
                        metal: true,
                        reflectivity:0.75,
                        shininess: 40,
                        envMap: cubeCamera.renderTarget,
                        combine: THREE.MultiplyOperation
                    });

                    materialArray = [gold, gold];
                    otherArray = [other, other];
                    var textMaterial = new THREE.MeshFaceMaterial(materialArray);
                    textMaterial2 = new THREE.MeshFaceMaterial(otherArray);

                    dae.traverse(function (child){
                           if ( child instanceof THREE.Mesh ) {
                               child.material = gold;
                           }
                    });


                    scene.add(dae);

                   var spotLight = new THREE.SpotLight( 0xffffff );
                   spotLight.position.set( 0, 0, 100 );
                   spotLight.castShadow = true;
                   spotLight.shadowMapWidth = 1024;
                   spotLight.shadowMapHeight = 1024;
                   spotLight.shadowCameraNear = 300;
                   spotLight.shadowCameraFar = 4000;
                   spotLight.shadowCameraFov = 30;


                   var spotLight_1 = new THREE.SpotLight( 0xffffff );
                   spotLight_1.position.set( 0, 0, -100 );
                   spotLight_1.castShadow = true;
                   spotLight_1.shadowMapWidth = 1024;
                   spotLight_1.shadowMapHeight = 1024;
                   spotLight_1.shadowCameraNear = 300;
                   spotLight_1.shadowCameraFar = 4000;
                   spotLight_1.shadowCameraFov = 30;


            //from right
                   var spotLight_2 = new THREE.SpotLight( 0xffffff );
                   spotLight_2.position.set( 200, 0, 0 );
                   spotLight_2.castShadow = true;
                   spotLight_2.shadowMapWidth = 1024;
                   spotLight_2.shadowMapHeight = 1024;
                   spotLight_2.shadowCameraNear = 300;
                   spotLight_2.shadowCameraFar = 4000;
                   spotLight_2.shadowCameraFov = 30;

            //from left
                    var spotLight_3 = new THREE.SpotLight( 0xffffff );
                    spotLight_3.position.set( -200, 0, 0 );
                    spotLight_3.castShadow = true;
                    spotLight_3.shadowMapWidth = 1024;
                    spotLight_3.shadowMapHeight = 1024;
                    spotLight_3.shadowCameraNear = 300;
                    spotLight_3.shadowCameraFar = 4000;
                    spotLight_3.shadowCameraFov = 30;



                   scene.add( spotLight, spotLight_1, spotLight_2, spotLight_3 );

                   $("#container").append(renderer.domElement);
                }


                function render() {
                   dae.rotation.y += 0.005;
                }

                function animate(){
                    requestAnimationFrame(animate);
                    render();
                    renderer.render(scene, camera);
                }



            $(window).resize(function(){

                SCREEN_WIDTH = window.innerWidth;
                SCREEN_HEIGHT = window.innerHeight;
                camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
                camera.updateProjectionMatrix();
                renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
                renderer.render(scene, camera);

            });

      }
    }
  }
}]);



// <RoutingRules>
//     <RoutingRule>
//         <Condition>
//             <HttpErrorCodeReturnedEquals>404</HttpErrorCodeReturnedEquals>
//         </Condition>
//         <Redirect>
//             <HostName>staging.theblonds.nyc</HostName>
//             <ReplaceKeyPrefixWith>#/</ReplaceKeyPrefixWith>
//         </Redirect>
//     </RoutingRule>
//     <RoutingRule>
//         <Condition>
//             <KeyPrefixEquals>/</KeyPrefixEquals>
//         </Condition>
//         <Redirect>
//             <ReplaceKeyPrefixWith>/#</ReplaceKeyPrefixWith>
//         </Redirect>
//     </RoutingRule>
// </RoutingRules>
