

var currentContents;
var currentColor;

function test(result)
{
    if (result)
    {
        //alert("Logged in!");
    }
}

function init_page() 
{
    var elemList;
    currentContents = "hair-selection";
    
    logIn(test,"Etay","1234");
    set_selection_contents('hair','#c2daff','default');
    
    document.getElementById("prizes").src = "assets/images/buttons/prize-button.png";
    document.getElementById("mouth").src = "assets/images/buttons/mouth-button.png";
    document.getElementById("eyes").src = "assets/images/buttons/eye-button.png";
    document.getElementById("hair").src = "assets/images/buttons/hair-button.png";
    
    document.getElementById("bg-img").src = "assets/images/buttons/floor-plant.png";
    
    //if (boy)
    document.getElementById("AvatarBody").src = "assets/images/fullAvatarImages/black.png";
    //else (-> girl)
    //document.getElementById("avatar-body").src = "layout/avatar-girl.png";
    
//    elemList = get_avatar_elements('hair', 'default');
   // document.getElementById("avatar-hair").src = elemList[0].path;
//    
//    elemList = get_avatar_elements('eyes', 'default');
//    document.getElementById("avatar-eyes").src = elemList[0].path;
//    
//    elemList = get_avatar_elements('mouth', 'default');
//    document.getElementById("avatar-mouth").src = elemList[0].path;
//    
//    elemList = get_avatar_elements('prizes', 'default');
//    document.getElementById("avatar-prizes").src = elemList[0].path;
    
    
    set_selection_contents('AvatarHair','#c2daff','default');
    
}


function set_selection_contents(content_id, bg_color, contents_color)
{
    
    var contentElement = document.getElementById('selection-list');   
    while (contentElement.firstChild) contentElement.removeChild(contentElement.firstChild);
    
    getAllItems(view_hair_selection, content_id);
    
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
        elem.setAttribute("onClick", "set_selection_contents('AvatarHair','" + bg_color + "', 'default');");
        colorsElement.appendChild(elem);
        
        var elem = document.createElement("input");
        elem.setAttribute("type","button");
        elem.style.cursor = "pointer";
        elem.style.background = "#a5552a";
        elem.style.height = "50px";
        elem.style.width = "50px";
        elem.style.marginLeft = "20px";
        elem.setAttribute("onClick", "set_selection_contents('AvatarHair','" + bg_color + "', 'brown');");
        colorsElement.appendChild(elem);
        
        var elem = document.createElement("input");
        elem.setAttribute("type","button");
        elem.style.cursor = "pointer";
        elem.style.background = "yellow";
        elem.style.height = "50px";
        elem.style.width = "50px";
        elem.style.marginLeft = "20px";
        elem.setAttribute("onClick", "set_selection_contents('AvatarHair','" + bg_color + "', 'yellow');");
        colorsElement.appendChild(elem);        
    }
}

function view_hair_selection(elemList)
{
    for (var id in elemList) {
        console.log(elemList[id].path);  
        var elem = document.createElement("input");
        elem.setAttribute("type","image");
        elem.setAttribute("src", elemList[id].path);
        elem.style.height = "35%";
        elem.style.width = "35%";
        elem.style.margin = "10px";
        elem.style.borderColor = "white";
        elem.style.borderStyle = "inset";
        elem.style.borderRadius = "25px";

        elem.setAttribute("onClick", "change_image('AvatarHair', '" + elemList[id].path + "');");
        document.getElementById('selection-list').appendChild(elem);
    }
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
    document.getElementById("AvatarBody").src = "assets/images/fullAvatarImages/white.png";
}


