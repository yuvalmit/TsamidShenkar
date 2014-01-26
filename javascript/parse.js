Parse.initialize("hCiKNPSGy9q5iT40j0d9DAiLHpavkJMWxmsC15tS", "TmiPKzW632NWSIkuBB0Yj4HzYR4sJTba04k3iA8F");

/**
* Signup function for new users
*/
function signUp (username, password, email) {
	var user = new Parse.User();
	
	// Setting the new user credentials
	user.set("username", username);
	user.set("password", password);
	user.set("email", email);

	user.set("privileges", 2); // 1 Is for instructor 2 is for normal user
  user.set("isOnline", true); // Setting the user as online

	user.signUp(null, {
  		success: function(user) {
    		alert("Welcome " + username + " :)");
  		},
  		error: function(user, error) {
    		alert("SignUp error: " + error.code + " " + error.message);
  		}
	});
}

/**
* Logs out the current user
*/
function logout () {
  Parse.User.current().set("isOnline", false, null); // Setting the user as logged off in the DB
  Parse.User.current().save().then(
            function(arg) {
              console.log('User logged off.');
            },
            function(error) {
              console.log('Could not log off, with error code: ' + error.description);
            }
  );

  Parse.User.logOut(); // Logging out the current user from the session
}

/**
* Clearing the current user achievements array
*/
function clearAchievements() {
  var user = getCurrentUser();

  var achievementArray = new Array();
  user.setAchievements(achievementArray);
  Parse.User.current().set("achievements", achievementArray, null);
  Parse.User.current().save().then(
            function(achievement) {
              console.log('Achievements was cleared');
            },
            function(error) {
              console.log('Achievements was not added, with error code: ' + error.description);
            }
  );
}

/**
* Adding the new given achievement to the current user
*/
function addAchievements(achievement) {
  var user = getCurrentUser();

  var achievementArray = new Array();
  achievementArray = user.getAchievements();
  achievementArray.push(achievement);

  user.setAchievements(achievementArray);
  Parse.User.current().set("achievements", achievementArray, null);
  Parse.User.current().save().then(
            function(achievement) {
              console.log('Achievement was added');
            },
            function(error) {
              console.log('Achievement was not added, with error code: ' + error.description);
            }
  );
}

/**
* Log in function to parse, this will create a parse user over the current session
*/
function logIn (username, password) {
	Parse.User.logIn(username, password, null).then(
  		function(user) {
    	 return user;
  		},
  		function(error) {
    		alert("LogIn error: " + error.code + " " + error.message);
  		}).then(
          function(user) {
          Parse.User.current().set("isOnline", true, null); // Setting the user as logged in in the DB
          Parse.User.current().save().then(
                    function(arg) {
                      console.log(user.get("username") + " logged in.");
                    }
          );
  });
}

/**
* Returning toadys lesson (Activity)
*/
function getTodayLesson (callback) {
  var startDate = new Date();
  startDate.setSeconds(0);
  startDate.setMinutes(0);
  startDate.setHours(0);

  var endDate = new Date();
  endDate.setSeconds(59);
  endDate.setMinutes(59);
  endDate.setHours(23);

  var lessonTable = Parse.Object.extend("Lesson");
  var query = new Parse.Query(lessonTable);
  query.greaterThanOrEqualTo("due_date", startDate);
  query.lessThanOrEqualTo("due_date", endDate);
  query.include("badge"); // Including the badge pointer

  query.first().then(
        function(parseLesson) {
          var newLesson = new Lesson();
          if(parseLesson) // If there are any lessons today
          {
            newLesson.setName (parseLesson.get("name"));
            newLesson.setDate (parseLesson.get("due_date"));
            newLesson.setBadge (parseLesson.get("badge").id, parseLesson.get("badge").get("path"));
            newLesson.setGoogleLink (parseLesson.get("google_link"));
            newLesson.setYoutubeLink (parseLesson.get("youtube_link"));

            callback(newLesson);
          }
          else // Else call the callback with null
            callback(null);
        },
        function(error) {
          console.log("Error: " + error.code + " " + error.message);
        }
  );
}

/**
* Returning the current log in user
*/
function getCurrentUser () {
  var user = new User(); // Building the user object
  
  return user;
}

