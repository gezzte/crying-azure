// JavaScript Document

function toggleC(id)
{
	var topp = document.getElementById(id).style.top;
	if (topp == "-52px" ){
		showC(id);
	}
	else {
		hideC(id);
	}
}
function showC (id)
{
	document.getElementById(id).style.top = "0px";	
}

function hideC (id)
{
	document.getElementById(id).style.top = "-52px";	
}