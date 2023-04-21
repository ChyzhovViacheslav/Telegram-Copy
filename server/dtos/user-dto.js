module.exports = class UserDto {
    email;
    id;
    images;
    username;
    firstname;
    lastname;
    bio;

    constructor(model){
        this.email = model.email;
        this.id = model._id;
        this.images = model.images;
        this.username = model.username;
        this.firstname = model.firstname;
        this.lastname = model.lastname;
        this.bio = model.bio;
    }
}