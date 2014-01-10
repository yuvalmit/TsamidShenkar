var Avatar = function(head, eyes, hair, mouth, body) {
    this.head = head;
    this.eyes = eyes;
    this.hair = hair;
    this.mouth = mouth;
    this.body = body;
};

User.prototype.getHead = function() {
    return this.head;
};

User.prototype.getEyes = function() {
    return this.eyes;
};

User.prototype.getHair = function() {
    return this.hair;
};

User.prototype.getMouth = function() {
    return this.mouth;
};

User.prototype.getBody = function() {
    return this.body;
};