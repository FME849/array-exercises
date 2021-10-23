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

