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
  Parse.User.logOut();
}

/**
* Clearing the current user achievements array
*/
function clearAchievements() {
  var user = getCurrentUser();

  var achievementArray = new Array();
  user.setAchievements(achievementArray);
  Parse.User.current().set("achievements", achievementArray, null);
  Parse.User.current().save(null, {
            success: function(achievement) {
              console.log('Achievements was cleared');
            },
            error: function(achievement, error) {
              console.log('Achievements was not added, with error code: ' + error.description);
            }
  });
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
  Parse.User.current().save(null, {
            success: function(achievement) {
              console.log('Achievement was added');
            },
            error: function(achievement, error) {
              console.log('Achievement was not added, with error code: ' + error.description);
            }
  });
}

/**
* Log in function to parse, this will create a parse user over the current session
*/
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

  query.first().then(
        function(parseLesson) {
          newLesson = new Lesson();
          newLesson.setName (parseLesson.get("name"));
          newLesson.setDate (parseLesson.get("due_date"));
          newLesson.setBadge (parseLesson.get("badge").id, parseLesson.get("badge").get("path"));
          newLesson.setGoogleLink (parseLesson.get("google_link"));
          newLesson.setYoutubeLink (parseLesson.get("youtube_link"));

          callback(newLesson);
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
  // Building the user object
  var user = new User();
  
  return user;
}

/**
* Getting the current user avatar, if the function recieve 1 in option then returns the head avatar only
* if option is 2 then returns the path for the full avatar.
* Default is the head avatar
*/
function getUserAvatar (callback, option) {
    var avatarTable = Parse.Object.extend("Avatars");
    var query = new Parse.Query(avatarTable);
    var avatarID = Parse.User.current().get("avatar").id;

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

    query.include("head_body"); // Including the head pointer
    query.include("hair"); // Including the hair pointer
    query.include("eyes"); // Including the eyes pointer
    query.include("extra"); // Including the body pointer
    query.include("mouth"); // Including the mouth pointer
    
    query.get(avatarID).then(
            function(parseAvatar) {
              userAvatar = new Avatar();
              userAvatar.setHead (avatarPath + parseAvatar.get("head_body").get("path"));
              userAvatar.setEyes (avatarPath + parseAvatar.get("eyes").get("path"));
              userAvatar.setHair (avatarPath + parseAvatar.get("hair").get("path"));
              userAvatar.setMouth (avatarPath + parseAvatar.get("mouth").get("path"));
              userAvatar.setExtra (avatarPath + parseAvatar.get("extra").get("path"));

              callback(userAvatar);
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
function getAllBages (callback) {
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