// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  })
}).config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('vista1',{
        url:'/vista1',
        templateUrl:'inicio.html'
    }).state('vista2',{
        url:'/vista2',
        templateUrl:'otra.html'
    })
    $urlRouterProvider.otherwise("/vista1");
}).controller('ctrlPrincipal',function($scope, $http, $filter){
console.log("holaaaa");
    $scope.temperatura='';
    $scope.uv='';
   // $scope.date = new Date();
   //   $scope.ddMMMMyyyy = $filter('date')(new Date(), 'dd, MMMM yyyy');
     $scope.hh = parseInt($filter('date')(new Date(), 'HH'));
    console.log("La hora es "+$scope.hh);
 $http.get('http://campitos.elasticbeanstalk.com/estacion/temperatura').success(function(data){
        // console.log(data.length+" temperatura: "+data[12].temperatura);
         $scope.temperatura=data[$scope.hh].temperatura;
         $scope.uv=data[$scope.hh].uv;
         if($scope.uv<5)$scope.imagensita="img/green_light.png";
if($scope.uv>=5 & $scope.uv<10)$scope.imagensita="img/yellow_light.png";
if($scope.uv>=10)$scope.imagensita="img/red_light.png";
     });


});
