angular.module('MetApp', [])

.controller('HomeController', HomeController)
.controller('GeneralInfoController', GeneralInfoController)
.controller('DonorInfoController', DonorInfoController)

function HomeController($scope){
  $scope.header = "The Metropolitan Museum of Art";
  $scope.img = "http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/pig-full-body.jpg.adapt.945.1.jpg";
}

function GeneralInfoController($scope){
  $scope.lateHours = "10:00am - 9:00pm";
  $scope.normalHours = "10:00am - 5:30pm";
}

function DonorInfoController($scope){
  $scope.email = "email@email.com";
  $scope.amount = [$50, $100, $250, $500, $1000];
}