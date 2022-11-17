//PRELOADER FUNCTION____
var preloader = document.getElementById('loading');
function myFunction(){
    preloader.style.display = 'none';
}


//POPUP_____






var date = new Date();
	var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
	var current_time = date.getHours()+":"+date.getMinutes();
	var date_time = current_date+" "+current_time;	
	document.getElementById("p1").innerHTML = current_time;

    const date1 = new Date().toLocaleDateString();
    document.getElementById("myDate").innerHTML = date1;
console.log(date1);