const table = $("#pixel_canvas");
const height_input = $("#input_height");
const width_input = $("#input_width");
// Function to draw the grid
function makeGrid() {
	// Clear the table first
	table.empty();

	let height = height_input.val();
	let width = width_input.val();
	// Draws the grid
	for (let row = 0; row < height; row++) {
		table.append("<tr></tr>");
		for (let col = 0; col < width; col++) {
			$('tr').last().append('<td></td>');
		}
	};
};	

// Changes the grid color when it's clicked
let isDown = false; // Boolean for the mouseover function

$('body').mousedown(function() {
	isDown = true;
});

$('body').mouseup(function() {
	isDown = false;
});

function changeColor() {
	// Colors the grid with mouseover
	$('td').mouseover(function() {
		if (isDown) {
		let color = $("#colorPicker").val();
		$(this).css('background-color', color);
		}
	});
	// Colors the grid when clicked
	$('td').click(function() {
	let color = $("#colorPicker").val();
	$(this).css('background-color', color);
	});
};

// Creates the grid when the submit button is
$("#submit").click(function(event) {
	event.preventDefault();
	makeGrid();
	changeColor();
});

// When the clear grid botton is clicked
$("#clear_grid").click(function() {
	table.empty();
	// Change color input back to black
	$("#colorPicker").val("#000000");
	// Change the height and width value back to 1
	$("#input_height").val(1);
	$("#input_width").val(1);
});
