# Terrarium Landing Page Layout

## Tổng quan
Trang web là một landing page bán sản phẩm terrarium, sử dụng Next.js, React và Tailwind CSS. Các thành phần chính được tổ chức như sau:

## Cấu trúc layout

- **Header**: Thanh điều hướng cố định trên cùng, chứa logo và các liên kết.
- **Hero Section**: Hình ảnh lớn, giới thiệu sản phẩm nổi bật, slogan hoặc thông điệp chính.
- **Product List**: Danh sách các sản phẩm terrarium, mỗi sản phẩm hiển thị qua `ProductCard` với hình ảnh, tên, mô tả ngắn, giá và nút đặt hàng.
 - **Lợi ích/Ưu điểm**: Các điểm nổi bật của sản phẩm (ví dụ: quà tặng ý nghĩa, cá nhân hoá, miễn phí thiệp tặng, đóng gói chống sốc, hỗ trợ chăm sóc trọn đời).
 - **About Us**: Giới thiệu đội ngũ thành viên qua Carousel tối đa 3 item, mỗi item gồm hình ảnh và mô tả cơ bản. Carousel tự động chuyển mỗi 3 giây.
 - **Review/Đánh giá khách hàng**: Hiển thị các nhận xét thực tế từ khách hàng.
- **Lead Form**: Form đăng ký nhận tư vấn hoặc đặt hàng, gồm các trường thông tin liên hệ.
- **FAQ**: Các câu hỏi thường gặp về sản phẩm và dịch vụ.
- **Footer**: Thông tin liên hệ, mạng xã hội, bản quyền.

## Sơ đồ layout (dạng block)

-------------------------------+
```
-------------------------------+
+-------------------------------+
-------------------------------+
|           Header              |
-------------------------------+
+-------------------------------+
-------------------------------+
|         Hero Section          |
-------------------------------+
+-------------------------------+
-------------------------------+
|        Product List           |
-------------------------------+
+-------------------------------+
-------------------------------+
|      Lợi ích/Ưu điểm          |
-------------------------------+
+-------------------------------+
|   Review khách hàng           |
+-------------------------------+
|         Lead Form             |
+-------------------------------+
|            FAQ                |
+-------------------------------+
|           Footer              |
+-------------------------------+
```

## Ghi chú
 - Các thành phần đều là React component riêng biệt trong thư mục `components/`.
 - Section About Us sử dụng component `AboutUsCarousel`, dữ liệu thành viên có thể tuỳ chỉnh trong file.
- Layout sử dụng Tailwind CSS để căn chỉnh, responsive và tạo hiệu ứng hiện đại.
- Hình ảnh sản phẩm nằm trong thư mục `public/`.

---
Nếu cần chi tiết về từng component hoặc muốn bổ sung sơ đồ UI, hãy yêu cầu thêm.
