
//BẠN SỬA MÃNG BÊN DƯỚI, MỖI PHẦN TỬ LÀ MỘT KÍ TỰ TÍNH LUỐN KÍ TỰ TRẮNG NHÉ! BẠN CÓ THỂ THÊM NHIỀU PHẦN TỬ HƠN KHÔNG NHẤT THIẾT LÀ 28
//XEM KĨ VIDEO CỦA MÌNH HƠN Ở PHẦN NÀY NHÉ!

status="duminhphongadv"
var a=new Array(),n=""
a[1]='Đ';
a[2]='ơ';
a[3]='n';
a[4]=' ';
a[5]='g';
a[6]='i';
a[7]='ả';
a[8]='n';
a[9]='!';
a[10]=' ';
a[11]='V';
a[12]='ì';
a[13]=' ';
a[14]='A';
a[15]='n';
a[16]='h';
a[17]=' ';
a[18]='Đ';
a[19]='ẹ';
a[20]='p';
a[21]=' ';
a[22]='T';
a[23]='r';
a[24]='a';
a[25]='i';
a[26]=' ';
a[27]='♥';
a[28]=' ';
a[29]='V';
a[30]='à';
a[31]='';
a[32]='c';
a[33]='ò ';
a[34]='n';
a[35]='';
a[36]='c';
a[37]='ó';
a[38]='';
a[39]='1';
a[40]='';
a[41]='c';
a[42]='o';
a[43]='n';
a[44]='';
a[45]='q';
a[46]='u';
a[47]='á';
a[48]='i';
a[49]='';
a[50]='v';
a[51]='ậ';
a[52]='t';
a[53]='';
a[54]='k';
a[55]='h';
a[56]='ổ';
a[57]='n';
a[58]='g';
a[59]='';
a[60]='l';
a[61]='ồ';
a[62]='';
a[63]='n';
a[64]='ữ';
a[65]='a';
function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==29)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					//PHẦN NÀY LÀ PHẦN HIỆN KHI BẠN BẤM "GỞI ĐI" LINK Ở SAU LÀ ICON MẶT CƯỜI XÓA BỎ CŨNG ĐƯỢC CÒN TEXT THÌ BẠN SỬA LẠI THEO Ý CỦA BẠN.
					$("#divResult").html("</br><h2>Anh biết mà hihi<img src='http://duminhphongadv.com/files/assets/3.png'</img></h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p>♥ Chúc vợ sinh nhật vui vẻ nha. Hôm nay a không thể bên vợ được nhưng vợ đừng buồn sau giãn cách tụi mình sẽ cùng nhau có những khoảng thời gian tuyệt vời nha vợ .</p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>Hãy luôn xinh đẹp và khỏe mạnh nha cô gái bé nhỏ của a😍😍😍 </p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				