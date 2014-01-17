var Badges = function() {
	this.badgesArray = new Array();
};

Badges.prototype.addBadge = function(ID, path) {
	this.badgesArray.push({key1:ID, Key2:path});
};

/* Getters */
Badges.prototype.getBadgePath = function() {
    return this.badgesArray['key2'];
};