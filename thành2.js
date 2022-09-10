function numberOneTriangle() {
    const W = 4
    for(let i = 0; i<=W ; i++) {
        for(let j = 1; j<=i+1;j++){
            document.write("1")
        }
        document.writeln("<br/>")
    }
}
numberOneTriangle();
function Dong_ho() {
    var gio = document.getElementById("hour");
    var phut = document.getElementById("minute");
    var giay = document.getElementById("second");
    var Gio_hien_tai = new Date().getHours();
    var Phut_hien_tai = new Date().getMinutes();
    var Giay_hien_tai = new Date().getSeconds();
    gio.innerHTML = Gio_hien_tai;
    phut.innerHTML = Phut_hien_tai;
    giay.innerHTML = Giay_hien_tai;
}
var Dem_gio = setInterval(Dong_ho, 1000);