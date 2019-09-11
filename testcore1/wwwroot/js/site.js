// Write your JavaScript code.


function addRowHandlers() {
    var table = document.getElementById("table_id1");
    var rows = table.getElementsByTagName("tr");
    for (i = 0; i < rows.length; i++) {
        var currentRow = table.rows[i];
        var createClickHandler =
            function (row) {
                return function () {
                    var cell = row.getElementsByTagName("td")[0];
                    var id = cell.innerHTML;
                    var x = document.getElementById("slika_utovara");
                    if (x.style.display === "none") {
                        x.style.display = "block";
                    } else {
                        x.style.display = "none";
                    }
                };
            };

        currentRow.onclick = createClickHandler(currentRow);
    }
}
window.onload = addRowHandlers();
