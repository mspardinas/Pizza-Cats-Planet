function nameinput() {
	var name = document.getElementById("name_input");
	var receiptname = document.getElementById("name_inputted");
	receiptname.value = name.value;
}
window.onload = function () {
	var num = document.getElementById("number_input");
	num.addEventListener("keypress", function(event) {
		if (event.keyCode == 13) {
	    	var number = document.getElementById("number_input");
			var receiptnumber = document.getElementById("number_inputted");
			if (((number.value).toString()).startsWith("09", 0) && (number.value).length==11) {
				receiptnumber.value = number.value;
			}
			else {
				alert("Mobile number should start with 09 and have a length of eleven!");
			}
	    }
	})
	var dates = document.getElementById("orderdate");
	dates.addEventListener("keypress", function(event) {
		if (event.keyCode == 13) {
	    	var orderdate = document.getElementById("orderdate");
			var receiptdate = document.getElementById("receiptdate");
			var d = new Date();
			var datenow =  d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
			if (orderdate.value == datenow || orderdate.value > datenow) {
				receiptdate.value = orderdate.value;
			}
			else {
				alert("Invalid date!");
			}
	    }
	})
}
function checktime() {
	var timenow = document.getElementById("ordertime").value;
	var receipttime = document.getElementById("receipttime");
	if (timenow > "06:00:00" || timenow < "00:00:00") {
		receipttime.value = timenow;
	}
	else {
		alert("Invalid delivery time!")
	}
}
function emailinput() {
	var email = document.getElementById("email_input");
	var receiptemail = document.getElementById("email_inputted");
	receiptemail.value = email.value;
}
function addressinput() {
	var address = document.getElementById("address_input");
	var receiptaddress = document.getElementById("address_inputted");
	receiptaddress.value = address.value
}
function pizzabasefunc() {
	var base = document.getElementById("pizzabase").value;
	document.getElementById("basepizza").innerHTML = "Pizza base chosen: " + base;
}
function sizeoption(size) {
    document.getElementById("finalsize").value = size;
}
function addtoppings() {
	var top = document.getElementsByName('toppings');
	var finaltop = '';
	for (i=0; i<10; i++) {
		if (top[i].checked === true ) {
			finaltop += top[i].value + ", ";
		}
	}
	document.getElementById("toppings").innerHTML = "Toppings: " + finaltop;
}
function addpizza1() {
    var x = document.getElementById("classiccheese").value;
    if (document.getElementById("classiccheese").checked == true) {
    	document.getElementById("pizza1").innerHTML += "✓ " + x;
    }
    else {
    	document.getElementById("pizza1").innerHTML = "";
    }
}
function addpizza2() {
	 var x = document.getElementById("fourcheese").value;
    if (document.getElementById("fourcheese").checked == true) {
    	document.getElementById("pizza2").innerHTML += "✓ " + x;
    }
    else {
    	document.getElementById("pizza2").innerHTML = "";
    }
}
function addpizza3() {
    var x = document.getElementById("pestocheese").value;
    if (document.getElementById("pestocheese").checked == true) {
    	document.getElementById("pizza3").innerHTML += "✓ " + x;
    }
    else {
    	document.getElementById("pizza3").innerHTML = "";
    }
}
function addpizza4() {
	 var x = document.getElementById("pepperoni").value;
    if (document.getElementById("pepperoni").checked == true) {
    	document.getElementById("pizza4").innerHTML += "✓ " + x;
    }
    else {
    	document.getElementById("pizza4").innerHTML = "";
    }
}
function addpizza5() {
    var x = document.getElementById("sausage").value;
    if (document.getElementById("sausage").checked == true) {
    	document.getElementById("pizza5").innerHTML += "✓ " + x;
    }
    else {
    	document.getElementById("pizza5").innerHTML = "";
    }
}
function addpizza6() {
	 var x = document.getElementById("beef").value;
    if (document.getElementById("beef").checked == true) {
    	document.getElementById("pizza6").innerHTML += "✓ " + x;
    }
    else {
    	document.getElementById("pizza6").innerHTML = "";
    }
}
function addpizza7() {
    var x = document.getElementById("veggie").value;
    if (document.getElementById("veggie").checked == true) {
    	document.getElementById("pizza7").innerHTML += "✓ " + x;
    }
    else {
    	document.getElementById("pizza7").innerHTML = "";
    }
}
function addpizza8() {
	 var x = document.getElementById("king").value;
    if (document.getElementById("king").checked == true) {
    	document.getElementById("pizza8").innerHTML += "✓ " + x;
    }
    else {
    	document.getElementById("pizza8").innerHTML = "";
    }
}
function addpizza9() {
    var x = document.getElementById("hawaiian").value;
    if (document.getElementById("hawaiian").checked == true) {
    	document.getElementById("pizza9").innerHTML += "✓ " + x;
    }
    else {
    	document.getElementById("pizza9").innerHTML = "";
    }
}
function addwings1() {
    var x = document.getElementById("classicbuffalo").value;
    if (document.getElementById("classicbuffalo").checked == true) {
    	document.getElementById("wings1").innerHTML += "✓ " + x;
    }
    else {
    	document.getElementById("wings1").innerHTML = "";
    }
}
function addwings2() {
    var x = document.getElementById("flaminbuffalo").value;
    if (document.getElementById("flaminbuffalo").checked == true) {
    	document.getElementById("wings2").innerHTML += "✓ " + x;
    }
    else {
    	document.getElementById("wings2").innerHTML = "";
    }
}
function addwings3() {
    var x = document.getElementById("nuclearbuffalo").value;
    if (document.getElementById("nuclearbuffalo").checked == true) {
    	document.getElementById("wings3").innerHTML += "✓ " + x;
    }
    else {
    	document.getElementById("wings3").innerHTML = "";
    }
}
function addsalad1() {
    var x = document.getElementById("romaine").value;
    if (document.getElementById("romaine").checked == true) {
    	document.getElementById("salad1").innerHTML += "✓ " + x;
    }
    else {
    	document.getElementById("salad1").innerHTML = "";
    }
}
function addsalad2() {
    var x = document.getElementById("pasta").value;
    if (document.getElementById("pasta").checked == true) {
    	document.getElementById("salad2").innerHTML += "✓ " + x;
    }
    else {
    	document.getElementById("salad2").innerHTML = "";
    }
}
function addsalad3() {
    var x = document.getElementById("caesar").value;
    if (document.getElementById("caesar").checked == true) {
    	document.getElementById("salad3").innerHTML += "✓ " + x;
    }
    else {
    	document.getElementById("salad3").innerHTML = "";
    }
}
function addside1() {
    var x = document.getElementById("garlic").value;
    if (document.getElementById("garlic").checked == true) {
    	document.getElementById("side1").innerHTML += "✓ " + x;
    }
    else {
    	document.getElementById("side1").innerHTML = "";
    }
}
function addside2() {
    var x = document.getElementById("sopas").value;
    if (document.getElementById("sopas").checked == true) {
    	document.getElementById("side2").innerHTML += "✓ " + x;
    }
    else {
    	document.getElementById("side2").innerHTML = "";
    }
}
function addside3() {
    var x = document.getElementById("macaroni").value;
    if (document.getElementById("macaroni").checked == true) {
    	document.getElementById("side3").innerHTML += "✓ " + x;
    }
    else {
    	document.getElementById("side3").innerHTML = "";
    }
}
function addsweet1() {
    var x = document.getElementById("cinnamon").value;
    if (document.getElementById("cinnamon").checked == true) {
    	document.getElementById("sweet1").innerHTML += "✓ " + x;
    }
    else {
    	document.getElementById("sweet1").innerHTML = "";
    }
}
function addsweet2() {
    var x = document.getElementById("apple").value;
    if (document.getElementById("apple").checked == true) {
    	document.getElementById("sweet2").innerHTML += "✓ " + x;
    }
    else {
    	document.getElementById("sweet2").innerHTML = "";
    }
}
function addsweet3() {
    var x = document.getElementById("fudge").value;
    if (document.getElementById("fudge").checked == true) {
    	document.getElementById("sweet3").innerHTML += "✓ " + x;
    }
    else {
    	document.getElementById("sweet3").innerHTML = "";
    }
}