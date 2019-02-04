var Contact = angular.module('myApp');


Contact.controller('contactCtrl', function($scope, $http, $rootScope, $window) {




  //setting an animation class for this specific page
  $scope.pageClass='page-contact';
  $scope.success=false;
  $scope.error=false;


  // create a blank object to hold our form information
  // $scope will allow this to pass between controller and view
$scope.contactMobileOutsideLink = function(){
  $window.open('http://www.mister.nyc/', '_blank');
}



// $scope.player_contact;
// $scope.myVideo_contact;
// $scope.playPause_contact;
//
//
// setTimeout(function(){
//     $scope.player_contact = videojs("#video-contact").ready(function(){
//         $scope.myVideo_contact = this;
//         this.volume(0);
//     });
//
//   $scope.myVideo_contact.play();
// }, 800);
//
// $scope.playPause_contact = function() {
//     if ($scope.myVideo_contact.paused){
//         $scope.myVideo_contact.play();
//     }
//     else{
//         $scope.myVideo_contact.pause();
//     }
// }
//
// $scope.$on('$destroy', function () {
//   $scope.player_contact.dispose();
// });
//
//
//
//
//
//






$scope.formData = {};

$scope.contactSelect = [
  {"field": "SUBJECT"},
  {"field": "GENERAL"},
  {"field": "JOBS"},
  {"field": "COLLECTIONS"},
  {"field": "PRESS"}
]


// $scope.formData.subject = $scope.formData.subject.toUpperCase();

  // process the form
  $scope.processForm = function() {

    // $scope.contactForm.$invalid = true;


    $scope.formData.mandrill_subject = $scope.formData.subject.toUpperCase() + " REQUEST FROM THEBLONDS.NYC";



     var mandrill = {
          "key": "bdCA3--5dGlYv3FITOzIfA",
          "message": {
              "html": $scope.formData.body,
              "text": $scope.formData.body,
              "subject": $scope.formData.mandrill_subject,
              "from_email": $scope.formData.email,
              "from_name": $scope.formData.name,
              "to": [
                  {
                      "email": "elia@mister.nyc",
                      "name": "THEBLONDS.NYC",
                      "type": "to"
                  }
              ],
              "headers": {
                  "Reply-To": $scope.formData.email
              }

          }
      }




    $http({
      method  : 'POST',
      dataType: 'JSON',
      url     : 'https://mandrillapp.com/api/1.0/messages/send.json',
      data    : mandrill  // pass in data as strings //
     })


    .success(function (data) {

        	$scope.success = true;
        	$scope.formdata = {};
          $scope.hideContact = true;
          // $scope.formData.name ={};
          // $scope.formData.email ={};
          // $scope.formData.subject ={};
          // $scope.formData.body ={};

    })
    .error(function (data) {
      	$scope.error = true;
        $scope.hideContact = true;
    });
  };


    // jQuery(".form-control-dropdown").select2({
    //   minimumResultsForSearch: Infinity,
    //   placeholder: "SUBJECT"
    // });
    $rootScope.pageLoading = false;



// //....mobile
$scope.contactMobileOutsideBackLink = function(){

  $window.location.reload();
}




});







Contact.directive('contactDirective', function(){
  return{
    restrict:'E',
    replace: true,
    templateUrl:'contact/contact.html'
  }
});
