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

User.prototype.setAchievements = function(achievements) {
    this.achievements = achievements;
};

User.prototype.setBadges = function(badges) {
    this.badges = badges;
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

// The Avatar in the user object is a parse object and with it you can get the cutom avatar object
User.prototype.getGender = function() {
    return this.gender;
};

User.prototype.getAvatar = function() {
    return this.avatar;
};

User.prototype.getAchievements = function() {
    return this.achievements;
};

User.prototype.getBadges = function() {
    return this.badges;
};