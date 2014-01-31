// In each creationg of user getting the most updated details
var User = function() {

};

/* Setters*/
User.prototype.setName = function(name) {
    this.name = name;
};

User.prototype.setEmail = function(email) {
    this.email = email;
};

User.prototype.setPrivileges = function(privileges) {
    this.privileges = privileges;
};

User.prototype.setGender = function(gender) {
    this.gender = gender;
};

User.prototype.setAvatar = function(avatar) {
    this.avatar = avatar;
};

User.prototype.setBadges = function(badges) {
    this.badges = badges;
};

User.prototype.setFavoriteFood = function(food) {
    this.food = food;
};

/* Getters */
// Return the user username
User.prototype.getName = function() {
    return this.name;
};

// Return the user email
User.prototype.getEmail = function() {
    return this.email;
};

// Return the user privileges, 1 for normal user, 2 for admin
User.prototype.getPrivileges = function() {
    return this.privileges;
};

// Return the user gender (male / female)
User.prototype.getGender = function() {
    return this.gender;
};

// The Avatar in the user object is a parse object and with it you can get the avatar object as defined in avatar.js
// using the getUserAvatar() method
User.prototype.getAvatar = function() {
    return this.avatar;
};

// Return an array of badges ID's that the user have
User.prototype.getBadges = function() {
    return this.badges;
};

// Return an array of favorite food ID's that the user have
User.prototype.getFavoriteFood = function() {
    return this.food;
};
