/**
 * Created by zehuagong on 4/10/15.
 */
phoneBook.factory('AccountFactory', function () {
    var accounts = [{
        password: 123456,
        email: 'zehuagon@buffalo.edu', city: 'NJ', mobile: 7164799547
    }];

    var repository = {};

    repository.addAccount = function (account) {
        accounts.push(account);
    }

    repository.getAccount = function () {
        return accounts;
    }

    repository.getAccountByEmail = function (email) {
        var account;
        for (var i = accounts.length - 1; i >= 0; i--) {
            if (accounts[i].email == email) {
                account = accounts[i];
                break;

            }

        }
        return account;

    }

    repository.validateAcount = function (email, password) {
        var isValid = false;
        for (var i = 0; i < accounts.length; i++) {
            if (accounts[i].email == email && accounts[i].password == password) {
                isValid = true;
                break;

            }
        }

        return isValid;

    }

    repository.updateAccount = function (account) {
        for (i = 0; i < accounts.length; i++) {
            if (accounts[i].email == account.email) {
                accounts[i] = account;
                break;
            }
        }

    }

    repository.resetPassword = function (email, password) {
        var account = repository.getAccountByEmail(email);
        alert("account is " + account);
        account.password = password;
        repository.updateAccount(account);

    }

    return repository;

});