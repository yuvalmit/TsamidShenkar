
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

Parse.Cloud.beforeSave("Avatars", function(request, response) {
	var AvatarExtra = Parse.Object.extend("AvatarExtra");
	var extra = new AvatarExtra();
	extra.set("objectId", "IiBzTnG93X");

	var AvatarExtra = Parse.Object.extend("AvatarEyes");
	var eyes = new AvatarExtra();
	eyes.set("objectId", "XMoYxEhEcg");

	var AvatarExtra = Parse.Object.extend("AvatarHair");
	var hair = new AvatarExtra();
	hair.set("objectId", "Zy44JOjUNM");

	var AvatarExtra = Parse.Object.extend("AvatarHeadBody");
	var headBody = new AvatarExtra();
	headBody.set("objectId", "cGF0QaYTnY");

	var AvatarExtra = Parse.Object.extend("AvatarMouth");
	var mouth = new AvatarExtra();
	mouth.set("objectId", "3VilCRLHpS");

	// If there is no value in the eyes field it means there is no values in the other columns
	if (!request.object.get("eyes")) {
	  	request.object.set("extra",extra);
	  	request.object.set("eyes",eyes);
	  	request.object.set("hair",hair);
	  	request.object.set("head_body",headBody);
	  	request.object.set("mouth",mouth);
	}

	response.success();
});
