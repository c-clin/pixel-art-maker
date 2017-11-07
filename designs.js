// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


const height = $("#input_height").val();
const width = $("#input_width").val();
let table = $("#pixel_canvas");
let table_row = $('tr');
let table_data = $('td');



function makeGrid() {
	// Clear the table first
	table.empty();
	// Draws the grid
	for (let row = 0; row < width; row++) {
		table.append("<tr></tr>");
		for (let col = 0; col < height; col++) {
			table_row.last().append('<td></td>');
		}
	};

	// Add the selected color when clicked
	function changeColor() {
		table_data.click(function() {
			let color = $("#colorPicker").val();
			$(this).css('background-color', color);
		});
	};
};	

// call makeGrid() when the player clicks Submit
$("#submit").click(function(event) {
	makeGrid();
	console.log("Submit clicked");
	console.log("H = " + height + " W = " + width);
	// Stops page from refreshing
	event.preventDefault();
});

// When the clear grid botton is clicked
$("#clear_grid").click(function() {
	table.empty();
	console.log("Success!");
	// Change color input back to black
	$("#colorPicker").val("#000000")
});


