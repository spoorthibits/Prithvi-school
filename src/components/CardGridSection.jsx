"use client";

import Image from "next/image";

export default function CardGridSection({
  badge = "Our Pedagogy",
  description = "",
  items = [],
}) {
  return (
    <section className="bg-[#F7F3EE] pb-20 sm:pb-32 lg:pb-20">
      <div className="container-custom text-center">
        {/* Badge heading */}
        <div
          className="inline-block px-8 py-9 mb-6"
          style={{ backgroundColor: "#ffffff" }}
        >
          <h2
            className="uppercase leading-[100%] tracking-wide"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "#075a36",
            }}
          >
            {badge}
          </h2>
        </div>

        {/* Subtext */}
        {description && (
          <p className="para max-w-3xl mx-auto text-[#4C4C4C] mb-10">
            {description}
          </p>
        )}

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="!bg-white rounded-lg overflow-hidden text-left"
            >
              <div className="relative w-full h-[260px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3
                  className="mb-2"
                  style={{
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: "22px",
                    color: "#075a36",
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-[#4C4C4C] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}