export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="container-beauty flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 2L3 7v10l9 5 9-5V7l-9-5Z" stroke="#3aa656" strokeWidth="1.5"/>
            <circle cx="12" cy="12" r="3" stroke="#3aa656" strokeWidth="1.5"/>
          </svg>
          <span className="font-semibold text-lg">Terrarium</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#models" className="hover:text-leaf-700">Mẫu</a>
          <a href="#benefits" className="hover:text-leaf-700">Lợi ích</a>
          <a href="#reviews" className="hover:text-leaf-700">Đánh giá</a>
          <a href="#faq" className="hover:text-leaf-700">FAQ</a>
        </nav>
        <a href="#order" className="btn btn-primary text-sm">Đặt hàng</a>
      </div>
    </header>
  );
}
