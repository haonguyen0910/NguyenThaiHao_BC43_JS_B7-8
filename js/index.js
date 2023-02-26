function domID(id){
    return document.getElementById(id);
}

function chonChucNang(){
    var chon = Number(domID('chonXuLy').value);

    switch (chon){
        case 1: 
            domID('ketQua').innerHTML = domID('tongDuong').innerHTML;
            break;
        case 2:
            domID('ketQua').innerHTML = domID('demDuong').innerHTML;
            break;
        case 3:
            domID('ketQua').innerHTML = domID('timMin').innerHTML;
            break;
        case 4:
            domID('ketQua').innerHTML = domID('timMinDuong').innerHTML;
            break;
        case 5:
            domID('ketQua').innerHTML = domID('timChan').innerHTML;
            break;
        case 6:
            domID('ketQua').innerHTML = domID('doi').innerHTML;
            break;
        case 7:
            domID('ketQua').innerHTML = domID('sapXep').innerHTML;
            break;
        case 8:
            domID('ketQua').innerHTML = domID('soNT').innerHTML;
            break;
        case 9:
            domID('ketQua').innerHTML = domID('soNg').innerHTML;
            break;
        case 10:
            domID('ketQua').innerHTML = domID('soSanh').innerHTML;
            break;
    }
}

var arr = new Array();

function themMang(){
    var so = Number(domID('so').value);
    arr.push(so);
    domID('mang').innerHTML = arr;
}
//Tổng số dương trong mảng
function tongSoDuong(){
    var tong = 0;
    for(var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            tong += arr[i];
        }
    }
    domID('ketQua1').innerHTML = tong;
}

// Đếm số dương trong mảng
function demSoDuong(){
    var dem = 0;

    for(var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            dem++;
        }
    }
    domID('ketQua2').innerHTML = dem;
}
// Tìm min trong mảng
function timMin(){
    var min = arr[0];
    for(var i = 0; i < arr.length; i++){
        if (min > arr[i]){
            min = arr[i];
        }
    }
    domID('ketQua3').innerHTML = min;
}
// Tìm min dương trong mảng
function timMinDuong(){
    for(var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            min = arr[i];
            break;
        }
    }
    for(var i = 0; i < arr.length; i++){
        if (arr[i] > 0 && arr [i]< min){
            min = arr[i];
        }
    }
    domID('ketQua4').innerHTML = min;
}

// Tìm số chẵn cuối cùng
function timChan(){
    var so = -1;
    for(var i = arr.length; i >= 0; i--){
        if(arr[i] % 2 == 0){
            so = arr[i];
            break;
        }
    }
    domID('ketQua5').innerHTML = so;
}

// Đổi vị trí
function doiViTri(){
    var viTri1 = Number(domID('so1').value);
    var viTri2 = Number(domID('so2').value);

    var temp = arr[viTri1];
    arr[viTri1] = arr[viTri2];
    arr[viTri2] = temp;

    domID('ketQua6').innerHTML = "Mảng sau khi hoán đổi: " + arr;
}

// Sắp xếp mảng tăng dần
function sapXep(){
    for(var i = 0; i< arr.length - 1; i++){
        for(var j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    domID('ketQua7').innerHTML = arr;
}

// Tìm số nguyên tố đầu tiên
function kiemtra(n){
    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố
    var flag = 1;
    if (n < 2) return flag = 0;
    for(var i = 2; i < n; i++){
        if( n%i==0 ) {
            flag = 0;
            break;
        }
    }
    return flag;
}
function soNT(){
    var so = -1
    for(var i = 0; i < arr.length; i++){
        if (kiemtra(arr[i]) == 1){
            so = arr[i];
            break;
        }
    }
    domID('ketQua8').innerHTML = so;
}

//So sánh số lượng âm và dương
function soSanhMang(){
    var duong = 0;
    var am = 0;

    for(var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            duong++;
        }
        if (arr[i] < 0){
            am++;
        }
    }

    if (duong > am){
        domID('ketQua10').innerHTML = "Số dương > số âm";
    } else if( duong < am){
        domID('ketQua10').innerHTML = "Số âm > số dương";
    } else {
        domID('ketQua10').innerHTML = "Số dương = số âm";
    }
}

//Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên
var arrNew = new Array();
function themMangMoi(){
    var so = Number(domID('soMoi').value);
    arrNew.push(so);
    domID('mang1').innerHTML = arrNew;
}

function soNguyen(){
    var dem = arrNew.length;
    domID('ketQua9').innerHTML = dem;
}

