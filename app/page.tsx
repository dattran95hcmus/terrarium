import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";

export default function Page() {
  const models = [
    { name: "Forest Dome", price: "549k", desc: "Vòm thuỷ tinh tái tạo rừng mưa thu nhỏ.", image: "/forest-dome.jpg", tag: "Bán chạy" },
    { name: "Zen Mini", price: "329k", desc: "Kích thước mini, phù hợp bàn làm việc.", image: "/zen-mini.jpeg", tag: "Mới" },
    { name: "Desert Globe", price: "489k", desc: "Tiểu cảnh xương rồng phong cách sa mạc.", image: "/desert-globe.jpg" },
    { name: "Moss Valley", price: "399k", desc: "Thung lũng rêu xanh giữ ẩm tốt.", image: "/moss-valley.jpg" },
    { name: "Rainforest Pill", price: "569k", desc: "Ống thuỷ tinh đứng với cây nhiệt đới.", image: "/rainforest-pill.jpeg" },
    { name: "Ocean Cliff", price: "599k", desc: "Bờ đá đại dương với sỏi xanh lam.", image: "/ocean-cliff.jpeg" },
  ];

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
      <section id="models" className="container-beauty py-16">
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
      <section id="benefits" className="container-beauty py-4">
        <div className="grid md:grid-cols-4 gap-4">
          {benefits.map((b) => (
            <div key={b.title} className="card p-6">
              <p className="font-semibold">{b.title}</p>
              <p className="text-gray-600 text-sm mt-1">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="container-beauty py-16">
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
      <section id="order" className="container-beauty py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-semibold">Đặt hàng nhanh</h2>
            <p className="text-gray-600 mt-2">
              Điền thông tin để nhận tư vấn & xác nhận đơn trong 15 phút làm việc.
            </p>
            <ul className="mt-4 text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Miễn phí thiệp tặng</li>
              <li>Đóng gói chống sốc</li>
              <li>Hỗ trợ chăm sóc trọn đời</li>
            </ul>
          </div>
          <LeadForm />
        </div>
      </section>

      <FAQ />
      <Footer />
    </>
  );
}
