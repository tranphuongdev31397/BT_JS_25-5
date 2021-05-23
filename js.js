//Bài 1: Tính tiền lương nhân viên 1 ngày 100.000 , người dùng nhập số ngày
//B1 : Tiền lương 1 ngày :100.000, số ngày làm
//B2: Tạo biến lương 1 ngày 100.000
// Tạo biến nhập số ngày
// Tạo biến lương tháng = số ngày làm  * lương 1 ngày (100.000)
//In kết quả ra console
//B3 : Lương tháng
console.log( "===== BÀI 1 ========")
var luongMotNgay = 100000;
var soNgayLam   ;
soNgayLam = 24

var luongThang;
luongThang =  soNgayLam * luongMotNgay;
console.log('Lương tháng này là :', luongThang + 'VND');
//Bài 2 : Cho nhập vào 5 số thực và tính trung bình của 5 số này
//B1 : 5 số R+ - khác 0, 
//B3 : Trung bình cộng của 5 số
//B2 : Tạo biến Cho người dùng nhập vào 5 số thực
// Tạo biến số trung bình của 5 số này = (R1 + R2 + R3 +R4 + R5 ) /5
// In kết quả ra conosle
console.log("======== BÀI 2 ============")
var R1, R2, R3, R4, R5
R1  = 1
R2  = 2
R3  = 3;
R4  = 4
R5  = 5
var Aver
Aver = ((R1 + R2 + R3 + R4 + R5)/5)
console.log('Giá trị trung bình là', Aver)
/* Bài 3: Quy đổi USD
B1: Input
giaUSD : 23.500vnd
nhapSoTien: 
B2: Handle
Tạo biến giaUSD và nhapSoTien, soTienSauQuyDoi
Tính số tiền sau quy đổi  soTienSauQuyDoi = nhapSoTien * giaUSD
B3 : Output
Xuất số tiền sau quy đổi
**/
console.log('====Bài 3 ====')
var giaUSD = 23500
var nhapSoTien = 10000
var soTienSauQuyDoi
soTienSauQuyDoi = nhapSoTien * giaUSD
console.log('Giá trị sau quy dổi: ' + soTienSauQuyDoi + 'VND')
/* Bài 4: Tình diện tích , chu vi HCN
B1: Input
Chiều dài HCN
Chiều rộng HCN
B2: Handle
Tạo biến chieuDai, chieuRong, chuVi, dienTich
Tính chu vi và diện tích hình chữ nhật qua công thức
Chu vi = (Dài + Rộng) * 2
Diện tích = Dài * Rộng
B3: Out put
Xuất chu vi và diện tíhc HCN
**/
console.log('=====Bài 4====')
var chieuDai = 4
var chieuRong = 5
var chuVi;
var dienTich;
chuVi = (chieuDai + chieuRong) * 2;
dienTich = chieuRong * chieuDai;
console.log('Chu vi HCN là ' + chuVi +  ' cm')
console.log('Diện tíhc HCN là ' + dienTich + ' cm2')
/* Bài 5 : Nhập vào 2 số có 2 chữ số tính tổng 2 số được nhập
B1 : Input
Số có 2 chữ số
B2: Handle
Tạo biến soCoHaiChuSo, soHangDonVi = int soCoHaiChuSo % 10 , soHangChuc= int soCoHaiChuSo/10, Sum
Sum = soHangDonVi + soHangChuc
B3 : Output
Xuất ra tổng Sum của số đó
*/
console.log('===Bài 5 ===')
var soCoHaiChuSo = 99;
var soHangDonVi
var soHangChuc 
var Sum
soHangDonVi = (soCoHaiChuSo%10)
soHangChuc = Math.floor(soCoHaiChuSo/10)
Sum = soHangDonVi + soHangChuc;
console.log('Tổng 2 số được điền vào là ' + Sum )



