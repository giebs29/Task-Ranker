$(document).ready(function(){

  $( "button" ).click(function() {

    var requestor = getValue("requestor") * 1;
    var relevance = getValue("relevance") * 1;
    var impact = getValue("impact") * 1;
    var urgency = getValue("urgency") * 1;
    var type = getValue("type") * 0.5;
    var communication = getValue("communication") * 0.5;
    var standardization = getValue("standardization") * 0.5;

    var score = (requestor+relevance+impact+urgency+type+communication+standardization)

    alert(Math.round((score/55)*100,0));
  });

  function getValue(id) {

    var dropdown = document.getElementById(id);
    var value = dropdown.options[dropdown.selectedIndex].value;
    return value;

  }

  function determineLevel(taskScore) {

    if(taskScore > 50){
      $("body").append("<p>Text.</p>");
    } else if (taskScore >= 40) {
      $("body").append("<p>Text.</p>");
    } else if (taskScore >= 30) {
      $("body").append("<p>Text.</p>");
    }else if (taskScore >= 20) {
      $("body").append("<p>Text.</p>");
    }else {
      $("body").append("<p>Text.</p>");
    }

  }

});
