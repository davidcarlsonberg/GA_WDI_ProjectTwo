console.log("scripts.js linked");

// Contact Model
var Contact = Backbone.Model.extend({
	initialize: function () {
		console.log("A new contact has been created");
	},
	defaults: {
		name: "",
		age: "",
		address: "",
		phone_number: "",
		picture: ""
	}
});

//Contact List Collection
var ContactList = Backbone.Collection.extend({
	model: Contact
});

// Contact Model View
var ContactView = Backbone.View.extend({
	initialize: function () {
		this.listenTo(this.model, "all", this.render)
	},
	tagName: "li",
	render: function () {
		this.$el.empty();
		this.$el.html( this.template( this.model.attributes ) );
		return this;
		debugger
	},
	addOne: function (e) {
		e.preventDefault();
		debugger
		var contact = new Contact({
			name: "",
			age: "",
			address: "",
			phone_number: "",
			picture: ""
		})
	}
});



// Contact List Collection View
var ContactListView = Backbone.View.extend({

	render: function () {
		var self = this;
		this.$el.empty();
		_.each(this.collection.models, function (contact) {
			var contactView = new ContactView({model: contact})
			self.$el.append( contactView.render().el )
		})
		return this;
	}
});


// Category Model
var Category = Backbone.Model.extend({
	initialize: function () {
		console.log("")
	},
	defaults: {
		name: ""
	}
});

//Category Model View
var CategoryView = Backbone.View.extend({
	tagName: "li"

})

//Category List Collection
var CategoryList = Backbone.Model.extend({
	model: Category
})

//Category List Collection View
var CategoryListView = Backbone.View.extend({

})

$("#friends").on("click", function () {
	$.ajax({
		url: "/contacts",
		type: "GET"
	}).done( function (data) {
		var contacts = JSON.parse(data);
		console.log(contacts);
	})
});