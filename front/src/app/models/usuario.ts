export class Usuario {

    constructor(
        _id = "",
        name = "",
        lastname = "",
        phone = "",
        email = "",
    ) {
        this._id = _id;
        this.name = name;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
    }
    _id: String;
    name: String
    lastname: String
    phone: String
    email: String
}
