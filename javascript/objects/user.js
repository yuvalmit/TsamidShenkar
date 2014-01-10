var User = function(name, email, privileges, gender, avatar, prizes) {
    this.name = name;
    this.email = email;
    this.privileges = privileges;
    this.gender = gender;
    this.avatar = avatar;
    this.prizes = prizes;
};

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

User.prototype.getPrizes = function() {
    return this.prizes;
};