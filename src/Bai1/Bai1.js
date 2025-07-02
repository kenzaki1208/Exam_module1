let array = [];

function addNumber() {
    if (array.length >= 10) {
        alert("Mảng đã đầy, không thể thêm số mới.");
        return;
    }

    const input = document.getElementById("numberInput");
    const value = parseInt(input.value);

    if (isNaN(value) || value < 0) {
        alert("Vui lòng nhập một số nguyên dương.");
        return;
    } else {
        array.push(value);
        input.value = "";
        input.focus();
        updateNumber();
        document.getElementById("number").innerHTML = "Mảng hiện tại: " + array.join(", ");
    }
}

function caculateAverage() {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0) {
            sum += array[i];
            count++;
        }
    }

    if (count > 0) {
        let average = sum / count;
        document.getElementById("number").innerHTML = "Trung bình cộng của các số chia hết cho 3 là: " + average;
    } else {
        document.getElementById("number").innerHTML = "Không có số nào chia hết cho 3.";
    }
}

function resetNumber() {
    array = [];
    document.getElementById("numberInput").value = "";
    document.getElementById("number").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}

function updateNumber() {
    document.getElementById("number").innerHTML = "Mảng hiện tại: " + array.join(", ");
}