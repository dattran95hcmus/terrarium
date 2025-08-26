'use client';
import React, { useEffect, useRef, useState } from "react";

const members = [
  {
    name: "Nguyễn Văn A",
    image: "/forest-dome.jpg",
    desc: "Founder & Designer. Đam mê thiên nhiên và sáng tạo không gian xanh."
  },
  {
    name: "Trần Thị B",
    image: "/zen-mini.jpeg",
    desc: "Chuyên gia chăm sóc cây. Luôn tận tâm với từng sản phẩm."
  },
  {
    name: "Lê Văn C",
    image: "/ocean-cliff.jpeg",
    desc: "Marketing & CSKH. Mang sản phẩm đến gần hơn với khách hàng."
  }
];

export default function AboutUsCarousel() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Infinite loop: clone first and last slide for seamless transition
  const extendedMembers = [members[members.length - 1], ...members, members[0]];
  const [transitioning, setTransitioning] = useState(false);
  const [index, setIndex] = useState(1); // start at first real member

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTransitioning(true);
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Handle seamless loop
  useEffect(() => {
    if (!transitioning) return;
    if (index === extendedMembers.length - 1) {
      setTimeout(() => {
        setTransitioning(false);
        setIndex(1);
      }, 700); // match duration-700
    } else if (index === 0) {
      setTimeout(() => {
        setTransitioning(false);
        setIndex(extendedMembers.length - 2);
      }, 700);
    } else {
      setTimeout(() => setTransitioning(false), 700);
    }
  }, [index, transitioning, extendedMembers.length]);

  const handleDotClick = (i: number) => {
    setTransitioning(true);
    setIndex(i + 1);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container-beauty mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6 text-green-700">Về chúng tôi</h2>
        <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
          <div
            className={`flex ${transitioning ? "transition-transform duration-700" : ""}`}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {extendedMembers.map((m, idx) => (
              <div
                key={idx + m.name}
                className="w-full flex-shrink-0 flex flex-col items-center px-4"
                style={{ minWidth: "100%" }}
              >
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-green-200 shadow-lg"
                />
                <p className="font-semibold text-lg mb-2">{m.name}</p>
                <p className="text-gray-600">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {members.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${index === idx + 1 ? "bg-green-600" : "bg-gray-300"}`}
                onClick={() => handleDotClick(idx)}
                aria-label={`Chuyển đến thành viên ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
