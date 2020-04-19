function errchecking(evt) {
    var gradeinput =parseFloat(evt.currentTarget.value);

    if (gradeinput > 100 || gradeinput < 0) {
      evt.currentTarget.style = "background-color:red;";
    } else {
      evt.currentTarget.style = "";
  
    }
}

function calculateGrade() {
    document.getElementById("uparticipationPercent").style = "";
    document.getElementById("uhwPercent").style = "";
    document.getElementById("uquizPercent").style = "";
    document.getElementById("upm1Percent").style = "";
    document.getElementById("upm2Percent").style = "";
    document.getElementById("overallgrade").innerHTML = "NaN %";
    document.getElementById("overallgrade").style = "display:none;";
    var overallgrade = document.getElementById("overallgrade").innerHTML;

    var participationPercent = parseInt(document.getElementById("participationPercent").innerHTML);
    var hwPercent = parseInt(document.getElementById("hwPercent").innerHTML);
    var quizPercent = parseInt(document.getElementById("quizPercent").innerHTML);
    var pm1Percent = parseInt(document.getElementById("pm1Percent").innerHTML);
    var pm2Percent = parseInt(document.getElementById("pm2Percent").innerHTML);

    var uparticipationPercent = parseFloat(document.getElementById("uparticipationPercent").value);
    var uhwPercent = parseFloat(document.getElementById("uhwPercent").value);
    var uquizPercent = parseFloat(document.getElementById("uquizPercent").value);
    var upm1Percent = parseFloat(document.getElementById("upm1Percent").value);
    var upm2Percent = parseFloat(document.getElementById("upm2Percent").value);

    var isError = false;
    if (uparticipationPercent < 0 || uparticipationPercent > 100 ) {
        document.getElementById("uparticipationPercent").style = "background-color:red;";
        isError = true;
    } 
    if (uhwPercent < 0 || uhwPercent > 100 ) {
        document.getElementById("uhwPercent").style = "background-color:red;";
        isError = true;
    } 
    if (uquizPercent < 0 || uquizPercent > 100 ) {
        document.getElementById("uquizPercent").style = "background-color:red;";
        isError = true;
    } 
    if (upm1Percent < 0 || upm1Percent > 100 ) {
        document.getElementById("upm1Percent").style = "background-color:red;";
        isError = true;
    } 
    if (upm2Percent < 0 || upm2Percent > 100 ) {
        document.getElementById("upm2Percent").style = "background-color:red;";
        isError = true;
    }
    if (!isError){
        finalgrade = uparticipationPercent/100 * participationPercent + 
        uhwPercent/100 * hwPercent + uquizPercent/100 * quizPercent + 
        upm1Percent/100 * pm1Percent + upm2Percent/100 * pm2Percent;
        document.getElementById("overallgrade").innerHTML = (finalgrade + " %");
        document.getElementById("overallgrade").style = "display:inline;";
    }
  }
