var Lesson = function() {

};

/* Setters*/
Lesson.prototype.setName = function(name) {
    this.name = name;
};

Lesson.prototype.setdate = function(date) {
    this.date = date;
};

Lesson.prototype.setdAchievement = function(achievement) {
    this.achievement = achievement;
};

Lesson.prototype.setGoogleLink = function(link) {
    this.googleLink = link;
};

Lesson.prototype.setYoutubeLink = function(link) {
    this.youtubeLink = link;
};

/* Getters */
Lesson.prototype.getName = function() {
    return this.name;
};

Lesson.prototype.getDate = function() {
    return this.date;
};

Lesson.prototype.getdAchievement = function() {
    return this.achievement;
};

Lesson.prototype.getGoogleLink = function() {
    return this.googleLink;
};

Lesson.prototype.getYoutubeLink = function() {
    return this.youtubeLink;
};