const faqs = [
  { q: "Terrarium là gì?", a: "Là hệ sinh thái thu nhỏ trong lọ thủy tinh, yêu cầu chăm sóc rất ít, phù hợp để bàn làm việc hoặc làm quà." },
  { q: "Bao lâu cần tưới?", a: "Mỗi 2–4 tuần nhỏ vài giọt tuỳ môi trường. Kèm hướng dẫn chi tiết khi mua." },
  { q: "Bảo hành thế nào?", a: "Đổi mới trong 7 ngày nếu cây lỗi do vận chuyển. Hỗ trợ chăm sóc trọn đời qua chat." },
  { q: "Có nhận tuỳ chỉnh theo yêu cầu?", a: "Có. Bạn mô tả kích thước, phong cách và ngân sách, chúng tôi tư vấn mẫu phù hợp." },
];

export default function FAQ() {
  return (
    <section id="faq" className="container-beauty py-16">
      <h2 className="text-2xl font-semibold mb-6">Câu hỏi thường gặp</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map((f, i) => (
          <div key={i} className="card p-6">
            <p className="font-medium">{f.q}</p>
            <p className="text-gray-600 mt-2 text-sm">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
