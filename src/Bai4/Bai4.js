class Worker {
    #STT;
    #fullName;
    #dateOfBirth;
    #address;
    #salary;
    #position;

    constructor(STT ,fullName, dateOfBirth, address, salary, position) {
        this.#STT = STT;
        this.#fullName = fullName;
        this.#dateOfBirth = dateOfBirth;
        this.#address = address;
        this.#salary = salary;
        this.#position = position;
    }

    get STT() {
        return this.#STT;
    }
    get fullName() {
        return this.#fullName;
    }
    get dateOfBirth() {
        return this.#dateOfBirth;
    }
    get address() {
        return this.#address;
    }
    get salary() {
        return this.#salary;
    }
    get position() {
        return this.#position;
    }

    set STT(STT) {
        this.#STT = STT;
    }
    set fullName(fullName) {
        this.#fullName = fullName;
    }
    set dateOfBirth(dateOfBirth) {
        this.#dateOfBirth = dateOfBirth;
    }
    set address(address) {
        this.#address = address;
    }
    set salary(salary) {
        this.#salary = salary;
    }
    set position(position) {
        this.#position = position;
    }

    displayInfo() {
        return `STT: ${this.#STT}, Họ và tên: ${this.#fullName}, Ngày sinh: ${this.#dateOfBirth}, Địa chỉ: ${this.#address}, Lương: ${this.#salary}, Chức vụ: ${this.#position}`;
    }
}

const workers = [
    new Worker(1, "Nguyễn Văn A", "1990-01-01", "Hà Nội", 5000000, "Nhân viên"),
    new Worker(2, "Trần Thị B", "1992-02-02", "Hải Phòng", 6000000, "Quản lý"),
    new Worker(3, "Lê Văn C", "1995-03-03", "Đà Nẵng", 7000000, "Giám đốc")
];

function renderWorkers() {
    let table = `
            <table>
                <tr>
                    <th>STT</th>
                    <th>Họ và tên</th>
                    <th>Ngày sinh</th>
                    <th>Địa chỉ</th>
                    <th>Lương</th>
                    <th>Chức vụ</th>
                </tr>
        `;

    workers.forEach(worker => {
        table += `
                <tr>
                    <td>${worker.STT}</td>
                    <td>${worker.fullName}</td>
                    <td>${worker.dateOfBirth}</td>
                    <td>${worker.address}</td>
                    <td>${worker.salary}</td>
                    <td>${worker.position}</td>
                </tr>
            `;
    });

    table += "</table>";
    document.getElementById("result").innerHTML = table;
}

function addWorker() {
    const stt = parseInt(document.getElementById("sttInput").value);
    const name = document.getElementById("nameInput").value.trim();
    const dob = document.getElementById("dobInput").value;
    const address = document.getElementById("addressInput").value.trim();
    const salary = parseFloat(document.getElementById("salaryInput").value);
    const position = document.getElementById("positionInput").value.trim();

    if (!stt || !name || !dob || !address || !salary || !position) {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }

    const newWorker = new Worker(stt, name, dob, address, salary, position);
    workers.push(newWorker);
    renderWorkers();

    document.getElementById("sttInput").value = "";
    document.getElementById("nameInput").value = "";
    document.getElementById("dobInput").value = "";
    document.getElementById("addressInput").value = "";
    document.getElementById("salaryInput").value = "";
    document.getElementById("positionInput").value = "";
}

renderWorkers();