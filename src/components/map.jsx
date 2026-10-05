"use client";

import { Landmark, Phone } from "lucide-react";

// ─── Edit details here ────────────────────────────────────────────────────
const SCHOOL = {
  name: "Prithvi Global School",
  addressLines: [
    "Plot No: 64, Mallikarjuna Swamy Temple Rd,",
    "Cheeriyal, Secunderabad, Telangana - 501303",
  ],
  phone: "+91 00000 00000", // <- replace with your number
};

const FULL_ADDRESS =
  "Plot no 64, Mallikarjuna Swamy Temple Rd, near Mallanna temple, colony Chiryala Village, Cheeriyal, Secunderabad, Hyderabad, Telangana 501303";

const EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  FULL_ADDRESS
)}&output=embed`;

export default function MapSection() {
  return (
    <section className="!relative !w-full !bg-[#EEF3F8] lg:!bg-white">
      {/* Map */}
      <div className="!relative !w-full !h-[300px] sm:!h-[380px] lg:!h-[440px]">
        <iframe
          src={EMBED_URL}
          title={`${SCHOOL.name} location`}
          className="!absolute !inset-0 !w-full !h-full !border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Info card
          Mobile/tablet: separate card below the map, on a light background.
          Desktop (lg+): translucent card floating over the map. */}
      <div className="container-custom !relative !py-6 sm:!py-8 lg:!py-0 lg:!absolute lg:!inset-0 lg:!pointer-events-none">
        <div className="!flex !h-full !items-center !justify-center lg:!justify-end">
          <div className="!w-full sm:!max-w-[360px] lg:!max-w-[320px] !bg-white lg:!bg-white/85 !border !border-[#E3E8EE] lg:!border-0 !rounded-md lg:!rounded-lg !shadow-sm lg:!shadow-none !text-center !px-5 !py-8 lg:!py-5 lg:!pointer-events-auto !relative !z-10">
            <Landmark
              size={36}
              strokeWidth={1.8}
              color="#4B5563"
              className="!mx-auto !mb-2"
            />

            <h3
              className="!mb-2"
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: 1.3,
                color: "#374151",
              }}
            >
              {SCHOOL.name}
            </h3>

            <address className="!not-italic !text-[13px] sm:!text-sm !leading-[1.6] !text-[#4B5563]">
              {SCHOOL.addressLines.map((line) => (
                <span key={line} className="!block">
                  {line}
                </span>
              ))}
            </address>

            <a
              href={`tel:${SCHOOL.phone.replace(/[^+\d]/g, "")}`}
              className="!mt-3 !inline-flex !items-center !gap-2 !text-[13px] sm:!text-sm !font-medium !text-[#4B5563] hover:!underline"
            >
              <Phone size={15} color="#4B5563" />
              {SCHOOL.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}