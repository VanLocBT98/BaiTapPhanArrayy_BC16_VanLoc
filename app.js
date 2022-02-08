// bài tập một
// tạo sựu kiện onclick cho nút button:
document.querySelector('#btnInSanPham').onclick = function(){
    // input : giá trị người dùng nhập vào
    var nu1 = Number(document.querySelector('#soLuongSanPham').value);
    var cards = '';

    for(var i = 0; i < nu1 ; i++){
        cards += `<div class="col-4 mt-2">
        <div class="card text-white bg-dark">
        <img class="card-img-top" src="https://picsum.photos/300"
       alt="random-img">
        <div class="card-body">
        <h4 class="card-title">Product name</h4>
        <p class="card-text">Product price</p>
        </div>
        </div>
        </div>`
    }
    // output : in ra số thẻ card theo yêu cầu người dùng nhập vào
    document.querySelector('#content').innerHTML = cards;
}
  

// bài tấp 2:
// mảng cho trước

var arr = [ 8 , 9 , 9 , 1 , 3 , 5 , 9 , 7 , 7];

document.querySelector('#btnXuLy').onclick = function(){
    var nu2 = Number(document.querySelector('#giaTri').value);
    var lap = 0;
    var min = arr[0] ;
    var tong = 0;
    for( var i =0 ; i < arr.length ; i++){
        var phanTu = arr[i];
        if(nu2 == phanTu){
            lap++
        }
        if(phanTu%2 == !0 && phanTu < min){
            min = phanTu;
        }
        tong+=phanTu

    }
    document.querySelector('#soLanXuatHien').innerHTML = lap;
    document.querySelector('#soLeNhoNhat').innerHTML = min;
    document.querySelector('#tongPhanTu').innerHTML = tong;
    var kqLap = '';
    for (var index1 = 0; index1 < arr.length - 1; index1++) {
        //Lấy ra phần tử mỗi lần so sánh
        var phanTu1 = arr[index1];
        for (var index2 = arr.length - 1; index2 > index1; index2--) {
            //Lấy lần lượt các phần tử từ cuối mảng về phần tử so sánh
            var phanTu2 = arr[index2];
            if (phanTu2 < phanTu1) {
                var temp = arr[index1];
                arr[index1] = arr[index2];
                arr[index2] = temp;
            }
        }
    }
     var current = null;
    var cnt = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != current) {
            if (cnt > 1) {
                kqLap +=current + '( ' + cnt + ' lần )  - ' ;
            }
            current = arr[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 1) {
        kqLap +=current + '(' + cnt + ' lần )  .';
    }
    document.querySelector('#ketQuaLapLai').innerHTML = kqLap + '';
}

