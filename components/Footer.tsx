export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-20">
      <div className="container-beauty py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Terrarium. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-900">Chính sách bảo hành</a>
          <a href="#" className="hover:text-gray-900">Điều khoản</a>
          <a href="#" className="hover:text-gray-900">Liên hệ</a>
        </div>
      </div>
    </footer>
  );
}
