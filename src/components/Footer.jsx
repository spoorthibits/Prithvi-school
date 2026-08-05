import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F3D2E] !font-sans !text-white">

      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* ================= LOGO ================= */}
          <div>
            <img
              src="/logo1.png"
              alt="Prithvi Global School"
              className="mb-2 h-24 w-auto object-contain"
            />

            <p className="max-w-[280px] !font-sans text-[14px] font-normal leading-6 !text-[#B9C9BE]">
              Nurturing young minds through meaningful learning, creativity,
              values, and experiences that inspire a brighter future.
            </p>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="mb-4 !font-sans text-[17px] font-semibold leading-tight !text-white">
              Quick Links
            </h3>

            <ul className="space-y-2.5 !font-sans text-[14px] font-normal !text-[#B9C9BE]">
              <li>
                <Link href="/" className="!font-sans transition-colors !text-[#B9C9BE] hover:!text-[#E8962E]">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="!font-sans transition-colors !text-[#B9C9BE] hover:!text-[#E8962E]">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/academics" className="!font-sans transition-colors !text-[#B9C9BE] hover:!text-[#E8962E]">
                  Academics
                </Link>
              </li>

              <li>
                <Link href="/gallery" className="!font-sans transition-colors !text-[#B9C9BE] hover:!text-[#E8962E]">
                  Gallery
                </Link>
              </li>

              <li>
                <Link href="/contact" className="!font-sans transition-colors !text-[#B9C9BE] hover:!text-[#E8962E]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h3 className="mb-4 !font-sans text-[17px] font-semibold leading-tight !text-white">
              Contact Us
            </h3>

            <div className="space-y-3 !font-sans text-[14px] font-normal leading-6 !text-[#B9C9BE]">
              <p className="!font-sans !text-[#B9C9BE]">
                Your School Address,
                <br />
                Hyderabad, Telangana
              </p>

              <p className="!font-sans !text-[#B9C9BE]">
                <span className="!font-sans font-semibold !text-white">Phone:</span>
                <br />
                +91 98765 43210
              </p>

              <p className="!font-sans !text-[#B9C9BE]">
                <span className="!font-sans font-semibold !text-white">Email:</span>
                <br />
                info@yourschool.com
              </p>
            </div>
          </div>

          {/* ================= ADMISSIONS ================= */}
          <div>
            <h3 className="mb-4 !font-sans text-[17px] font-semibold leading-tight !text-white">
              Admissions
            </h3>

            <p className="mb-4 max-w-[290px] !font-sans text-[14px] font-normal leading-6 !text-[#B9C9BE]">
              Give your child the opportunity to learn, explore, and grow in a
              nurturing environment.
            </p>

            <Link
              href="/admissions"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-[#E8962E]
                px-6
                py-2.5
                !font-sans
                text-[13px]
                font-semibold
                !text-[#0F3D2E]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-white
              "
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-white/10">
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            justify-between
            gap-3
            px-6
            py-4
            text-center

            !font-sans
            text-[12px]
            font-normal
            !text-[#8FA396]

            sm:px-8
            md:flex-row
            md:text-left
          "
        >
          <p className="!font-sans !text-[#8FA396]">
            © {new Date().getFullYear()} Prithvi Global School. All Rights
            Reserved.
          </p>

          <div className="flex items-center gap-5 !font-sans">
            <Link href="/privacy" className="!font-sans transition-colors !text-[#8FA396] hover:!text-[#E8962E]">
              Privacy Policy
            </Link>

            <Link href="/terms" className="!font-sans transition-colors !text-[#8FA396] hover:!text-[#E8962E]">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}