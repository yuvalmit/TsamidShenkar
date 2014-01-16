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
              console.log('Achievement was cleared');
            },
            error: function(achievement, error) {
              console.log('Achievement was not added, with error code: ' + error.description);
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
  achievementArray[achievementArray.length] = achievement;

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

function getTodayLesson () {
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
        function(lesson) {
          console.log(lesson);
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

  console.log('getCurrentUser called');
  var parseUser = Parse.User.current();

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
              userAvatar.setHead(avatarPath + parseAvatar.get("head_body").get("path"));
              userAvatar.setEyes(avatarPath + parseAvatar.get("eyes").get("path"));
              userAvatar.setHair(avatarPath + parseAvatar.get("hair").get("path"));
              userAvatar.setMouth(avatarPath + parseAvatar.get("mouth").get("path"));
              userAvatar.setExtra(avatarPath + parseAvatar.get("extra").get("path"));

              callback(userAvatar);
            },
            function(error) {
              alert("Error: " + error.code + " " + error.message);
            }
    );
}

function lessonTest () {
    var Lesson = Parse.Object.extend("Lesson");
    var query = new Parse.Query(Lesson);

      query.get("8HzXg1qTBP").then(
            function(lesson) {
              console.log(lesson.get("due_date"));
            },
            function(error) {
              alert("Error: " + error.code + " " + error.message);
            }
    );
}

function createNewLesson (name, date, youtube, google) {
  var Lesson = Parse.Object.extend("Lesson");
  var lesson = new Lesson();

  lesson.set("name", name);
  lesson.set("due_date", date);
  lesson.set("youtube_link", youtube);
  lesson.set("google_link", google);

  lesson.save().then(
        function(lesson) {
          alert('New lesson created with objectId: ' + lesson.id);
        },
        function(error) {
          alert('Failed to create new lesson, with error code: ' + error.code);
        }
  );
}

function getUserFromParse (ID) {
  var parseUser = Parse.Object.extend("User");
  var query = new Parse.Query(parseUser);
  query.get(ID, {
    success: function(parseUser) {
          var user = new User();
          user.setName(parseUser.get("username"));
          user.setEmail(parseUser.get("email"));
          user.setPrivileges(parseUser.get("privileges"));
          user.setGender(parseUser.get("gender"));
          user.setAvatar(parseUser.get("avatar"));
          user.setAchievements(parseUser.get("achievements"));
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