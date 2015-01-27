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
			
			var newLI = $("<ul><li id='" + data.contacts[i].id + "'>" + data.contacts[i].name + "</li><li>Age: " + data.contacts[i].age + "</li><li>Address: " + data.contacts[i].address + "</li><li>Phone: " + data.contacts[i].phone_number + "</li><br><button class='edit' id='" + data.contacts[i].id + "'>Edit</button><button class='delete' id='" + data.contacts[i].id + "'>Delete</button></ul><br>");
			var newImage = $("<ul style='margin-bottom: 78px;'><li><img src='" + data.contacts[i].picture + "'/></li></ul>")
			var edit_button = newLI.find(".edit");
			var delete_button = newLI.find(".delete");

			delete_button.on("click", function () {
				$.ajax({
					url: "/contacts/" + this.id,
					type: "DELETE"
				}).done(function (data) {
				})
			})

			edit_button.on("click", function () {
				for (var z = 0; z < data.contacts.length; z++) {
  					if (this.id === data.contacts[z].id.toString()) {
    					var contact_to_edit = data.contacts[z];  
  					}
				}
				var edit_form = $("<form> \
					<input type='text' name='name' placeholder='name' value='" + contact_to_edit.name + "'/> \
					<input type='text' name='age' placeholder='age' value='" + contact_to_edit.age + "'/> \
					<input type='text' name='address' placeholder='address' value='" + contact_to_edit.address + "'/> \
					<input type='text' name='phone' placeholder='phone' value='" + contact_to_edit.phone_number + "'/> \
					<input type='text' name='picture' placeholder='picture' value='" + contact_to_edit.picture + "'/> \
					<input type='hidden' name='id' value='" + contact_to_edit.id + "'/> \
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
	
			var newLI = $("<ul><li id='" + data.contacts[i].id + "'>" + data.contacts[i].name + "</li><li>Age: " + data.contacts[i].age + "</li><li>Address: " + data.contacts[i].address + "</li><li>Phone: " + data.contacts[i].phone_number + "</li><br><button class='edit' id='" + data.contacts[i].id + "'>Edit</button><button class='delete' id='" + data.contacts[i].id + "'>Delete</button></ul><br>");
			var newImage = $("<ul style='margin-bottom: 78px;'><li><img src='" + data.contacts[i].picture + "'/></li></ul><br><br><br>")
			var edit_button = newLI.find(".edit");
			var delete_button = newLI.find(".delete");
			delete_button.on("click", function () {
				$.ajax({
					url: "/contacts/" + this.id,
					type: "DELETE"
				}).done(function (data) {
				})
			})
			edit_button.on("click", function () {
				for (var z = 0; z < data.contacts.length; z++) {
  					if (this.id === data.contacts[z].id.toString()) {
    					var contact_to_edit = data.contacts[z];  
  					}
				}
				var edit_form = $("<form> \
					<input type='text' name='name' placeholder='name' value='" + contact_to_edit.name + "'/> \
					<input type='text' name='age' placeholder='age' value='" + contact_to_edit.age + "'/> \
					<input type='text' name='address' placeholder='address' value='" + contact_to_edit.address + "'/> \
					<input type='text' name='phone' placeholder='phone' value='" + contact_to_edit.phone_number + "'/> \
					<input type='text' name='picture' placeholder='picture' value='" + contact_to_edit.picture + "'/> \
					<input type='hidden' name='id' value='" + contact_to_edit.id + "'/> \
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
	
			var newLI = $("<ul><li id='" + data.contacts[i].id + "'>" + data.contacts[i].name + "</li><li>Age: " + data.contacts[i].age + "</li><li>Address: " + data.contacts[i].address + "</li><li>Phone: " + data.contacts[i].phone_number + "</li><br><button class='edit' id='" + data.contacts[i].id + "'>Edit</button><button class='delete' id='" + data.contacts[i].id + "'>Delete</button></ul><br>");
			var newImage = $("<ul style='margin-bottom: 78px;'><li><img src='" + data.contacts[i].picture + "'/></li></ul><br><br><br>")
			var edit_button = newLI.find(".edit");
			var delete_button = newLI.find(".delete");
			delete_button.on("click", function () {
				$.ajax({
					url: "/contacts/" + this.id,
					type: "DELETE"
				}).done(function (data) {
				})
			})
			edit_button.on("click", function () {
				for (var z = 0; z < data.contacts.length; z++) {
  					if (this.id === data.contacts[z].id.toString()) {
    					var contact_to_edit = data.contacts[z];  
  					}
				}
				var edit_form = $("<form> \
					<input type='text' name='name' placeholder='name' value='" + contact_to_edit.name + "'/> \
					<input type='text' name='age' placeholder='age' value='" + contact_to_edit.age + "'/> \
					<input type='text' name='address' placeholder='address' value='" + contact_to_edit.address + "'/> \
					<input type='text' name='phone' placeholder='phone' value='" + contact_to_edit.phone_number + "'/> \
					<input type='text' name='picture' placeholder='picture' value='" + contact_to_edit.picture + "'/> \
					<input type='hidden' name='id' value='" + contact_to_edit.id + "'/> \
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
			var newLI = $("<ul><li id='" + data.contacts[i].id + "'>" + data.contacts[i].name + "</li><li>Age: " + data.contacts[i].age + "</li><li>Address: " + data.contacts[i].address + "</li><li>Phone: " + data.contacts[i].phone_number + "</li><br><button class='edit' id='" + data.contacts[i].id + "'>Edit</button><button class='delete' id='" + data.contacts[i].id + "'>Delete</button></ul><br>");
			var newImage = $("<ul style='margin-bottom: 78px;'><li><img src='" + data.contacts[i].picture + "'/></li></ul><br><br><br>")
			var edit_button = newLI.find(".edit");
			var delete_button = newLI.find(".delete");
			delete_button.on("click", function () {
				$.ajax({
					url: "/contacts/" + this.id,
					type: "DELETE"
				}).done(function (data) {
				})
			})
			edit_button.on("click", function () {
				for (var z = 0; z < data.contacts.length; z++) {
  					if (this.id === data.contacts[z].id.toString()) {
    					var contact_to_edit = data.contacts[z];  
  					}
				}
				var edit_form = $("<form> \
					<input type='text' name='name' placeholder='name' value='" + contact_to_edit.name + "'/> \
					<input type='text' name='age' placeholder='age' value='" + contact_to_edit.age + "'/> \
					<input type='text' name='address' placeholder='address' value='" + contact_to_edit.address + "'/> \
					<input type='text' name='phone' placeholder='phone' value='" + contact_to_edit.phone_number + "'/> \
					<input type='text' name='picture' placeholder='picture' value='" + contact_to_edit.picture + "'/> \
					<input type='hidden' name='id' value='" + contact_to_edit.id + "'/> \
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
		$("#contact-list").append(newLI);
		$("#contact-image").append(newImage);
		}
	})
});


// ADD FORM
var add_form = $("form");
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
	});

	this.reset();

	// post_new(new_contact)
	
	// $.ajax({
	// 	url: "/contacts",
	// 	type: "POST",
	// 	dataType: "json",
	// 	data: new_contact
	// }).done(function (data) {
	// 	console.log(data)
	// })

});

var post_new = function (new_contact) {
	$.ajax({
		url: "/contacts",
		type: "POST",
		dataType: "json",
		data: new_contact
	}).done(function (data) {
		console.log(data)
	})
};


// end window onload jquery
});