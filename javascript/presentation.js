$(document).ready(function(){
	presentationInit();
});

function presentationInit()
{
	getAllOnlineUsers(setAvatars);
	getTodayLesson(getPresentationEmbedCode);
}

function getPresentationEmbedCode(lesson)
{
  pres = lesson.getGoogleLink();
  console.log(pres);
  var presSection = $("#g-dive");
  presSection.append(pres);
}
