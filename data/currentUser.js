
export class CurrentUser {
    static uid = '';
    static email = '';
    static firstName = '';
    static lastName = '';
    static displayName = '';
    static isAdmin = false;

    constructor(uid, email, firstName, lastName, displayName, isAdmin = false) {
        this.uid = uid;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.displayName = displayName;
        this.isAdmin = isAdmin;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get isAdmin() {
        return this.isAdmin;
    }

    set isAdmin(isAdmin) {
        this.isAdmin = isAdmin;
    }

    get uid() {
        return this.uid;
    }

    set uid(uid) {
        this.uid = uid;
    }

    get email() {
        return this.email;
    }

    set email(email) {
        this.email = email;
    }

    get firstName() {
        return this.firstName;
    }

    set firstName(firstName) {
        this.firstName = firstName;
    }

    get lastName() {
        return this.lastName;
    }

    set lastName(lastName) {
        this.lastName = lastName;
    }

    get displayName() {
        return this.displayName;
    }

    set displayName(displayName) {
        this.displayName = displayName;
    }
}