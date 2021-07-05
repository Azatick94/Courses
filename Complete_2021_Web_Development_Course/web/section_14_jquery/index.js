
let text = "";

$(document).on("keypress", function (event) {
    text+=event.key;
    $("h1").text(text);
})

// $(document).keypress(function (event) {
//     text+=event.key;
//     $("h1").text(text);
// })

$("button").click(function () {
    text = "";
    $("h1").text(text);
})