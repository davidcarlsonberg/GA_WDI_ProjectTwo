console.log("scripts_exp.js linked");


//window onload jquery
$(function() {


// GROUP BUTTONS
var friends_button = $("#friends");
friends_button.on("click", function() {
	$("#contact-list").empty();
	$("#contact-image").empty();
	$(".group").each(function () {
		this.style.backgroundColor = "lightblue";
	})
	$.ajax({
		url: "/categories/" + 1,
		type: "GET"
	}).done(function (data) {
		$(".group")[0].style.backgroundColor = "lightcyan";
		for (var i = 0; i < data.contacts.length; i++) {
			
			var newLI = $("<ul id='" + data.contacts[i].id + "'><li id='" + data.contacts[i].id + "'>" + data.contacts[i].name + "</li><li>Age: " + data.contacts[i].age + "</li><li>Address: " + data.contacts[i].address + "</li><li>Phone: " + data.contacts[i].phone_number + "</li><br><button class='edit' id='" + data.contacts[i].id + "'>Edit</button><button class='delete' id='" + data.contacts[i].id + "'>Delete</button></ul><br>");
			var newImage = $("<ul id='" + data.contacts[i].id + "' style='margin-bottom: 71px;'><li><img src='" + data.contacts[i].picture + "'/></li></ul>")
			var edit_button = newLI.find(".edit");
			var delete_button = newLI.find(".delete");

			delContact(delete_button);

			for (var z = 0; z < data.contacts.length; z++) {
				if (edit_button.attr("id") === data.contacts[z].id.toString()) {
					var contact_to_edit = data.contacts[z];  
				}
			}
			editContact(edit_button, contact_to_edit);

		$("#contact-list").append(newLI);	
		$("#contact-image").append(newImage);
		}
	})
});

var frenemies_button = $("#frenemies");
frenemies_button.on("click", function() {
	$("#contact-list").empty();
	$("#contact-image").empty();
	$(".group").each(function () {
		this.style.backgroundColor = "lightblue";
	})
	$.ajax({
		url: "/categories/" + 2,
		type: "GET"
	}).done(function (data) {
		$(".group")[1].style.backgroundColor = "lightcyan";
		for (var i = 0; i < data.contacts.length; i++) {
	
			var newLI = $("<ul id='" + data.contacts[i].id + "'><li id='" + data.contacts[i].id + "'>" + data.contacts[i].name + "</li><li>Age: " + data.contacts[i].age + "</li><li>Address: " + data.contacts[i].address + "</li><li>Phone: " + data.contacts[i].phone_number + "</li><br><button class='edit' id='" + data.contacts[i].id + "'>Edit</button><button class='delete' id='" + data.contacts[i].id + "'>Delete</button></ul><br>");
			var newImage = $("<ul id='" + data.contacts[i].id + "' style='margin-bottom: 71px;'><li><img src='" + data.contacts[i].picture + "'/></li></ul><br><br><br>")
			var edit_button = newLI.find(".edit");
			var delete_button = newLI.find(".delete");

			delContact(delete_button);

			for (var z = 0; z < data.contacts.length; z++) {
				if (edit_button.attr("id") === data.contacts[z].id.toString()) {
					var contact_to_edit = data.contacts[z];  
				}
			}
			editContact(edit_button, contact_to_edit);

		$("#contact-list").append(newLI);
		$("#contact-image").append(newImage);
		}		
	})
});

var family_button = $("#family");
family_button.on("click", function() {
	$("#contact-list").empty();
	$("#contact-image").empty();
	$(".group").each(function () {
		this.style.backgroundColor = "lightblue";
	})
	$.ajax({
		url: "/categories/" + 3,
		type: "GET"
	}).done(function (data) {
		$(".group")[2].style.backgroundColor = "lightcyan";
		for (var i = 0; i < data.contacts.length; i++) {
	
			var newLI = $("<ul id='" + data.contacts[i].id + "'><li id='" + data.contacts[i].id + "'>" + data.contacts[i].name + "</li><li>Age: " + data.contacts[i].age + "</li><li>Address: " + data.contacts[i].address + "</li><li>Phone: " + data.contacts[i].phone_number + "</li><br><button class='edit' id='" + data.contacts[i].id + "'>Edit</button><button class='delete' id='" + data.contacts[i].id + "'>Delete</button></ul><br>");
			var newImage = $("<ul id='" + data.contacts[i].id + "' style='margin-bottom: 71px;'><li><img src='" + data.contacts[i].picture + "'/></li></ul><br><br><br>")
			var edit_button = newLI.find(".edit");
			var delete_button = newLI.find(".delete");

			delContact(delete_button);

			for (var z = 0; z < data.contacts.length; z++) {
				if (edit_button.attr("id") === data.contacts[z].id.toString()) {
					var contact_to_edit = data.contacts[z];  
				}
			}
			editContact(edit_button, contact_to_edit);

		$("#contact-list").append(newLI);
		$("#contact-image").append(newImage);
		}
	})
});

var work_button = $("#work");
work_button.on("click", function() {
	$("#contact-list").empty();
	$("#contact-image").empty();
	$(".group").each(function () {
		this.style.backgroundColor = "lightblue";
	})
	$.ajax({
		url: "/categories/" + 4,
		type: "GET"
	}).done(function (data) {
		$(".group")[3].style.backgroundColor = "lightcyan";
		for (var i = 0; i < data.contacts.length; i++) {
			var newLI = $("<ul id='" + data.contacts[i].id + "'><li id='" + data.contacts[i].id + "'>" + data.contacts[i].name + "</li><li>Age: " + data.contacts[i].age + "</li><li>Address: " + data.contacts[i].address + "</li><li>Phone: " + data.contacts[i].phone_number + "</li><br><button class='edit' id='" + data.contacts[i].id + "'>Edit</button><button class='delete' id='" + data.contacts[i].id + "'>Delete</button></ul><br>");
			var newImage = $("<ul id='" + data.contacts[i].id + "' style='margin-bottom: 71px;'><li><img src='" + data.contacts[i].picture + "'/></li></ul><br><br><br>")
			var edit_button = newLI.find(".edit");
			var delete_button = newLI.find(".delete");

			delContact(delete_button);

			for (var z = 0; z < data.contacts.length; z++) {
				if (edit_button.attr("id") === data.contacts[z].id.toString()) {
					var contact_to_edit = data.contacts[z];  
				}
			}
			editContact(edit_button, contact_to_edit);

		$("#contact-list").append(newLI);
		$("#contact-image").append(newImage);
		}
	})
});

// SEARCH
var search_button = $(".search")
search_button.on("click", function (e) {
	e.preventDefault();

	$.ajax({
		url: "/contacts",
		type: "GET"
	}).done(function (data) {
		var search_name = $("#search").find("input[name='name']").val();
		for (var i = 0; i < data.length; i++) {
			if (data[i].name.indexOf(search_name) >= 0) {
				var newLI = $("<ul id='" + data[i].id + "'><li id='" + data[i].id + "'>" + data[i].name + "</li><li>Age: " + data[i].age + "</li><li>Address: " + data[i].address + "</li><li>Phone: " + data[i].phone_number + "</li><br><button class='edit' id='" + data[i].id + "'>Edit</button><button class='delete' id='" + data[i].id + "'>Delete</button></ul><br>");
				var newImage = $("<ul id='" + data.contacts[i].id + "' style='margin-bottom: 71px;'><li><img src='" + data[i].picture + "'/></li></ul><br><br><br>")
				var edit_button = newLI.find(".edit");
				var delete_button = newLI.find(".delete");

				delContact(delete_button);

				for (var z = 0; z < data.length; z++) {
					if (edit_button.attr("id") === data[i].id.toString()) {
						var contact_to_edit = data[i]; 
					}
				}
				editContact(edit_button, contact_to_edit);
				$("#contact-list").append(newLI);
				$("#contact-image").append(newImage);
			}
			else {
				console.log("not found");
			}
		}
	})

})


// ADD FORM
var add_form = $("#new-contact");
add_form.on("submit", function (e) {
	e.preventDefault();

	var new_contact = {
		name: this.elements["name"].value,
		age: this.elements["age"].value,
		address: this.elements["address"].value,
		phone_number: this.elements["phone"].value,
		category_id: this.elements["category"].value
	};

	$.ajax({
		url: "http://api.randomuser.me/",
		type: "GET"
	}).success(function (data) {
		new_contact.picture = data.results[0].user.picture.thumbnail;
		postNew(new_contact);
	});

	this.reset();
});


// CALLBACKS
var postNew = function (contact) {
	$.ajax({
		url: "/contacts",
		type: "POST",
		dataType: "json",
		data: contact
	}).done(function (data) {
		alert(data.name + " was Added! Touch Group " + data.category_id.toString() + " to View");
	})
};

var delContact = function (button) {
	button.on("click", function () {
		var id = this.id;
		$.ajax({
			url: "/contacts/" + this.id,
			type: "DELETE"
		}).done(function (data) {
			var contacts = $("#contact-list").children("ul");
			var images = $("#contact-image").children("ul");
			for (var i =0; i < contacts.length; i++) {
				if (contacts[i].id === data.id.toString()) {
					contacts[i].remove();
					images[i].remove();
				}
			}
		})
	})
}


var editContact = function (button, contact) {
	button.on("click", function () {
		var edit_form = $("<form style='margin: 0px 50px 0px 130px;'> \
			<input type='text' name='name' placeholder='name' value='" + contact.name + "'/> \
			<input type='text' name='age' placeholder='age' value='" + contact.age + "'/> \
			<input type='text' name='address' placeholder='address' value='" + contact.address + "'/> \
			<input type='text' name='phone' placeholder='phone' value='" + contact.phone_number + "'/> \
			<input type='text' name='picture' placeholder='picture' value='" + contact.picture + "'/> \
			<input type='hidden' name='id' value='" + contact.id + "'/> \
				<select name='category'> \
					<option type='text' value='1'>Friends</option> \
					<option type='text' value='2'>Frenemies</option> \
					<option type='text' value='3'>Family</option> \
					<option type='text' value='4'>Work</option> \
				</select><br> \
  			<button class='edit' type='submit' id='edit'>Edit</button> \
  			<button class='cancel' type='submit' id='cancel'>Cancel</button> \
			</form><br><br>")
		$("#contact-list").prepend(edit_form);
		
		edit_form.children("#edit").on("click", function () {
			var edited_contact = {
				name: edit_form.children("input[name='name']").val(),
				age: edit_form.children("input[name='age']").val(),
				address: edit_form.children("input[name='address']").val(),
				phone_number: edit_form.children("input[name='phone']").val(),
				picture: edit_form.children("input[name='picture']").val(),
				category_id: edit_form.children("select").val()
			};
			var contact_id = parseInt(edit_form.children("input[name='id']").val())
			$.ajax({
				url: "/contacts/" + contact_id,
				type: "PUT",
				dataType: "json",
				data: edited_contact
			}).done(function (data) {
				console.log(data);
			})
		})
		
	})
}

// end window onload jquery
});