function checkPerfect() {
    const input = document.getElementById("numberInput");
    const value = parseInt(input.value);

    const result = document.getElementById("result");

    if (isNaN(value) || value <= 0) {
        result.innerHTML = "Vui lòng nhập một số nguyên dương.";
        return;
    }

    if (perfectNumbers(value)) {
        result.innerHTML = value + " là một số hoàn hảo" + " => " + "true";
    } else {
        result.innerHTML = value + " không phải là một số hoàn hảo" + " => " + "false";
    }
}

function perfectNumbers(n) {
    if (n <= 0) {
        return false;
    }

    let sum = 0;
    for (let i = 0; i <= n/2; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum === n;
}