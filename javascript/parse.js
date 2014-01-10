Parse.initialize("hCiKNPSGy9q5iT40j0d9DAiLHpavkJMWxmsC15tS", "TmiPKzW632NWSIkuBB0Yj4HzYR4sJTba04k3iA8F");

function signUp (username, password, email) {
	var user = new Parse.User();
	
	// Setting the new user credentials
	user.set("username", username);
	user.set("password", password);
	user.set("email", email);

	user.set("privileges", 2); // 1 Is for instructor 2 is for normal user

	user.signUp(null, {
  		success: function(user) {
    		alert("Welcome " + username + " :)");
  		},
  		error: function(user, error) {
    		alert("SignUp error: " + error.code + " " + error.message);
  		}
	});
}

function logIn (username, password) {
	Parse.User.logIn(username, password, {
  		success: function(user) {
    	 console.log(user.get("username") + " logged in.");
  		},
  		error: function(user, error) {
    		alert("LogIn error: " + error.code + " " + error.message);
  		}
	});
}

function getCurrentUser () {
  var parseUser = Parse.User.current();
  // Building the user object
  var user = new User(parseUser.get("username"), parseUser.get("email"),
                      parseUser.get("privileges"), parseUser.get("gender"),
                      parseUser.get("avatar"), parseUser.get("prizes"));
  
  return user;
}

function getUserAvatar (callback) {
    var avatarTable = Parse.Object.extend("Avatars");
    var query = new Parse.Query(avatarTable);
    var avatarID = Parse.User.current().get("avatar").id;

    query.include("head"); // Including the head pointer
    query.include("hair"); // Including the hair pointer
    query.include("eyes"); // Including the eyes pointer
    query.include("body"); // Including the body pointer
    query.include("mouth"); // Including the mouth pointer
    query.get(avatarID).then(
              function(parseAvatar) {
                // Building the avatar object
                userAvatar = new Avatar(parseAvatar.get("head").get("path"), parseAvatar.get("eyes").get("path"),
                                            parseAvatar.get("hair").get("path"), parseAvatar.get("mouth").get("path"),
                                            parseAvatar.get("body").get("path"));
                callback(userAvatar);
              },
              function(error) {
                userAvatar.resolve;
                alert("Error: " + error.code + " " + error.message);
              }
  );
}

function getUserFromParse (ID) {
  var parseUser = Parse.Object.extend("User");
  var query = new Parse.Query(parseUser);
  query.get(ID, {
    success: function(parseUser) {
        var user = new User(parseUser.get("username"), parseUser.get("email"),
                            parseUser.get("privileges"), parseUser.get("gender"),
                            parseUser.get("avatar"), parseUser.get("prizes"));
        return user;
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
}

function userTest(ID) {
  console.log(getUser(ID));
}