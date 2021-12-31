
//******* canvas - vẽ đng thẳng ********/

// PHƯƠNG THỨC :
// beginPath() ; // bắt đầu tạo 1 đường thẳng mới
// moveTo(x,y) ; // điểm bắt đầu
// lineTo(x,y) ; // điểm kết thúc
// stroke() ; // tiến hành vẽ
// strokeStyle = color // đổ màu
// lineCap = '...' // tạo kiểu cho đầu => round: đầu đc bo tròn ; butt : mặc định ; square : đầu hình vuông 
// lineJoin = '...' // kiểu bo góc bởi 2 đường thẳng => round: đầu đc bo tròn ; bevel: tạo ra góc xiên

/* ----------------------------------- */
// bài 1 vẽ 1 đường thẳng
let demoCanvas = document.getElementById("demo_canvas");
if (demoCanvas.getContext) {
    let ctx = demoCanvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(150, 150);
    ctx.lineWidth = 25 ;
    ctx.strokeStyle = 'red';
    ctx.lineCap = 'round';
    ctx.stroke();
}

// bài 2 tạo 1 đường thẳng được bẻ cong
let canvas = document.getElementById("demo_canvas1");
if (canvas.getContext) {
    let context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(30, 30);
    context.lineTo(100, 30);
    context.lineTo(100, 100);
    context.strokeStyle = 'blue' ;
    context.lineWidth = 25;
    context.lineJoin = 'round' ;
    context.stroke();
}