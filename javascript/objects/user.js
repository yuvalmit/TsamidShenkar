// In each creationg of user getting the most updated details
var User = function() {
    var parseUser = Parse.User.current();

    this.name = parseUser.get("username");
    this.email = parseUser.get("email");
    this.privileges = parseUser.get("privileges");
    this.gender = parseUser.get("gender");
    this.avatar = parseUser.get("avatar");
    this.achievements = parseUser.get("achievements");
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

User.prototype.setAchievements = function(achievements) {
    this.achievements = achievements;
};

/* Getters */
User.prototype.getName = function() {
    return this.name;
};

User.prototype.getEmail = function() {
    return this.email;
};

User.prototype.getPrivileges = function() {
    return this.privileges;
};

User.prototype.getGender = function() {
    return this.gender;
};

User.prototype.getAvatar = function() {
    return this.avatar;
};

User.prototype.getAchievements = function() {
    return this.achievements;
};