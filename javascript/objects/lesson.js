var Lesson = function() {
	this.badge = new Array(); // The badge property is an associative array which has the id and path of the badge
};

/* Setters*/
Lesson.prototype.setName = function(name) {
    this.name = name;
};

Lesson.prototype.setDate = function(date) {
    this.date = date;
};

Lesson.prototype.setBadge = function(id, path) {
	this.badge.push({"id":id, "path":path});
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

Lesson.prototype.getBadge = function() {
    return this.badge;
};

Lesson.prototype.getGoogleLink = function() {
    return this.googleLink;
};

Lesson.prototype.getYoutubeLink = function() {
    return this.youtubeLink;
};