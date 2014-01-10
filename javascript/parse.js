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
    		// Do stuff after successful login.
  		},
  		error: function(user, error) {
    		// The login failed. Check error to see why.
  		}
	});
}

function printUser (results) {
  for (var i = 0; i < results.length; i++) {
    var newUser = results[i];
    console.log(newUser.get("username"));
  }
}

function getUser (ID) {
  var parseUser = getUserFromParse(ID);
}

function buildUser (parseUser) {
  console.log(user);
  return user;
}

function getUserFromParse (ID) {
  var parseUser = Parse.Object.extend("User");
  var query = new Parse.Query(parseUser);
  query.equalTo("objectId", ID);
  query.find({
    success: function(results) {
      for (var i = 0; i < results.length; i++) {
        var parseUser = results[i];
         var user = new User(parseUser.get("username"), parseUser.get("email"), parseUser.get("privileges"), parseUser.get("gender")
                      , parseUser.get("avatar"), parseUser.get("prizes"));
        console.log(user);
        return user;
      }
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
}

function userTest(ID) {
  console.log(getUser(ID));
}