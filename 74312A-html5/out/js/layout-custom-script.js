/*	Portal welcome text	*/

$(document).ready(function () {
    setWelcomeText();
    $(document).ajaxComplete(function () {
    setWelcomeText();
    });
});

function setWelcomeText(){
    for (var key in welcomeTextDict) {
        var element = $("header.portal-header[data-portal-language=" + key +"] h1");
        element.text(welcomeTextDict[key])
    }
}
var welcomeTextDict = { "en" : "What are you looking for?"};


/*	Feedback text	*/

$(document).ready(function () {
  var lang = $(document.documentElement).attr("lang");
  if (lang in feedbackLinkDict) {
    var text = feedbackLinkDict[lang];
    setLinkText(text);
    $(document).ajaxComplete(function () {
      setLinkText(text);
        });
    }
});

function setLinkText(text) {
  var element = $("div.toggle-feedback a").text(text);
}
/* Change text here */
var feedbackLinkDict = {"en" : "Do you have feedback on this topic? Click here to suggest changes."}; 