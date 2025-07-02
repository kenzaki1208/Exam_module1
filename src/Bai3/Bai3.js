function calculateDays() {
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const result = document.getElementById("result");

    if (isNaN(month) || isNaN(year) || month < 1 || month > 12 || year < 0) {
        alert("Vui lòng nhập tháng (1-12) và năm hợp lệ.");
        return;
    }

    let daysInMonth;

    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            daysInMonth = 31;
            break;
        case 4: case 6: case 9: case 11:
            daysInMonth = 30;
            break;
        case 2:
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                daysInMonth = 29;
            } else {
                daysInMonth = 28;
            }
            break;
        default:
            daysInMonth = "Không hợp lệ";
    }

    const newRow = result.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.textContent = `${month.toString().padStart(2, '0')}/${year}`;
    cell2.textContent = daysInMonth;
}