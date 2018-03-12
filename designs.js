// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
function makeGrid(e) {
    let height = $("#inputHeight").val();
    let width = $("#inputWidth").val();
    $("#pixelCanvas").find().remove();
    for (let x = 1; x <= Number(width); x++) {
        $("#pixelCanvas").append("<tr></tr>");
    }
    for (let y = 1; y <= Number(height); y++) {
        $("#pixelCanvas").find("tr").append("<td></td>");
    }
    e.preventDefault();
}

$("#submit").click(makeGrid);

// When click cube, change the color to picked color
$("#pixelCanvas").on("click", "td", function() {
    let color = $("#colorPicker").val();
    $(this).css("background-color", color);
});


