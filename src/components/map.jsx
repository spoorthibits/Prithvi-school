
"use client";

import { Landmark, Phone, Mail } from "lucide-react";

// ─── Edit details here ────────────────────────────────────────────────────
const SCHOOL = {
  name: "Prithvi Global School",
  addressLines: [
    "Bandlaguda, Nagaram,",
    "Cheeriyal, Secunderabad, Telangana - 501303",
  ],
  phone: "9666660263",
  email: "prithviglobalschool@gmail.com",
};

const MAP_URL =
  "https://www.google.com/maps/place/Prithvi+Global+School/@17.5053123,78.6241248,208m/data=!3m1!1e3!4m6!3m5!1s0x3bcb9dd4cca7df03:0x493fd8ebfe336702!8m2!3d17.5051415!4d78.6240263!16s%2Fg%2F11ntsp845n?entry=ttu";

const EMBED_URL =
  "https://maps.google.com/maps?q=17.5051415,78.6240263&z=16&output=embed";

export default function MapSection() {
  return (
    <section className="!relative !w-full !bg-[#EEF3F8] lg:!bg-white">
      {/* Map */}
      <div className="!relative !w-full !h-[300px] sm:!h-[380px] lg:!h-[440px]">
        <a
          href={MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Prithvi Global School in Google Maps"
          className="!absolute !inset-0 !block !w-full !h-full"
        >
          <iframe
            src={EMBED_URL}
            title={`${SCHOOL.name} location`}
            className="!absolute !inset-0 !w-full !h-full !border-0 !pointer-events-none"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            tabIndex={-1}
          />
        </a>
      </div>

      {/* Info card
          Mobile/tablet: separate card below the map, on a light background.
          Desktop (lg+): translucent card floating over the map. */}
      <div className="container-custom !relative !py-6 sm:!py-9 lg:!py-0 lg:!absolute lg:!inset-0 lg:!pointer-events-none hidden sm:block">
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
            <a
              href={`mailto:${SCHOOL.email}`}
              className="!mt-2 !inline-flex !items-center !gap-2 !text-[13px] sm:!text-sm !font-medium !text-[#4B5563] hover:!underline"
            >
              <Mail size={15} color="#4B5563" />
              {SCHOOL.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
