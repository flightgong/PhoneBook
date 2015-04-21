/**
 * Created by zehuagong on 4/7/15.
 */
var phoneBook = angular.module('phoneBook', ['ngRoute']);

phoneBook.config(function ($routeProvider) {
    $routeProvider
        .when('/Home', {
            controller: 'IndexController',
            templateUrl: 'app/partials/Home.html'
        })
        .when('/About', {
            controller: 'IndexController',
            templateUrl: 'app/partials/About.html'
        })
        .when('/Contacts', {
            controller: 'IndexController',
            templateUrl: 'app/partials/Contacts.html'
        })
        .when('/Login', {
            controller: 'AccountController',
            templateUrl: 'app/partials/Login.html'
        })
        .when('/logout', {
            controller: 'AccountController',
            templateUrl: 'app/partials/logout.html'
        })
        .when('/Register', {
            controller: 'AccountController',
            templateUrl: 'app/partials/Register.html'
        })
        .when('/Reset', {
            controller: 'AccountController',
            templateUrl: 'app/partials/ResetPassword.html'
        })
        .when('/UserInfo', {
            controller: 'AccountController',
            templateUrl: 'app/partials/UserInfo.html'
        })
        .when('/EditUserInfo', {
            controller: 'AccountController',
            templateUrl: 'app/partials/EditUserInfo.html'
        })
        .when('/Telephone', {
            controller: 'TelephoneController',
            templateUrl: 'app/partials/telephone.html'
        })
        .when('/Telephone1', {
            controller: 'TelephoneController',
            templateUrl: 'app/partials/telephone.html'
        })
        .when('/newContact', {
            controller: 'TelephoneController',
            templateUrl: 'app/partials/AddContact.html'
        })
        .when('/EditContact', {
            controller: 'TelephoneController',
            templateUrl: 'app/partials/EditContact.html'
        })
        .otherwise({redirectTo: '/Home'})

});
