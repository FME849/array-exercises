// Global array
var numArr = [];

// Hàm thêm phần tử mảng
function themPhanTu() {
    var phanTu = Number(document.querySelector("#phanTuMang").value);
    numArr.push(phanTu);
    if (numArr.length == 1) {
        document.querySelector("#mangArray").innerHTML+= " " + phanTu;
    } else {
        document.querySelector("#mangArray").innerHTML+= ", " + phanTu;
    }
}
document.querySelector("#themPhanTuMang").onclick = themPhanTu;

// Ex 01
function tinhTongDuong() {
    var tongSoDuong = 0;
    for (i = 0; i < numArr.length; i++) {
        if (numArr[i] >= 0) {
            tongSoDuong+= numArr[i];
        }
    }
    document.querySelector("#ketQuaTongDuong").innerHTML = "Tổng số dương: " + tongSoDuong;
}

// Ex 02
function demSoDuong() {
    var count = 0;
    for (i = 0; i < numArr.length; i++) {
        if (numArr[i] >= 0) {
            count+= 1;
        }
    }
    document.querySelector("#ketQuaSoDuong").innerHTML = "Số dương: " + count;
}

function timSoNhoNhat() {
    var soMin = numArr[0];
    for (i = 1; i < numArr.length; i++) {
        if (numArr[i] < soMin) {
            soMin = numArr[i]
        }
    }
    document.querySelector("#soNhoNhat").innerHTML = "Số nhỏ nhất: " + soMin;
}