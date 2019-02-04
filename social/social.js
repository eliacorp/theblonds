var Social = angular.module('myApp');

Social.controller('socialCtrl',['$scope','$rootScope', '$http', function($scope, $rootScope, $http){

  //..............................................................................initializing some variables
$scope.pageClass='page-social';


  var maxID_0;
  var maxID_1;
  var maxID_2;
  var maxID_3;
  var maxID_4;
  var maxID_5;
  var maxID_6;
  var maxID_7;
  var maxID_8;
  var maxID_9;
  var maxID_10;
  var maxID_11;
  var maxID_12;
  var maxID_13;
  var maxID_14;

  $rootScope.instaGlobal = [];
  $scope.instaTotal =[];
  $scope.instapics = [];
  $scope.instapics1= [];
  $scope.instapics2 = [];
  $scope.instapics3= [];
  $scope.instapics4 = [];
  $scope.urlFound = [];
  $rootScope.totalDisplayed;



$rootScope.trustMe = function (riskyVideo){
  var video = $sce.trustAsResourceUrl(riskyVideo);
  return video;
}



  //..............................................................................loading new pictures
  $scope.noMore = false;

  $scope.globalLoadMore = function(i){

      if ($rootScope.totalDisplayed > 0){

      }else {
        //the controller
        $rootScope.totalDisplayed = i;
      }

      $scope.loadMore = function () {
      	$rootScope.totalDisplayed += i;
      };

  }

  //.......different loaded pictures for every device
    if ($scope.isjournalMobileDevice){

      $scope.globalLoadMore(11);

    }else if($scope.isjournalTabletDevice){

      $scope.globalLoadMore(14);

    }else{

      $scope.globalLoadMore(23);

    }











  $scope.hideLoadMore = true;

  setTimeout(function(){
    $scope.hideLoadMore = false;
  }, 1000);


  // $scope.filterRemovesLoadMore = function(){
  //   $scope.hideLoadMore = true;
  // }
  //
  // $scope.filterAllLoadMore = function(){
  //   $scope.hideLoadMore = false;
  // }



// ACCESS TOKEN =    235523787.f8f64ba.2c7aa7c5b3d64499aab9b53573f0be89


var access_token = '235523787.f8f64ba.571b673a27234273985a9b5d437cd647';

  //..............................................................................the GET request


  	var endpoint = 'https://api.instagram.com/v1/users/235523787/media/recent?access_token='+access_token+'&callback=JSON_CALLBACK';
  				$http({url: endpoint, method: 'JSONP', cache: true, isArray: true}).success(function(response){
  						// callback(response);

  							$scope.instaTotal = response.data;

								$scope.instaTotalLength= $scope.instaTotal.length;

              	$scope.lastNumber = $scope.instaTotalLength;

  							// usSpinnerService.stop('spinner-1');

                //
  							// var endpoint1 = 'https://api.instagram.com/v1/users/235523787/media/recent?access_token='+access_token+'&max_id=' + maxID_0 + '&callback=JSON_CALLBACK';
                //
  					    //         $http({url: endpoint1, method: 'JSONP', cache: true, isArray: true}).success(function(response){
                //
  							// 							$scope.instapics1 = response.data;
                //
  							// 							$scope.instaTotal = $scope.instaTotal.concat($scope.instapics1);
                //
  							// 							maxID_1 = response.pagination.next_max_id;
                //
                //
                //               //secondm is loaded so the load more can now be shown
                //               $scope.hideLoadMore = false;
                //
                //
  							// 							var endpoint2 = 'https://api.instagram.com/v1/users/235523787/media/recent?access_token='+access_token+'&max_id=' + maxID_1 + "&callback=JSON_CALLBACK";
                //
  							// 											$http({url: endpoint2, method: 'JSONP', cache: true, isArray: true}).success(function(response){
                //
  							// 														$scope.instapics2 = response.data;
                //
  							// 														$scope.instaTotal = $scope.instaTotal.concat($scope.instapics2);
                //
  							// 														maxID_2 = response.pagination.next_max_id;
                //
                //
  							// 											var endpoint3 = 'https://api.instagram.com/v1/users/235523787/media/recent?access_token='+access_token+'&max_id=' +maxID_2 + "&callback=JSON_CALLBACK";
                //
  							// 															$http({url: endpoint3, method: 'JSONP', cache: true, isArray: true}).success(function(response){
                //
  							// 																		$scope.instapics3 = response.data;
                //
  							// 																		$scope.instaTotal = $scope.instaTotal.concat($scope.instapics3);
                //
  							// 																		maxID_3 = response.pagination.next_max_id;
                //
                //
  							// 																		var endpoint4 = 'https://api.instagram.com/v1/users/235523787/media/recent?access_token='+access_token+'&max_id=' + maxID_3 + "&callback=JSON_CALLBACK";
                //
  							// 																						$http({url: endpoint4, method: 'JSONP', cache: true, isArray: true}).success(function(response){
                //
  							// 																									$scope.instapics4 = response.data;
                //
  							// 																									$scope.instaTotal = $scope.instaTotal.concat($scope.instapics4);
                //
  							// 																									maxID_4 = response.pagination.next_max_id;
                //
                //
                //
  							// 																									var endpoint5 = 'https://api.instagram.com/v1/users/235523787/media/recent?access_token='+access_token+'&max_id=' + maxID_4 + "&callback=JSON_CALLBACK";
                //
  							// 																													$http({url: endpoint5, method: 'JSONP', cache: true, isArray: true}).success(function(response){
                //
  							// 																																$scope.instapics5 = response.data;
                //
                //
  							// 																																$scope.instaTotal = $scope.instaTotal.concat($scope.instapics5);
                //
  							// 																																maxID_5 = response.pagination.next_max_id;
                //
                //
                //
                //
  							// 																																var endpoint6 = 'https://api.instagram.com/v1/users/235523787/media/recent?access_token='+access_token+'&max_id=' + maxID_5 + "&callback=JSON_CALLBACK";
                //
  							// 																																				$http({url: endpoint6, method: 'JSONP', cache: true, isArray: true}).success(function(response){
                //
  							// 																																							$scope.instapics6 = response.data;
                //
                //
  							// 																																							$scope.instaTotal = $scope.instaTotal.concat($scope.instapics6);
                //
  							// 																																							maxID_6 = response.pagination.next_max_id;
                //
                //
                //
  							// 																																							var endpoint7 = 'https://api.instagram.com/v1/users/235523787/media/recent?access_token='+access_token+'&max_id=' + maxID_6 + "&callback=JSON_CALLBACK";
                //
  							// 																																											$http({url: endpoint7, method: 'JSONP', cache: true, isArray: true}).success(function(response){
                //
  							// 																																														$scope.instapics7 = response.data;
                //
                //
                //
  							// 																																														$scope.instaTotal = $scope.instaTotal.concat($scope.instapics7);
                //
  							// 																																														maxID_7 = response.pagination.next_max_id;
                //
                //
                //
  							// 																																														var endpoint8 ='https://api.instagram.com/v1/users/235523787/media/recent?access_token='+access_token+'&max_id=' + maxID_7 + "&callback=JSON_CALLBACK";
                //
  							// 																																																		$http({url: endpoint8, method: 'JSONP', cache: true, isArray: true}).success(function(response){
                //
  							// 																																																					$scope.instapics8 = response.data;
                //
  							// 																																																					$scope.instaTotal = $scope.instaTotal.concat($scope.instapics8);
                //
  							// 																																																					maxID_8 = response.pagination.next_max_id;
                //
                //
  							// 																																																					var endpoint9 = 'https://api.instagram.com/v1/users/235523787/media/recent?access_token='+access_token+'&max_id=' + maxID_8 + "&callback=JSON_CALLBACK";
                //
  							// 																																																									$http({url: endpoint9, method: 'JSONP', cache: true, isArray: true}).success(function(response){
                //
  							// 																																																												$scope.instapics9 = response.data;
                //
                //
  							// 																																																												$scope.instaTotal = $scope.instaTotal.concat($scope.instapics9);
                //
  							// 																																																												maxID_9 = response.pagination.next_max_id;
                //
                //
                //
  							// 																																																												var endpoint10 = 'https://api.instagram.com/v1/users/235523787/media/recent?access_token='+access_token+'&max_id=' + maxID_9 + "&callback=JSON_CALLBACK";
                //
  							// 																																																																$http({url: endpoint10, method: 'JSONP', cache: true, isArray: true}).success(function(response){
                //
  							// 																																																																			$scope.instapics10 = response.data;
                //
                //
  							// 																																																																			$scope.instaTotal = $scope.instaTotal.concat($scope.instapics10);
                //
  							// 																																																																			maxID_10 = response.pagination.next_max_id;
                //
                //
  							// 																																																																			var endpoint11 = 'https://api.instagram.com/v1/users/235523787/media/recent?access_token='+access_token+'&max_id=' + maxID_10 + "&callback=JSON_CALLBACK";
                //
  							// 																																																																							$http({url: endpoint11, method: 'JSONP', cache: true, isArray: true}).success(function(response){
                //
  							// 																																																																										$scope.instapics11 = response.data;
                //
                //
  							// 																																																																										$scope.instaTotal = $scope.instaTotal.concat($scope.instapics11);
                //
  							// 																																																																										maxID_11 = response.pagination.next_max_id;
                //
  							// 																																																																										var endpoint12 = 'https://api.instagram.com/v1/users/235523787/media/recent?access_token='+access_token+'&max_id=' + maxID_11 + "&callback=JSON_CALLBACK";
                //
  							// 																																																																														$http({url: endpoint12, method: 'JSONP', cache: true, isArray: true}).success(function(response){
                //
  							// 																																																																																	$scope.instapics12 = response.data;
                //
                //
  							// 																																																																																	$scope.instaTotal = $scope.instaTotal.concat($scope.instapics12);
                //
  							// 																																																																																	maxID_12 = response.pagination.next_max_id;
                //
  							// 																																																																																	var endpoint13 = 'https://api.instagram.com/v1/users/235523787/media/recent?access_token='+access_token+'&max_id=' + maxID_12 + "&callback=JSON_CALLBACK";
                //
  							// 																																																																																					$http({url: endpoint13, method: 'JSONP', cache: true, isArray: true}).success(function(response){
                //
  							// 																																																																																								$scope.instapics13 = response.data;
                //
                //
  							// 																																																																																								$scope.instaTotal = $scope.instaTotal.concat($scope.instapics13);
                //
  							// 																																																																																								maxID_13 = response.pagination.next_max_id;
                //
                //                                                                                                                                                                                 console.log($scope.instaTotal);
                //
                //
                //
                //
                //
  							// 																																																																																								$scope.instaTotalLength= $scope.instaTotal.length;
                //
                //                                                                                                                                                                               	$scope.lastNumber = $scope.instaTotalLength;
                //
                //
                //
  							// 																																																																																								 $scope.$watch('[totalDisplayed, instaTotalLength]', function(newValues, oldValues) {
                //
                //
                //
  							// 																																																																																											if ($rootScope.totalDisplayed > $scope.instaTotalLength){
  							// 																																																																																												 $scope.noMore = true;
                //
                //
  							// 																																																																																											}
  							// 																																																																																								 });
                //
                //
                //
                //                                                                                                                                                                                 //  //......getting a link out of the instagram bio
                //                                                                                                                                                                                  //
                //                                                                                                                                                                                 //  		for ( var i = 0, len = $scope.instaTotal.length; i < len; i++){
                //                                                                                                                                                                                  //
                //                                                                                                                                                                                  //
                //                                                                                                                                                                                 //  			var cop = $scope.instaTotal[i].caption.text;
                //                                                                                                                                                                                 //  		//
                //                                                                                                                                                                                 //  		//
                //                                                                                                                                                                                 //  		// 	var freak = $scope.instaTotal[i].caption.text
                //                                                                                                                                                                                 //  		// replaceURLWithHTMLLinks(freak);
                //                                                                                                                                                                                  //
                //                                                                                                                                                                                 //  			var re = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
                //                                                                                                                                                                                 //  			$scope.urlFound[i] = cop.match(re);
                //                                                                                                                                                                                  //
                //                                                                                                                                                                                 //  		}
                //
                //
                //
                //
                //
                //
                //
                //
                //
  							// 																																																																																					}); //13
                //
                //
  							// 																																																																														}); //12
                //
                //
  							// 																																																																							}); //11
                //
                //
  							// 																																																																}); //10
                //
                //
  							// 																																																									}); //9
                //
                //
                //
  							// 																																																		}); //8
                //
                //
  							// 																																											}); //7
                //
                //
  							// 																																				}); //6
                //
  							// 																													}); //5
                //
  							// 																						}); //4
                //
  							// 															});//3
  							// 								}); //2
                //
  					    //         }); //1


  				}); //0




  	$rootScope.pageLoading = false;



  	$scope.journalMobileLocation = function(url){
  		$location.path(url).search();
  	}

  	$scope.journalMobileOutsideViewOnInstagram = function(){
  		$window.open($scope.instaTotal[$scope.realNumber].link, '_blank');
  	}

  	$scope.journalMobileOutsideReadFullStory = function(){
  		$window.open($scope.urlFound[$scope.realNumber][0], '_blank');
  	}







        $scope.activateSparkle_social = function(i){

          if (!$rootScope.isMobileDevice){

          var thisString = '';
          var thisString = '#insta-'+i
          var sparkles_element_social = jQuery(thisString);



                if(this.sparkle == true){
                    $(this).trigger("start.sparkle");
                } else {
                  sparkles_element_social.sparkle({
                    color: "#fce581",
                    count: 30,
                    overlap: 0,
                    speed: 1,
                    minSize: 4,
                    maxSize: 7,
                    direction: "down"
                  });

                  this.sparkle= true;
                }

              }
        };



        $scope.stopSparkle_social= function(category, i){
          $(this).trigger("stop.sparkle");
        }











}]);




Social.directive('socialDirective', function(){
  return{
    restrict:'E',
    replace: true,
    templateUrl:'social/social.html'
  }
});

Social.directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            // scope.journalLoading = false;

            setTimeout(function(){

                elem.bind('load', function() {
                    // scope.journalsLoading = false;
                    jQuery('#social-loader-'+elem[0].id).css({'display':'none'});
                });
                elem.bind('error', function(){
                    console.log('image could not be loaded');
                });

            }, 600);

            setTimeout(function(){
              jQuery('.social-images-loader-div').css({'display':'none'});
              scope.$digest();
            }, 700);
        }
    };
});
