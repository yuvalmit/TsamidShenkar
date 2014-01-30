
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

Parse.Cloud.beforeSave("Avatars", function(request, response) {
  if (!request.object.get("extra") {
    request.object.set("extra", "0zxeOkbThj");
  }

  response.success();
});