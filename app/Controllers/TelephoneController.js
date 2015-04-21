/**
 * Created by zehuagong on 4/12/15.
 */
function TelephoneController($scope, $location, contactService) {
    //$scope.contacts = [{id:1, firstName:'Yanyu', lastName:'Chen', mobile:9131111111, city:'dayton', email:'juliacoco@gmail.com',
    //accountTo:'zehuagon@buffalo.edu'}];
    $scope.test = "Hello Test";
    $scope.data = {name: 'satya'};
    // $scope.editContact = {id:1, firstName:'Da', lastName:'Da', mobile:9131111111,
    //  city:'dayton', email:'juliacoco@gmail.com', accountTo:'zehuagon@buffalo.edu'};
    function init() {
        $scope.editContact = {
            id: 1,
            firstName: 'Da',
            lastName: 'Da',
            mobile: 9131111111,
            city: 'dayton',
            email: 'juliacoco@gmail.com',
            accountTo: 'zehuagon@buffalo.edu'
        };

        alert(($scope.editContact.firstName));
        alert("The telephoneController is loaded");
        alert('current user is ' + sessionStorage.useremail);
        //all contacts
        var contacts = contactService.getContacts();
        alert("The arr length: ");
        alert(contacts.length);
        console.log("The all of contacts is ");
        console.log(contacts);
        $scope.contacts = [];

        for (var i = 0; i < contacts.length; i++) {
            alert('count ' + i);
            alert(contacts[i].accountTo);
            if (contacts[i].accountTo == sessionStorage.useremail) {
                $scope.contacts.push(contacts[i]);
            }

        }
        console.log("The scope contact is ");
        console.log($scope.contacts);
        //for (var i = 0; i < contacts.length; i++) {
        //   if (contacts[i].accountTo != sessionStorage.useremail) {
        //      contacts.splice(i, 1);

        //}
        //}
        //$scope.contacts = contacts;
        getCurrentContact();

        //console.log("The current edit contact is ");
        //console.log($scope.editContact);

    }


    init();

    function getCurrentContact() {
        if (sessionStorage.currentContactId != '' && sessionStorage.currentContactId != undefined) {
            var id = sessionStorage.currentContactId;
            $scope.editContact = contactService.getContactById(id);
            alert("getCurrent Contact called!");
            console.log("The edit contact object is");
            console.log($scope.editContact);
            //alert($scope.editContact.firstName);
        }
    }

    $scope.newContact = {};


    $scope.addContact = function () {
        alert("Add triggered...");
        $scope.newContact.accountTo = sessionStorage.useremail;
        contactService.addContact($scope.newContact);
        //$scope.contacts = contacts;
        //$scope.newContact.id = $scope.contacts.length+1;
        //$scope.newContact.accountTo = sessionStorage.useremail;
        alert($scope.newContact.firstName);
        //contact.accountTo = sessionStorage.useremail;
        //$scope.contacts.push($scope.newContact);
        $location.path("/Telephone");

    };

    $scope.editJumpPage = function (contact) {

        alert('edit button is triggered...');

        //$location.path('/EditContact');
        //$scope.editContact = contact;
        console.log(contact);

        sessionStorage.currentContactId = contact.id;
        $location.path('/EditContact');
    };

    $scope.deleteContact = function (contact) {
        alert("del is triggered...");
        // var contact = $scope.contact;
        //alert(contact.id);
        //var selectedContact = contact;
        contactService.deleteContact(contact);
        //console.log("after delete button, the scope contacts is" + contactService.deleteContact());
        $location.path("/Telephone1");


    };

    $scope.editContact = function () {
        alert("submit button triggered");
        //var id = sessionStorage.currentContactId;
        //$scope.editContact = contactService.getContactById(id);
        //console.log($scope.editContact);

        $scope.editContact.id = sessionStorage.currentContactId;
        $scope.editContact.accountTo = sessionStorage.useremail;

        contactService.updateContact($scope.editContact);
        alert("submit button triggered");
        $location.path("/Telephone");
    }

}

phoneBook.controller("TelephoneController", TelephoneController);