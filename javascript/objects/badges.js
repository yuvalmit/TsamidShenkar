var Badges = function() {
	this.badgesArray = new Array();
};

Badges.prototype.addBadge = function(ID, path) {
	this.badgesArray.push({"id":ID, "path":path});
};

/* Getters */
// Return the associative array of the object in which you will find the key value pair (id, path)
Badges.prototype.getBadges = function() {
    return this.badgesArray;
};