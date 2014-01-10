var Avatar = function(head, eyes, hair, mouth, extra) {
    this.head = head;
    this.eyes = eyes;
    this.hair = hair;
    this.mouth = mouth;
    this.extra = extra;
};

Avatar.prototype.getHead = function() {
    return this.head;
};

Avatar.prototype.getEyes = function() {
    return this.eyes;
};

Avatar.prototype.getHair = function() {
    return this.hair;
};

Avatar.prototype.getMouth = function() {
    return this.mouth;
};

Avatar.prototype.getExtra = function() {
    return this.extra;
};