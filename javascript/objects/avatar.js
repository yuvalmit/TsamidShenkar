var Avatar = function(head, eyes, hair, mouth, body) {
    this.head = head;
    this.eyes = eyes;
    this.hair = hair;
    this.mouth = mouth;
    this.body = body;
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

Avatar.prototype.getBody = function() {
    return this.body;
};