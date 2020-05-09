$(function () {
    $(".change-devoured").on("click", function (event) {
       let id = $(this).data("id");
       let newDevoured = true;

       let newDevourState = {
            devoured: newDevoured
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                =;
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

       let newBurger = {
            burger_name: $("#burg").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});