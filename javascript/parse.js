Parse.initialize("hCiKNPSGy9q5iT40j0d9DAiLHpavkJMWxmsC15tS", "TmiPKzW632NWSIkuBB0Yj4HzYR4sJTba04k3iA8F");

/**
* Signup function for new users
*/
function signUp (callback, username, password, email) {
	var user = new Parse.User();
  var avatarTable = Parse.Object.extend("Avatars");
  var avatar = new avatarTable();
	
	// Setting the new user credentials
	user.set("username", username);
	user.set("password", password);
	user.set("email", email);

	user.set("privileges", 1); // 1 Is for normal user 2 is for admin
  user.set("isOnline", true); // Setting the user as online

  avatar.save().then(
    function (avatar) {
      user.set("avatar",avatar);
      user.signUp(null, {
        success: function(user) {
          callback(true);
        },
        error: function(user, error) {
          alert("SignUp error: " + error.code + " " + error.message);
        }
      });
    }
  );
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
function clearAchievements(user) {
  var achievementArray = new Array();
  var usersTable = Parse.Object.extend("_User");
  var query = new Parse.Query(usersTable);
  
  query.include("avatar");
  query.get(Parse.User.current().id).then(
              function (parseUser) {
                parseUser.get("avatar").set("achievements", achievementArray);
                parseUser.get("avatar").save(); // Saving the new updated avatar
              });
}

/**
* Adding the new given achievement to the current user
*/
function addAchievementToUser(achievement, user) {
  var achievementArray = new Array();
  var usersTable = Parse.Object.extend("_User");
  var query = new Parse.Query(usersTable);
  
  query.include("avatar");
  query.get(Parse.User.current().id).then(
              function (parseUser) {
                achievementArray = parseUser.get("avatar").get("achievements"); // Getting the current extras
                achievementArray.push(achievement); // Adding the new achievement
                parseUser.get("avatar").set("achievements", achievementArray);
                parseUser.get("avatar").save(); // Saving the new updated avatar
              });
}

/**
* Adding new badge to the given user
*/
function addBagdeToUser (badge, user) {
  var badgesArray = new Array();
  badgesArray = user.getBadges();
  badgesArray.push(badge);

  user.setBadges(badgesArray);
  Parse.User.current().set("badges", badgesArray, null);
  Parse.User.current().save().then(
            function(badge) {
              console.log('Badge was added');
            },
            function(error) {
              console.log('Badge was not added, with error code: ' + error.description);
            }
  );
}

/**
* Log in function to parse, this will create a parse user over the current session
*/
function logIn (callback, username, password) {
	Parse.User.logIn(username, password, null).then(
  		function(user) {
    	 return user;
  		},
  		function(error) {
    		alert("LogIn error: " + error.code + " " + error.message);
        callback(false);
  		}).then(
          function(user) {
          Parse.User.current().set("isOnline", true, null); // Setting the user as logged in in the DB
          Parse.User.current().save().then(
                    function(arg) {
                      console.log(user.get("username") + " logged in.");
                      callback(true);
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
function getCurrentUser (callback) {
  var usersTable = Parse.Object.extend("_User");
  var query = new Parse.Query(usersTable);

  query.include("avatar"); // Including the avatar pointer

  query.get(Parse.User.current().id).then(
          function(parseUser) {
            callback ( createUserFromParseUser(parseUser) );
          },
          function(error) {
            alert("Error: " + error.code + " " + error.message);
  });
}

/**
* Getting the user avatar, if the function recieve 1 in option then returns the head avatar only
* if option is 2 then returns the path for the full avatar.
* Default is the head avatar
*/
function getUserAvatar (callback, parseAvatar, option) {
    var avatarTable = Parse.Object.extend("Avatars");
    var query = new Parse.Query(avatarTable);
    var avatarID = parseAvatar.id;

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
* This function is to set the user avatar, it needs to get the ID's of the elements.
*/
function setUserAvatar (callback, user, head_body, hair, eyes, extra, mouth) {
    var headBodyObject = Parse.Object.extend("AvatarHeadBody");
    var hairObject = Parse.Object.extend("AvatarHair");
    var eyesObject = Parse.Object.extend("AvatarEyes");
    var extraObject = Parse.Object.extend("AvatarExtra");
    var mouthObject = Parse.Object.extend("AvatarMouth");

    var newAvatar = user.getAvatar();

    newAvatar.set("head_body", new headBodyObject().set("objectId", head_body));
    newAvatar.set("hair", new hairObject().set("objectId", hair));
    newAvatar.set("eyes", new eyesObject().set("objectId", eyes));
    newAvatar.set("extra", new extraObject().set("objectId", extra));
    newAvatar.set("mouth", new mouthObject().set("objectId", mouth));

    newAvatar.save().then(
      function (newAvatar) {
        callback(true);
    });
}

/**
* Create new class with the given arguments
*/
function createNewLesson (name, date, badge, youtube, google) {
  var Lesson = Parse.Object.extend("Lesson");
  var lesson = new Lesson();
  var badgeObject = Parse.Object.extend("Badges");

  lesson.set("name", name);
  lesson.set("due_date", date);
  lesson.set("youtube_link", youtube);
  lesson.set("google_link", google);
  lesson.set("badge", new badgeObject().set("objectId", badge));


  lesson.save().then(
    function(lesson) {
       alert('New lesson created with objectId: ' + lesson.id);
      },
      function(error) {
        console.log(error);
        alert('Failed to create new lesson, with error code: ' + error.code);
      }
  );
}

/**
* Return to the callback function an array of all items with their id and path
* The possible tables are
* AvatarExtra, AvatarEyes, AvatarHair, AvatarHeadBody, AvatarMouth, Badges
*/
function getAllItems (callback, tableName) {
  var table = Parse.Object.extend(tableName);
  var query = new Parse.Query(table);
  var avatarPath = "";

  // Switch case for the tables, Badges table has the full path already
  switch (tableName) {
    case "Badges":
      break;

    default:
      avatarPath = "assets/images/avatarImages/";
      break;
  }

  query.find().then(
        function(results) {
          var items = new Array();

          for (var i = 0; i < results.length; i++) {
            var item = results[i];

            items.push({ "id":item.id, "path": avatarPath + item.get("path") });
          }
          callback(items);
        },
        function(error) {
          alert('Failed to get badges, with error code: ' + error.code);
        }
  );
}

/**
* Calling the callback function with an array of all the online users
*/
function getAllOnlineUsers (callback) {
  var usersTable = Parse.Object.extend("_User");
  var query = new Parse.Query(usersTable);

  query.equalTo("isOnline", true); // Looking for only the online users
  query.include("avatar"); // Including the avatar pointer

  query.find().then(
        function(results) {
          var usersArray = new Array();

          // Going over the results and creating the users array
          for (var i = 0; i < results.length; i++) {
            var user = new User();
            var parseUser = results[i]; // Getting the user from the resuts array
            
            user.setName( parseUser.get("username") );
            user.setEmail( parseUser.get("email") );
            user.setPrivileges( parseUser.get("privileges") );
            user.setGender( parseUser.get("gender") );
            user.setAvatar( parseUser.get("avatar") );
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
* Inner function for creating custom user object from the parse user object
*/
function createUserFromParseUser (parseUser) {
  var user = new User();

  user.setName( parseUser.get("username") );
  user.setEmail( parseUser.get("email") );
  user.setPrivileges( parseUser.get("privileges") );
  user.setGender( parseUser.get("gender") );
  user.setAvatar( parseUser.get("avatar") );
  user.setBadges( parseUser.get("badges") );

  return user;
}

/**
* Inner function for creating custom avatar object from the parse avatar object
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

