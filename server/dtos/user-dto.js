module.exports = class UserDto {
    email;
    id;
    image;
    username;

    constructor(model){
        this.email = model.email;
        this.id = model._id;
        this.image = model.image
        this.username = model.username
    }
}