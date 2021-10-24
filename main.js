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

// Ex 03
function timSoNhoNhat() {
    var soMin = numArr[0];
    for (i = 1; i < numArr.length; i++) {
        if (numArr[i] < soMin) {
            soMin = numArr[i]
        }
    }
    document.querySelector("#soNhoNhat").innerHTML = "Số nhỏ nhất: " + soMin;
}

// Ex 04
// Cách 1:
// function timSoDuongNhoNhat() {
//     var soMin = 0;
//     for (i = 0; i < numArr.length; i++) {
//         if (numArr[i] == 0) {
//             document.querySelector("#soDuongNhoNhat").innerHTML = "Số dương nhỏ nhất: " + numArr[i];
//             return;
//         } else if (numArr[i] > 0) {
//             if (soMin == 0) {
//                 soMin = numArr[i];
//             } else if (soMin > numArr[i]) {
//                 soMin = numArr[i];
//             }
//         } else if (i == (numArr.length - 1) && soMin == 0){
//             document.querySelector("#soDuongNhoNhat").innerHTML = "Không có số dương trong mảng";
//             return;
//         }
//     }
//     document.querySelector("#soDuongNhoNhat").innerHTML = "Số dương nhỏ nhất: " + soMin;
// }
// Cách 2:
function timSoDuongNhoNhat() {
    var newArr = [];
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] >= 0) {
            newArr.push(numArr[i]);
        }
    }
    if (newArr.length != 0) {
        var soMin = newArr[0];
        for (var j = 1; j < newArr.length; j++) {
            if (soMin > newArr[i]) {
                soMin = newArr[i];
            }
        }
        document.querySelector("#soDuongNhoNhat").innerHTML = "Số dương nhỏ nhất: " + soMin;
    } else {
        document.querySelector("#soDuongNhoNhat").innerHTML = "Không có số dương trong mảng";
    }
}

// Ex 05
function timSoChanCuoiCung() {
    var soChan = 0;
    for (var i = 0; i < numArr.length; i++) {
        if ((numArr[i])%2 == 0) {
            soChan = numArr[i];
        }
    }
    document.querySelector("#soChanCuoiCung").innerHTML = "Số chẵn cuối cung: " + soChan;
}