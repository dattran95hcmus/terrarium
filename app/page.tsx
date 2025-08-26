import Header from "@/components/Header";
import { models } from "@/data/models";
import AboutUsCarousel from "@/components/AboutUsCarousel";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";

export default function Page() {

  const benefits = [
    { title: "Ít chăm sóc", desc: "Tự cân bằng độ ẩm, chỉ cần tưới 2–4 tuần/lần." },
    { title: "Trang trí sang trọng", desc: "Tạo điểm nhấn xanh cho bàn làm việc & phòng khách." },
    { title: "Quà tặng ý nghĩa", desc: "Lời chúc xanh bền, phù hợp nhiều dịp." },
    { title: "Cá nhân hoá", desc: "Nhận tuỳ chỉnh theo phong cách & ngân sách." },
  ];

  const reviews = [
    { name: "Anh Huy — Q.1", text: "Giao hàng nhanh, mẫu Forest Dome đặt ở bàn cực chill." },
    { name: "Chị Lan — Thủ Đức", text: "Zen Mini nhỏ gọn mà đẹp, hướng dẫn chăm dễ hiểu." },
    { name: "Bạn Minh — Bình Thạnh", text: "Team tư vấn nhiệt tình, đóng gói chắc chắn." },
  ];

  return (
    <>
      <Header />
      {/* HERO */}
      <section className="pt-20 bg-gradient-to-b from-leaf-50 to-white border-b border-gray-100">
        <div className="container-beauty grid md:grid-cols-2 gap-8 items-center py-14">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Terrarium — Nghệ thuật sống trong lọ thuỷ tinh
            </h1>
            <p className="mt-4 text-gray-600">
              Mỗi terrarium là một thế giới thu nhỏ, kết hợp giữa thiên nhiên và sự sáng tạo. Được thiết kế tinh tế, dễ chăm sóc, chúng mang lại cảm giác thư giãn và gần gũi với thiên nhiên, phù hợp để làm điểm nhấn trang trí hay quà tặng cho những người bạn trân quý.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#models" className="btn btn-primary">Xem mẫu</a>
              <a href="#order" className="btn btn-ghost">Đặt hàng nhanh</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2"><span>✓</span> Bảo hành 7 ngày</div>
              <div className="flex items-center gap-2"><span>✓</span> Giao trong TP.HCM</div>
            </div>
          </div>
          <div className="card overflow-hidden">
            <img src="/hero-image.jpeg" alt="Terrarium showcase" className="w-full object-cover" />
          </div>
        </div>
      </section>

      {/* MODELS */}
  <section id="models" className="container-beauty py-16 scroll-mt-32">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-semibold">Các mẫu nổi bật</h2>
          <a href="#order" className="text-leaf-700 font-medium hover:underline">Đặt mẫu theo ý thích →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((m) => (
            <ProductCard key={m.name} {...m} />
          ))}
        </div>
      </section>

      {/* BENEFITS */}
  <section id="benefits" className="container-beauty py-4 scroll-mt-32">
        <div className="grid md:grid-cols-4 gap-4">
          {benefits.map((b) => (
            <div key={b.title} className="card p-6">
              <p className="font-semibold">{b.title}</p>
              <p className="text-gray-600 text-sm mt-1">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT US */}
  <section id="about-us" className="container-beauty py-12 scroll-mt-32">
        {/* Responsive wrapper, center content, giảm margin dưới tối đa cho cả mobile */}
        <div className="mx-auto max-w-2xl mb-2 sm:mb-4">
          <AboutUsCarousel />
        </div>
      </section>

      {/* REVIEWS */}
  <section id="reviews" className="container-beauty py-16 scroll-mt-32">
        <h2 className="text-2xl font-semibold mb-6">Khách hàng nói gì?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="card p-6">
              <p className="text-gray-700">“{r.text}”</p>
              <p className="text-sm text-gray-500 mt-3">— {r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ORDER */}
  <section id="order" className="container-beauty py-16 scroll-mt-32">
        <h2 className="text-2xl font-semibold text-center mb-8">Liên hệ và đặt hàng</h2>
        <div className="flex items-center justify-center gap-6">
          <a 
          href="https://www.facebook.com/profile.php?id=61578016246629&mibextid=wwXIfr&mibextid=wwXIfr"
          target="_blank" rel="noopener noreferrer"
          className="rounded-full bg-blue-600 hover:bg-blue-700 w-12 h-12 flex items-center justify-center shadow-md transition object-contain">
            <img src="facebook.png" alt="Facebook" className="w-12 h-12" />
          </a>
          <a
          href="https://zalo.me/0865145017"
          target="_blank" rel="noopener noreferrer"
           className="rounded-full bg-cyan-500 hover:bg-cyan-600 w-12 h-12 flex items-center justify-center shadow-md transition">
            <img src="zalo.webp" alt="Zalo" className="w-12 h-12" />
          </a>
          <a 
          href="https://www.tiktok.com/@kattarrot1?_t=ZS-8zCGjjAZPpi&_r=1"
          target="_blank" rel="noopener noreferrer"
          className="rounded-full bg-black hover:bg-gray-800 w-12 h-12 flex items-center justify-center shadow-md transition">
            <img src="tiktok.png" alt="Tiktok" className="w-12 h-12" />
          </a>
        </div>
      </section>

      <FAQ />
      <Footer />
    </>
  );
}
