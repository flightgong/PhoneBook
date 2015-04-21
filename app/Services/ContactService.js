/**
 * Created by zehuagong on 4/12/15.
 */
phoneBook.service('contactService', function () {
    var contacts = [{
        id: 1, firstName: 'Yanyu', lastName: 'Chen', mobile: 9131111111, city: 'dayton', email: 'juliacoco@gmail.com',
        accountTo: 'zehuagon@buffalo.edu'
    }];

    this.getContacts = function () {
        return contacts;
    }

    this.addContact = function (contact) {
        contact.id = contacts.length + 1;
        contacts.push(contact);
        //return contacts;

    }

    this.getContactById = function (id) {
        var contact;
        for (var i = 0; i < contacts.length; i++) {
            if (contacts[i].id == id) {
                contact = contacts[i];
                break;
            }

        }
        return contact;

    }

    this.deleteContact = function (contact) {
        alert(contact.firstName);
        //var contact = this.getContactById(id);
        //contacts = [{id:1, firstName:'Yanyu2', lastName:'Chen2', mobile:9131111111, city:'dayton', email:'juliacoco@gmail.com',
        //  accountTo:'zehuagon@buffalo.edu'}];
        for (var i = 0; i < contacts.length; i++) {
            alert("The contact id is");
            alert(contact.id);
            if (contacts[i].id == contact.id) {
                alert("THe 2rd time");
                alert(contact.id);

                contacts.splice(i, 1);

                break;
            }
        }
        alert("The object contact is:");
        alert(contact);
        alert("The array is: ");
        alert(contacts[0]);

    }

    this.updateContact = function (contact) {
        for (var i = 0; i < contacts.length; i++) {
            if (contacts[i].id == contact.id) {
                contacts[i] = contact;
                break;
            }
        }
        //contact = newContact;
    }


});