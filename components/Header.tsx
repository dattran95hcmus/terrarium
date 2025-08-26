export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="container-beauty flex items-center justify-between h-16 md:h-32">
        <a href="#" className="flex items-center gap-3">
          <div className="w-12 h-12 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-200">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 md:w-24 md:h-24 object-cover" />
          </div>
          <span className="font-extrabold font-sans text-xl md:text-4xl tracking-tight">3Bros-Terra</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-base md:text-2xl font-semibold font-sans">
          <a href="#models" className="hover:text-leaf-700 transition">Mẫu</a>
          <a href="#benefits" className="hover:text-leaf-700 transition">Lợi ích</a>
          <a href="#about-us" className="hover:text-leaf-700 transition">Về chúng tôi</a>
          <a href="#reviews" className="hover:text-leaf-700 transition">Đánh giá</a>
          <a href="#faq" className="hover:text-leaf-700 transition">FAQ</a>
        </nav>
        <a href="#order" className="btn btn-primary text-base md:text-2xl font-semibold font-sans">Đặt hàng</a>
      </div>
    </header>
  );
}
