import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F7F5EC] !font-sans !text-[#26382F]">

      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* ================= LOGO ================= */}
          <div>
            <img
              src="/logo1.png"
              alt="Prithvi Global School"
              className="mb-3 h-40 w-auto object-contain"
            />

            <p
              className="
                max-w-[280px]
                !font-sans
                !text-[15px]
                !font-normal
                !leading-7
                !text-[#5B625D]
              "
            >
              Nurturing young minds through meaningful learning, creativity,
              values, and experiences that inspire a brighter future.
            </p>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3
              className="
                mb-6
                !font-serif
                !text-[24px]
                !font-semibold
                !leading-tight
                !text-[#26382F]
              "
            >
              Quick Links
            </h3>

            <ul
              className="
                space-y-3.5
                !font-sans
                !text-[15px]
                !font-normal
                !text-[#5B625D]
              "
            >
              <li>
                <Link href="/" className="!font-sans hover:!text-[#64B0E2]">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="!font-sans hover:!text-[#64B0E2]"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/academics"
                  className="!font-sans hover:!text-[#64B0E2]"
                >
                  Academics
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="!font-sans hover:!text-[#64B0E2]"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="!font-sans hover:!text-[#64B0E2]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h3
              className="
                mb-6
                !font-serif
                !text-[24px]
                !font-semibold
                !leading-tight
                !text-[#26382F]
              "
            >
              Contact Us
            </h3>

            <div
              className="
                space-y-5
                !font-sans
                !text-[15px]
                !font-normal
                !leading-7
                !text-[#5B625D]
              "
            >
              <p className="!font-sans">
                Your School Address,
                <br />
                Hyderabad, Telangana
              </p>

              <p className="!font-sans">
                <span className="!font-sans !font-semibold !text-[#26382F]">
                  Phone:
                </span>

                <br />

                +91 98765 43210
              </p>

              <p className="!font-sans">
                <span className="!font-sans !font-semibold !text-[#26382F]">
                  Email:
                </span>

                <br />

                info@yourschool.com
              </p>
            </div>
          </div>

          {/* ================= ADMISSIONS ================= */}
          <div>
            <h3
              className="
                mb-6
                !font-serif
                !text-[24px]
                !font-semibold
                !leading-tight
                !text-[#26382F]
              "
            >
              Admissions
            </h3>

            <p
              className="
                mb-6
                max-w-[290px]
                !font-sans
                !text-[15px]
                !font-normal
                !leading-7
                !text-[#5B625D]
              "
            >
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
                bg-[#64B0E2]
                px-7
                py-3

                !font-sans
                !text-[14px]
                !font-semibold
                !text-white

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-[#075A36]
              "
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-[#26382F]/10">
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            justify-between
            gap-4
            px-6
            py-5
            text-center

            !font-sans
            !text-[13px]
            !font-normal
            !text-[#6A706C]

            sm:px-8
            md:flex-row
            md:text-left
          "
        >
          <p className="!font-sans !text-[13px] !font-normal">
            © {new Date().getFullYear()} Prithvi Global School. All Rights
            Reserved.
          </p>

          <div className="flex items-center gap-6 !font-sans">
            <Link
              href="/privacy"
              className="!font-sans !text-[13px] hover:!text-[#075A36]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="!font-sans !text-[13px] hover:!text-[#075A36]"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}