/**
* Getting the current user avatar, if the function recieve 1 in option then returns the head avatar only
* if option is 2 then returns the path for the full avatar.
* Default is the head avatar
*/
function getCurrentUserAvatar (callback, option) {
    var avatarTable = Parse.Object.extend("Avatars");
    var query = new Parse.Query(avatarTable);
    var avatarID = Parse.User.current().get("avatar").id;

    query.include("head_body"); // Including the head pointer
    query.include("hair"); // Including the hair pointer
    query.include("eyes"); // Including the eyes pointer
    query.include("extra"); // Including the body pointer
    query.include("mouth"); // Including the mouth pointer
    
    query.get(avatarID).then(
            function(parseAvatar) {

              callback(createAvatarFromParseObject(parseAvatar, option));
            },
            function(error) {
              alert("Error: " + error.code + " " + error.message);
            }
    );
}

/**
* Create new class with the given arguments
*/
function createNewLesson (name, date, badge, youtube, google) {
  var Lesson = Parse.Object.extend("Lesson");
  var lesson = new Lesson();

  var badgeTable = Parse.Object.extend("Badges"); // Query for getting the badge from parse
  var query = new Parse.Query(badgeTable);
  query.equalTo("objectId", badge);

  lesson.set("name", name);
  lesson.set("due_date", date);
  lesson.set("youtube_link", youtube);
  lesson.set("google_link", google);

  query.get().then( // First getting the badge will be associated with the lesson
        function (parseBadge) {
          lesson.set("badge", parseBadge);
        },
        function (error) {
          console.log(error);
          console.log("Error in getting the badge" + error.code);
        }
  ).then(function () { // Second Saving the new lesson into parse
      lesson.save().then(
        function(lesson) {
          alert('New lesson created with objectId: ' + lesson.id);
        },
        function(error) {
          console.log(error);
          alert('Failed to create new lesson, with error code: ' + error.code);
        }
    );
  });
}

/**
* Return to the callback function an array of all badges with there ID, with that you can call
*/
function getAllBadges (callback) {
  var badgesTable = Parse.Object.extend("Badges");
  var query = new Parse.Query(badgesTable);
  query.find().then(
        function(results) {
          var badges = new Badges();

          for (var i = 0; i < results.length; i++) {
            var badge = results[i];

            badges.addBadge(badge.id, badge.get("path"));
          }
          callback(badges);

        },
        function(error) {
          alert('Failed to get badges, with error code: ' + error.code);
        }
  );
}

/**
* Calling the callback function with an array of all the online users
*/
function getAllOnlineUsers (callback, option) {
  var usersTable = Parse.Object.extend("_User");
  var query = new Parse.Query(usersTable);

  query.equalTo("isOnline", true); // Looking for only the online users
  query.include("avatar"); // Including the mouth pointer

  query.find().then(
        function(results) {
          var user = new User();
          var usersArray = new Array();

          // Going over the results and creating the users array
          for (var i = 0; i < results.length; i++) {
            var parseUser = results[i]; // Getting the user from the resuts array
            
            user.setName( parseUser.get("username") );
            user.setEmail( parseUser.get("email") );
            user.setPrivileges( parseUser.get("privileges") );
            user.setGender( parseUser.get("gender") );
            user.setAvatar( createAvatarFromParseObject( parseUser.get("avatar"), option) );
            user.setAchievements( parseUser.get("achievements") );
            user.setBadges( parseUser.get("badges") );

            usersArray.push(user);
          }

          callback(usersArray);
        },
        function(error) {
          alert('Failed to get users, with error code: ' + error.code);
        }
  );
}

/**
* Inner function for creating out custom avatar object from the parse avatar object
*/
function createAvatarFromParseObject (parseAvatar, option) {
  userAvatar = new Avatar();

  switch (option) {
    case 1:
      var avatarPath = "assets/images/avatarImages/";
      break;

    case 2:
      var avatarPath = "assets/images/fullAvatarImages/";
      break;

    default:
      var avatarPath = "assets/images/avatarImages/";
      break;
  }

  userAvatar.setHead (avatarPath + parseAvatar.get("head_body").get("path"));
  userAvatar.setEyes (avatarPath + parseAvatar.get("eyes").get("path"));
  userAvatar.setHair (avatarPath + parseAvatar.get("hair").get("path"));
  userAvatar.setMouth (avatarPath + parseAvatar.get("mouth").get("path"));
  userAvatar.setExtra (avatarPath + parseAvatar.get("extra").get("path"));

  return userAvatar;
}

