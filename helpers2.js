advice_url="http://sf-pyw.mosyag.in/m04/api/forecasts"
$("#main_hed").click(function () {
	$.getJSON(advice_url, function(data) {
		advice1=data["prophecies"][0]
		set_msg1(advice1);
		advice2=data["prophecies"][1]
		set_msg2(advice2);
		advice3=data["prophecies"][2]
		set_msg3(advice3);
		advice4=data["prophecies"][3]
		set_msg4(advice4);
		advice5=data["prophecies"][4]
		set_msg5(advice5);
		advice6=data["prophecies"][5]
		set_msg6(advice6);
	});
});
	function set_msg1(msg) {
	p=$("#sek-11");
	p.html(msg)
	p.css("color","red")

}
function set_msg2(msg) {
	p=$("#sek-12");
	p.html(msg)
	p.css("color","red")

}
function set_msg3(msg) {
	p=$("#sek-13");
	p.html(msg)
	p.css("color","red")

}
function set_msg4(msg) {
	p=$("#sek-21");
	p.html(msg)
	p.css("color","red")

}
function set_msg5(msg) {
	p=$("#sek-22");
	p.html(msg)
	p.css("color","red")

}
function set_msg6(msg) {
	p=$("#sek-23");
	p.html(msg)
	p.css("color","red")

}