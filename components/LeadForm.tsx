'use client';

import { useState } from "react";

export default function LeadForm() {
  const [status, setStatus] = useState<null | 'ok' | 'error'>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      // Demo handler: send to a placeholder webhook if set, else fallback to mailto
      const endpoint = process.env.NEXT_PUBLIC_LEAD_WEBHOOK;
      if (endpoint) {
        await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
        setStatus('ok');
        form.reset();
      } else {
        window.location.href = `mailto:hello@example.com?subject=Đặt hàng Terrarium&body=${encodeURIComponent(JSON.stringify(data, null, 2))}`;
      }
    } catch (e) {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="card p-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Họ tên</label>
          <input name="name" required className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-leaf-300" placeholder="Nguyễn Văn A" />
        </div>
        <div>
          <label className="text-sm font-medium">Số điện thoại</label>
          <input name="phone" required className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-leaf-300" placeholder="09xx xxx xxx" />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-medium">Mẫu muốn đặt</label>
          <select name="model" className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-leaf-300">
            <option>Forest Dome</option>
            <option>Zen Mini</option>
            <option>Desert Globe</option>
            <option>Moss Valley</option>
            <option>Rainforest Pill</option>
            <option>Ocean Cliff</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-medium">Ghi chú</label>
          <textarea name="note" rows={3} className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-leaf-300" placeholder="Ví dụ: giao trong tuần này, kèm thiệp..."/>
        </div>
      </div>
      <button type="submit" className="btn btn-primary w-full mt-4">Gửi yêu cầu</button>
      {status === 'ok' && <p className="text-green-600 text-sm mt-2">Đã gửi! Chúng tôi sẽ liên hệ sớm.</p>}
      {status === 'error' && <p className="text-red-600 text-sm mt-2">Gửi thất bại, thử lại giúp em nhé.</p>}
    </form>
  );
}
