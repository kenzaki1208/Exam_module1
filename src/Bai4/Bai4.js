class worker {
    #STT
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

const worker1 = new worker(1, "Nguyễn Văn A", "1990-01-01", "Hà Nội", 5000000, "Nhân viên");
const worker2 = new worker(2, "Trần Thị B", "1992-02-02", "Hải Phòng", 6000000, "Quản lý");
const worker3 = new worker(3, "Lê Văn C", "1995-03-03", "Đà Nẵng", 7000000, "Giám đốc");

let workers = [worker1, worker2, worker3];

let workerList = (workers) => {
    let table = "<table>" +
                            "<tr>" +
                                "<th>STT</th>" +
                                "<th>Họ và tên</th>" +
                                "<th>Ngày sinh</th>" +
                                "<th>Địa chỉ</th>" +
                                "<th>Lương</th>" +
                                "<th>Chức vụ</th>" +
                            "</tr>";
    workers.forEach((worker) => {
        table += "<tr>" +
                    `<td>${worker.STT}</td>` +
                    `<td>${worker.fullName}</td>` +
                    `<td>${worker.dateOfBirth}</td>` +
                    `<td>${worker.address}</td>` +
                    `<td>${worker.salary}</td>` +
                    `<td>${worker.position}</td>` +
                 "</tr>";
    })
    table += "</table>";
    return table;
}

document.getElementById("result").innerHTML = workerList(workers);