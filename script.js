function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo9").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://uralbekuzbot.netlify.app/ajax.txt", true);
  xhttp.send();
}