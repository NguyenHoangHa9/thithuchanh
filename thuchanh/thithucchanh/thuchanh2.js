// code goes here

var app = angular.module("myApp", []);

app.controller("myCtrl",function ($scope){
    console.log("My controller.....");

    $scope.users = [
        {name: "Product One",email: "$22.50" },
        {name: "Product Two", email: "$15.00"},
        {name: "Product Fwo", email: "$123.82" },
        {name: "Product Five", email:"113.75"}

    ];
    $scope.addUser = function (){
        $scope.user.push($scope.newUser);
        $scope.newUser = {};
        $scope.message = "new Product Added Successfully";
    };
    $scope.selectUser =function (user){
        console.log(user);
        $scope.clickedUser =user;
    };

    $scope.editUser = function (){
        $scope.message = "Product Edit Successfully";
    };

    $scope.deleteUser = function (){
        $scope.users.splice($scope.users.indexOf($scope.clickedUser));
        $scope.message = "Product Deleted successfully";
    };
    $scope.clearMessage = function (){
        $scope.message = "";
    };

});