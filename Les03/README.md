Local storage là một tính năng của các trình duyệt web cho phép lưu trữ dữ liệu trên máy tính của người dùng trong một kho dữ liệu tạm thời. Điều này giúp cho việc lưu trữ và truy xuất dữ liệu trên các trang web được thực hiện một cách nhanh chóng và dễ dàng hơn.

Với local storage, các ứng dụng web có thể lưu trữ các thông tin như cài đặt người dùng, lịch sử truy cập, trạng thái đăng nhập và các tùy chọn cá nhân khác. Các dữ liệu này có thể được lưu trữ trong các định dạng khác nhau, bao gồm các giá trị số, chuỗi văn bản, đối tượng JSON và hình ảnh.

Các trình duyệt hỗ trợ:

Trình duyệt	Chrome (4.0+)	Firefox (3.5)	Safari (4.0)	IE (8.0+)
	10MB	                  10MB	            5MB         	10MB


Có 3 cách khởi tạo function trong JavaScript, đó là:

Function Declaration: Khai báo hàm thông thường bằng từ khóa function. Ví dụ:
javascript
Copy code
//
function sum(a, b) {
  return a + b;
}
Function Expression: Khai báo hàm dưới dạng biểu thức. Ví dụ:
javascript
Copy code
var sum = function(a, b) {
  return a + b;
};
//
Arrow Function Expression: Khai báo hàm dưới dạng mũi tên =>. Ví dụ:
javascript
Copy code
var sum = (a, b) => a + b;
//
Chú ý rằng, cách khai báo function sẽ ảnh hưởng đến phạm vi (scope) của biến trong function. Cụ thể, Function Declaration được định nghĩa tại thời điểm runtime, cho phép truy cập vào các biến toàn cục và cũng có thể được gọi trước khi nó được định nghĩa. Trong khi đó, Function Expression và Arrow Function Expression được định nghĩa tại thời điểm được gán giá trị, không thể truy cập vào các biến toàn cục và phải được định nghĩa trước khi được sử dụng.

Mỗi cách khai báo function đều có ưu điểm và hạn chế riêng, tùy thuộc vào tình huống và mục đích sử dụng mà ta lựa chọn cách phù hợp.