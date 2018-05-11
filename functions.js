
var evilword = "cyber";
var mytext = document.body.textContent;

var textarray = mytext.toLowerCase().split(/\s+/);
var counter = 0;
for ( var i = 0; i < textarray.length; i++){
	if (textarray[i].includes(evilword))
		counter += 1;
	
}

if (counter != 0)
	alert("Alert! " + counter + " CYBERS detected!!");

