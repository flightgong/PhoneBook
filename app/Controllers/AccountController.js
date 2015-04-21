function AccountController($scope, $location, AccountFactory, $rootScope) {


    alert("from login");
    alert("hello..");
    //$scope.loggedAccount = "";

    $scope.resetAccount = {};
    $scope.currentAccount = {};


    function init() {
        $scope.accountArray = AccountFactory.getAccount();
        //why it is undefined?
        if (sessionStorage.useremail != "" && sessionStorage.useremail != undefined) {
            alert("go inside the if");
            $rootScope.loggedAccount = sessionStorage.useremail;
            $rootScope.isAuthenticated = true;
        }
    }

    init();


    //$scope.addAccount = function(account) {
    //$scope.account = {};
    // account.id = $scope.accountArray.length + 1;
    //$scope.accountArray.push(account);
    //}

    $scope.getAccountById = function (id) {
        for (var i = $scope.length - 1; i >= 0; i--) {
            if ($scope.accountArray[i].id == id) {
                $scope.account = $scope.accountArray[i];
                break;
            }
        }


    }

    function getCurrentAccount() {
        var email = sessionStorage.useremail;

        $scope.currentAccount = AccountFactory.getAccountByEmail(email);
        //alert($scope.currentAccount.email);

    }

    getCurrentAccount();

    //$scope.getCurrentAccount = function() {
    //  var email = sessionStorage.useremail;

    //var currentAccount = AccountFactory.getAccountByEmail(email);
    //return currentAccount;
    //alert($scope.currentAccount.mobile);
    //}


    $scope.updateAccount = function (id, account) {
        $scope.getAccountById(id);
        $scope.account = account;


    }

    //$scope.isValidUser = false;

    $scope.login = function () {
        var email = $scope.user.username;
        var password = $scope.user.password;

        var isValidUser = AccountFactory.validateAcount(email, password);
        // var isValidUser = false;
        /*alert($scope.user.username);
         alert($scope.user.password);
         for (var i = $scope.accountArray.length - 1; i >= 0; i--) {
         if ($scope.accountArray[i].email == $scope.user.username && $scope.accountArray[i].password == $scope.user.password) {
         isValidUser = true;
         break;

         }
         }*/

        if (isValidUser) {
            sessionStorage.useremail = $scope.user.username;
            alert('session is' + sessionStorage.useremail);
            //$scope.getCurrentAccount();
            // alert($scope.currentAccount.city);
            $location.path('/UserInfo');
            //isValidUser = false;

        } else {
            alert('inValid User');

        }

    }

    $scope.register = function () {

        AccountFactory.addAccount($scope.account);
        alert('register sucessfully...');
        $location.path('/Login');


    }

    $scope.logOut = function () {
        alert("logout is click");
        sessionStorage.useremail = "";
        $scope.currentAccount = null;
        $location.path("/Login");
        $rootScope.isAuthenticated = false;
    }


    $scope.reset = function () {
        alert('reset triggered');
        AccountFactory.resetPassword(sessionStorage.useremail, $scope.resetAccount.newPassword)
        $location.path("/UserInfo");

    }

    $scope.updateAccount = function () {
        alert("submit is triggered!");
        var account = $scope.currentAccount;
        alert(account.mobile);
        AccountFactory.updateAccount(account);
        $location.path("/UserInfo");

    }


}

phoneBook.controller('AccountController', AccountController);