// Copy the code above and write some Javascript code to 
// color all diagonal table cells in red.

const table = document.querySelector("table");

function colorDiags() {

    for (let i=0; i < table.rows.length; i++) {
        table.rows[i].cells[i].style.backgroundColor = "red";
        table.rows[i].cells[i].style.color = "white";   

    };
    for (let i=0; i < table.rows.length; i++) {
        table.rows[i].cells[table.rows.length - 1 - i].style.backgroundColor = "red";
        table.rows[i].cells[table.rows.length - 1 - i].style.color = "white"
    };
};
colorDiags();