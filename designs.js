//Function for making grids
function makeGrid(e) {
    let height = $("#inputHeight").val();
    let width = $("#inputWidth").val();
    //Clean table
    $("tr").remove();
    //Loop height
    for (let y = 1; y <= Number(height); y++) {
        $("#pixelCanvas").append("<tr></tr>");
    }
    //Loop width
    for (let x = 1; x <= Number(width); x++) {
        $("#pixelCanvas").find("tr").append("<td></td>");
    }
    e.preventDefault();
}
// When size is submitted by the user, call makeGrid()
$(document).ready(function() {
    $("#submit").click(makeGrid);
});

// When click cell, change the color to picked color
$("#pixelCanvas").on("click", "td", function() {
    let color = $("#colorPicker").val();// Select color input
    $(this).css("background-color", color);
});





