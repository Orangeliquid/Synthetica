$(document).ready(function () {
    $('#wordForm').submit(function (event) {
        event.preventDefault(); // Prevent default form submission

        // Log form data to console
        console.log("Form submitted");
        console.log("Word: " + $('#textInput').val());
        console.log("Code: " + $('#queryTypeInput').val());
        console.log("Amount: " + $('#amountInput').val());

        // Get form data
        var formData = {
            word: $('#textInput').val(), // Use the correct ID
            code: $('#queryTypeInput').val(), // Use the correct ID
            amount: $('#amountInput').val() // Use the correct ID
        };

        // Send AJAX POST request
        $.ajax({
            type: 'POST',
            url: '/',
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function (data) {
                $('#results').css('display', 'block');
                $('#results').empty();

                // Check if 'data' is an array or a single object
                if (Array.isArray(data)) {
                    // If 'data' is an array
                    var table = $('<table>').addClass('table'); // Create a table element with Bootstrap table class
                    var headerRow = $('<tr>'); // Create a header row

                    // Create header cells based on the keys of the first object in the array
                    Object.keys(data[0]).forEach(function (key) {
                        headerRow.append($('<th>').text(key));
                    });

                    table.append(headerRow); // Append header row to the table

                    // Loop through each object in the array to create rows and cells
                    data.forEach(function (result) {
                        var row = $('<tr>'); // Create a row for each object
                        // Loop through each key in the object to create cells
                        Object.keys(result).forEach(function (key) {
                            row.append($('<td>').text(result[key])); // Create a cell with the value
                        });
                        table.append(row); // Append the row to the table
                    });

                    $('#results').append(table); // Append the table to the results container
                } else {
                    // If 'data' is a single object
                    // Construct the result display for a single object (if needed)
                    // Example: $('#results').append('<p>' + data.word + '</p>');
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
});

$(document).ready(function() {
    // Add your existing JavaScript code here

    // Random background selection code
    var backgrounds = ['r-p-bg', 'b-o-bg', 'b-o-blob-bg', 'c-o-bg', 'o-circle-bg', 'o-scatter-bg', 'w-o-bg', 'w-o-bg1', 'w-o-bg2'];
    var randomIndex = Math.floor(Math.random() * backgrounds.length);
    var randomBackgroundClass = backgrounds[randomIndex];
    $('#backgroundElement').addClass(randomBackgroundClass);
});
