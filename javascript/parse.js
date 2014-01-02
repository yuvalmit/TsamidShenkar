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