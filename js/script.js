var convert = document.getElementById("convert");
convert.addEventListener("click", function (e) {
    e.preventDefault();

    var gradeValue = document.getElementById("grade").innerText;

    var markValue = document.getElementById("mark").value;
    var markNumber = parseFloat(markValue);

    var total = markNumber


    if (total > 100) {
        document.getElementById("grade").innerText = "Not A Valid Mark."
    } else if (total >= 80 || total == 100) {
        document.getElementById("grade").innerText = "Congratulations, You Got A+"
    } else if (total >= 70) {
        document.getElementById("grade").innerText = "WOW, You Got A"
    } else if (total >= 60) {
        document.getElementById("grade").innerText = "Super, You Got A-"
    } else if (total >= 50) {
        document.getElementById("grade").innerText = "Hay, You Got B+"
    } else if (total >= 33) {
        document.getElementById("grade").innerText = "Finally, You passed."
    } else {
        document.getElementById("grade").innerText = "Hell, You Failed."
    }

    document.getElementById("mark").value = "";


});

var refresh = document.getElementById("refresh");
refresh.addEventListener("click", function (e) {
    e.preventDefault();

    document.getElementById("grade").innerText = "";

});