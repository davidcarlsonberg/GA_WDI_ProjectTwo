console.log("scripts_exp.js linked");

//window onload jquery
$(function() {

// GROUP BUTTONS
var friends_button = $("#friends");
friends_button.on("click", function() {
	$("#contact-list").empty();
	$(".group").each(function () {
		this.style.backgroundColor = "lightblue";
	})
	$.ajax({
		url: "/categories/" + 1,
		type: "GET"
	}).done(function (data) {
		$(".group")[0].style.backgroundColor = "lightcyan";
		for (var i = 0; i < data.contacts.length; i++) {
			var contact = data.contacts[i].name
			$("#contact-list").append("<li>" + contact + "<button id='" + data.contacts[i].id + "'>Delete</button></li>");
			$("#" + data.contacts[i].id).on("click", function () {
				$.ajax({
					url: "/contacts/" + this.id,
					type: "DELETE",
				}).done(function (data) {
				})
			})			
		}
	})
});

var frenemies_button = $("#frenemies");
frenemies_button.on("click", function() {
	$("#contact-list").empty();
	$(".group").each(function () {
		this.style.backgroundColor = "lightblue";
	})
	$.ajax({
		url: "/categories/" + 2,
		type: "GET"
	}).done(function (data) {
		$(".group")[1].style.backgroundColor = "lightcyan";
		for (var i = 0; i < data.contacts.length; i++) {
			var contact = data.contacts[i].name
			$("#contact-list").append("<li>" + contact + "<button id='" + data.contacts[i].id + "'>Delete</button></li>");
			$("#" + data.contacts[i].id).on("click", function () {
				$.ajax({
					url: "/contacts/" + this.id,
					type: "DELETE",
				}).done(function (data) {
				})
			})			
		}
	})
});

var family_button = $("#family");
family_button.on("click", function() {
	$("#contact-list").empty();
	$(".group").each(function () {
		this.style.backgroundColor = "lightblue";
	})
	$.ajax({
		url: "/categories/" + 3,
		type: "GET"
	}).done(function (data) {
		$(".group")[2].style.backgroundColor = "lightcyan";
		for (var i = 0; i < data.contacts.length; i++) {
			var contact = data.contacts[i].name
			$("#contact-list").append("<li>" + contact + "<button id='" + data.contacts[i].id + "'>Delete</button></li>");
			$("#" + data.contacts[i].id).on("click", function () {
				$.ajax({
					url: "/contacts/" + this.id,
					type: "DELETE",
				}).done(function (data) {
				})
			})			
		}
	})
});

var work_button = $("#work");
work_button.on("click", function() {
	$("#contact-list").empty();
	$(".group").each(function () {
		this.style.backgroundColor = "lightblue";
	})
	$.ajax({
		url: "/categories/" + 4,
		type: "GET"
	}).done(function (data) {
		$(".group")[3].style.backgroundColor = "lightcyan";
		for (var i = 0; i < data.contacts.length; i++) {
			var contact = data.contacts[i].name
			$("#contact-list").append("<li>" + contact + "<button id='" + data.contacts[i].id + "'>Delete</button></li>");
			$("#" + data.contacts[i].id).on("click", function () {
				$.ajax({
					url: "/contacts/" + this.id,
					type: "DELETE",
				}).done(function (data) {
				})
			})
		}
	})
});


// ADD FORM
var add_form = $("form");
add_form.on("submit", function (e) {
	e.preventDefault();
	var new_contact = new Object();
	new_contact.name = this.children[0].value;
	new_contact.age = this.children[1].value;
	new_contact.address = this.children[2].value;
	new_contact.phone_number = this.children[3].value;
	new_contact.picture = this.children[4].value;
	var select = document.getElementById("category");
	var group = select.options[select.selectedIndex].value;
	new_contact.category_id = group;
	$.ajax({
		url: "/contacts",
		type: "POST",
		dataType: "json",
		data: new_contact
	}).done(function (data) {
		$("#contact-list").append("<li id='" + data.id + "'>" + data.name + "<button id='" + data.id + "'>Delete</button></li>");
		$("#" + data.id).on("click", function () {
			$.ajax({
				url: "/contacts/" + this.id,
				type: "DELETE",
			}).done(function (data) {
				console.log(data);
			})
		})
	})
	$("#new-contact")[0].reset()
});


// end window onload jquery
});