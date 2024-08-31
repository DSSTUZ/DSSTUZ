var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "https://uralbekuzbot.netlify.app/uralbekuz.xml", true);
xhttp.send();

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("year");
    document.getElementById("demo").innerHTML =
    x[2].childNodes[0].nodeValue;
}