

var IMG_PATH = "";
var currentContents;

function test(result)
{
    if (result)
    {
        //alert("Logged in!");
    }
}

function setAvatar()
{
    var hairArray;
    getAllItems(getAllHair, "AvatarHair");
}

function getAllHair(hairArray)
{
    for (var id in hairArray) {
        console.log(IMG_PATH + hairArray[id].path);
        var elem = document.createElement("input");
        elem.setAttribute("type","image");
        elem.setAttribute("src", IMG_PATH + hairArray[id].path);
        document.appendChild(elem);
    }
}
                      
function init_page() 
{
    var elemList;
    currentContents = "hair-selection";
    
    logIn(test,"Etay","1234");
    setAvatar();
//    var myUser = getCurrentUser(setAvatar);
//    var myAvatar = myUser.getAvatar();
//    document.getElementById("eyes").src = myAvatar.getEyes();
    
    document.getElementById("prizes").src = IMG_PATH + "assets/images/buttons/prize-button.png";
    document.getElementById("mouth").src = IMG_PATH + "assets/images/buttons/mouth-button.png";
    document.getElementById("eyes").src = IMG_PATH + "assets/images/buttons/eye-button.png";
    document.getElementById("hair").src = IMG_PATH + "assets/images/buttons/hair-button.png";
    
    document.getElementById("bg-img").src = IMG_PATH + "layout/floor-plant.png";
    
    //if (boy)
    document.getElementById("avatar-body").src = IMG_PATH + "layout/avatar-boy.png";
    //else (-> girl)
    //document.getElementById("avatar-body").src = IMG_PATH + "layout/avatar-girl.png";
    
    elemList = get_avatar_elements('hair', 'default');
    document.getElementById("avatar-hair").src = elemList[0];
    
    elemList = get_avatar_elements('eyes', 'default');
    document.getElementById("avatar-eyes").src = elemList[0];
    
    elemList = get_avatar_elements('mouth', 'default');
    document.getElementById("avatar-mouth").src = elemList[0];
    
    elemList = get_avatar_elements('prizes', 'default');
    document.getElementById("avatar-prizes").src = elemList[0];
    
    
    set_selection_contents('hair','#c2daff','default');
    
}



function set_selection_contents(content_id, bg_color, contents_color)
{    
    var contentElement = document.getElementById('selection-list');   
    while (contentElement.firstChild) contentElement.removeChild(contentElement.firstChild);
    
    var elemList = get_avatar_elements(content_id, contents_color);
    
    for (var i=0; i < elemList.length; i++)
    {
        var elem = document.createElement("input");
        elem.setAttribute("type","image");
        elem.setAttribute("src", elemList[i]);
        elem.style.height = "35%";
        elem.style.width = "35%";
        elem.style.margin = "10px";
        elem.style.borderColor = "white";
        elem.style.borderStyle = "inset";
        elem.style.borderRadius = "25px";

        elem.setAttribute("onClick", "change_image('avatar-" + content_id + "', '" + elemList[i] + "');");
        contentElement.appendChild(elem);
    }
    
    contentElement.style.background = bg_color;
    
    
     var colorsElement = document.getElementById('color-selection');
         while (colorsElement.firstChild) colorsElement.removeChild(colorsElement.firstChild);
    if (content_id == "hair")
    {     
        var elem = document.createElement("input");
        elem.setAttribute("type","button");
        elem.style.cursor = "pointer";
        elem.style.background = "black";
        elem.style.height = "50px";
        elem.style.width = "50px";
        elem.style.marginLeft = "20px";
        elem.setAttribute("onClick", "set_selection_contents('hair','" + bg_color + "', 'default');");
        colorsElement.appendChild(elem);
        
        var elem = document.createElement("input");
        elem.setAttribute("type","button");
        elem.style.cursor = "pointer";
        elem.style.background = "#a5552a";
        elem.style.height = "50px";
        elem.style.width = "50px";
        elem.style.marginLeft = "20px";
        elem.setAttribute("onClick", "set_selection_contents('hair','" + bg_color + "', 'brown');");
        colorsElement.appendChild(elem);
        
        var elem = document.createElement("input");
        elem.setAttribute("type","button");
        elem.style.cursor = "pointer";
        elem.style.background = "yellow";
        elem.style.height = "50px";
        elem.style.width = "50px";
        elem.style.marginLeft = "20px";
        elem.setAttribute("onClick", "set_selection_contents('hair','" + bg_color + "', 'yellow');");
        colorsElement.appendChild(elem);
        
        
    }
}

function get_avatar_elements(content_id, color)
{
    var elemList = new Array();
    elemList[0] = IMG_PATH + content_id + "/" + color + "/1.png";
    elemList[1] = IMG_PATH + content_id + "/" + color + "/2.png";
    elemList[2] = IMG_PATH + content_id + "/" + color + "/3.png";
    elemList[3] = IMG_PATH + content_id + "/" + color + "/4.png";
    return elemList; 
}


function change_image(imgId, images_path) 
{
    var path = new String(images_path);
    path = path.replace("\\","/");
    if (document.getElementById)
    {
        image = document.getElementById(imgId);
        image.setAttribute("src", path);
    }
}

function save_avatar()
{
    document.getElementById("avatar-body").src = IMG_PATH + "layout/avatar-girl.png";
}


