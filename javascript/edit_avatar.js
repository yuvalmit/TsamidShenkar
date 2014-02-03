
var gCurrentColor;

function testSignUp(result)
{
    if (!result) { console.error("Failed to sign up!"); }
    else { console.log("Signed up!"); }
}

function testLogIn(result)
{
    if (!result) { console.error("Failed to log in!"); }
    else { console.log("Logged in!"); }
}

function testAvatarUpdate(result)
{
    if (!result) { console.error("Failed to update avatar!"); }
    else { console.log("Avatar was updated!"); }
}

function init_avatar_page() 
{   
//    logout();
//    signUp(testSignUp,"Elad","1234","my@email.com"); 
//    logIn(testLogIn,"Elad","1234");
    
    getCurrentUser(getCurrentAvatar);
    set_selection_contents('AvatarHair','#c2daff','black');
    
    document.getElementById("avatar-full-extra").src = "assets/images/buttons/prize-button.png";
    document.getElementById("avatar-full-mouth").src = "assets/images/buttons/mouth-button.png";
    document.getElementById("avatar-full-eyes").src = "assets/images/buttons/eye-button.png";
    document.getElementById("avatar-full-hair").src = "assets/images/buttons/hair-button.png";    
    document.getElementById("bg-img").src = "assets/images/buttons/floor-plant.png";    
}

function getCurrentAvatar(result)
{
    var user = result;
    getUserAvatar(getAvatarElements, user.getAvatar(), 2);
}

function getAvatarElements(userAvatar)
{    
    document.getElementById("AvatarBody").src = userAvatar.getHead();
    document.getElementById("AvatarEyes").src = userAvatar.getEyes();
    document.getElementById("AvatarMouth").src = userAvatar.getMouth();
    document.getElementById("AvatarHair").src = userAvatar.getHair();
    if (userAvatar.getExtra()) { document.getElementById("AvatarExtra").src = userAvatar.getExtra(); }
}

function setCurrentAvatar(user)
{
    var bodyId, eyesId, mouthId, hairId, extraId;
    bodyId = document.getElementById("AvatarBody").getAttribute("alt");
    eyesId = document.getElementById("AvatarEyes").getAttribute("alt");
    mouthId = document.getElementById("AvatarMouth").getAttribute("alt");
    hairId = document.getElementById("AvatarHair").getAttribute("alt");
    extraId = document.getElementById("AvatarExtra").getAttribute("alt");
    setUserAvatar(testAvatarUpdate, user, bodyId, hairId, eyesId, extraId, mouthId);
}


function set_selection_contents(content_id, bg_color, contents_color)
{
    var colorsStrArr = ["black","brown","red"];
    var colorsValArr = ["black","#834625","orange"];
    var contentElement = document.getElementById('selection-list');   
    while (contentElement.firstChild) contentElement.removeChild(contentElement.firstChild);
    
    gCurrentColor = contents_color;
    getAllItems(view_elements_selection, content_id, 2);
    
    contentElement.style.background = bg_color;
    
    var colorsElement = document.getElementById('color-selection');
    while (colorsElement.firstChild) colorsElement.removeChild(colorsElement.firstChild);
    if (content_id == "AvatarHair")
    {     
        for (var i = 0; i < 3; i++)
        {
            var elem = document.createElement("input");
            elem.setAttribute("type","button");
            elem.style.cursor = "pointer";
            elem.style.background = colorsValArr[i];
            elem.style.height = "50px";
            elem.style.width = "50px";
            elem.style.marginLeft = "20px";
            elem.setAttribute("onClick", "set_selection_contents('AvatarHair','" + bg_color + "', '"+ colorsStrArr[i] +"');");
            colorsElement.appendChild(elem);
        }      
    }
}

function view_elements_selection(elemList)
{
    var id, path, elemId;
    for (var i in elemList) 
    {
        path = elemList[i].path;
        id = elemList[i].id;
        var elem = document.createElement("input");
        elem.setAttribute("type","image");
        elem.setAttribute("src", path);
        elem.style.height = "35%";
        elem.style.width = "35%";
        elem.style.margin = "10px";
        elem.style.borderColor = "white";
        elem.style.borderStyle = "inset";
        elem.style.borderRadius = "25px";
        
        if (path.indexOf("hair") != -1)
        {
            elemId = "AvatarHair";
            if (path.indexOf(gCurrentColor) != -1)
            {
                elem.setAttribute("onClick", "change_image('"+ elemId +"', '" + path + "', '"+ id +"');");
                document.getElementById('selection-list').appendChild(elem);
            }
        }
        else
        {
            if (path.indexOf("eye") != -1)          { elemId = "AvatarEyes";   }
            else if (path.indexOf("mouth") != -1)   { elemId = "AvatarMouth";  }
            else if (path.indexOf("extra") != -1)   { elemId = "AvatarExtra";  }
            
            elem.setAttribute("onClick", "change_image('"+ elemId +"', '" + path + "', '"+ id +"');");
            document.getElementById('selection-list').appendChild(elem);
        }
    }
}


function change_image(imgId, images_path, elemId)
{
    var path = new String(images_path);
    path = path.replace("\\","/");
    if (document.getElementById)
    {
        image = document.getElementById(imgId);
        image.setAttribute("alt", elemId);
        image.setAttribute("src", path);
    }
}

function save_avatar()
{
    getCurrentUser(setCurrentAvatar);
    window.location = "myZone.html";
}

