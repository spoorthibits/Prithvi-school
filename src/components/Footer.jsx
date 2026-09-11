import Link from "next/link";
import { Mail } from "lucide-react";

// lucide-react dropped brand/social icons in newer versions, so
// Facebook and Instagram are simple inline SVGs (24x24, stroke-based
// to match lucide's visual style) instead of package imports.
function FacebookIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#003d60] !text-white">
      {/* ================= DESKTOP / TABLET (sm and up) ================= */}
      <div className="hidden sm:block">
        {/* ================= MAIN FOOTER ================= */}
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-4">

            {/* ================= LOGO ================= */}
            <div>
              <img
                src="/logo1.png"
                alt="Prithvi Global School"
                className="mb-2 h-44 w-auto object-contain"
              />

              <p className="max-w-[280px] font-manrope text-[14px] font-normal leading-6 !text-[#B9C9BE]">
                Nurturing young minds through meaningful learning, creativity,
                values, and experiences that inspire a brighter future.
              </p>
            </div>

            {/* ================= QUICK LINKS ================= */}
            <div>
              <h3 className="mb-4 font-montserrat text-[17px] font-semibold leading-[20px] !text-white">
                Quick Links
              </h3>

              <ul className="space-y-2.5 font-manrope text-[14px] font-normal !text-[#B9C9BE]">
                <li>
                  <Link href="/" className="font-manrope transition-colors !text-[#B9C9BE] hover:!text-[#E8962E]">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/about" className="font-manrope transition-colors !text-[#B9C9BE] hover:!text-[#E8962E]">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link href="/academics" className="font-manrope transition-colors !text-[#B9C9BE] hover:!text-[#E8962E]">
                    Academics
                  </Link>
                </li>

                <li>
                  <Link href="/gallery" className="font-manrope transition-colors !text-[#B9C9BE] hover:!text-[#E8962E]">
                    Gallery
                  </Link>
                </li>

                <li>
                  <Link href="/contact" className="font-manrope transition-colors !text-[#B9C9BE] hover:!text-[#E8962E]">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* ================= CONTACT ================= */}
            <div>
              <h3 className="mb-4 font-montserrat text-[17px] font-semibold leading-[20px] !text-white">
                Contact Us
              </h3>

              <div className="space-y-3 font-manrope text-[14px] font-normal leading-6 !text-[#B9C9BE]">
                <p className="font-manrope !text-[#B9C9BE]">
                  Your School Address,
                  <br />
                  Hyderabad, Telangana
                </p>

                <p className="font-manrope !text-[#B9C9BE]">
                  <span className="font-manrope font-bold !text-white">Phone:</span>
                  <br />
                  +91 98765 43210
                </p>

                <p className="font-manrope !text-[#B9C9BE]">
                  <span className="font-manrope font-bold !text-white">Email:</span>
                  <br />
                  info@yourschool.com
                </p>
              </div>
            </div>

            {/* ================= ADMISSIONS ================= */}
            <div>
              <h3 className="mb-4 font-montserrat text-[17px] font-semibold leading-[20px] !text-white">
                Admissions
              </h3>

              <p className="mb-4 max-w-[290px] font-manrope text-[14px] font-normal leading-6 !text-[#B9C9BE]">
                Give your child the opportunity to learn, explore, and grow in a
                nurturing environment.
              </p>

              <Link
                href="/admissions"
                className="inline-flex items-center justify-center rounded-full bg-[#d59238] px-6 py-2.5 font-montserrat text-[13px] font-semibold !text-[#0F3D2E] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 text-center font-montserrat text-[12px] font-normal !text-[#8FA396] sm:px-8 sm:flex-row sm:text-left">
            <p className="font-montserrat !text-[#8FA396]">
              © {new Date().getFullYear()} Prithvi Global School. All Rights
              Reserved.
            </p>

            <div className="flex items-center gap-5 font-montserrat">
              <Link href="/privacy" className="font-montserrat transition-colors !text-[#8FA396] hover:!text-[#E8962E]">
                Privacy Policy
              </Link>

              <Link href="/terms" className="font-montserrat transition-colors !text-[#8FA396] hover:!text-[#E8962E]">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE (below sm) ================= */}
      <div className="block px-6 py-1 text-center sm:hidden">
        {/* Logo */}
        <img
          src="/logo1.png"
          alt="Prithvi Global School"
          className="mx-auto mb-1 h-40 w-auto object-contain"
        />

        {/* Contact info */}
        <div className="!space-y-3 font-manrope !text-[15px] !font-normal !leading-6 !text-[#B9C9BE]">
          <p className="font-manrope !text-[15px] !font-normal !leading-6 !text-[#B9C9BE]">
            <span className="font-manrope !text-[15px] !font-bold !text-white">LOCATION:</span>{" "}
            Your School Address, Hyderabad, Telangana
          </p>

          <p className="font-manrope !text-[15px] !font-normal !leading-6 !text-[#B9C9BE]">
            <span className="font-manrope !text-[15px] !font-bold !text-white">MAIL US:</span>{" "}
            info@yourschool.com
          </p>

          <p className="font-manrope !text-[15px] !font-normal !leading-6 !text-[#B9C9BE]">
            <span className="font-manrope !text-[15px] !font-bold !text-white">CALL US:</span>{" "}
            +91 98765 43210
          </p>
        </div>

        {/* Nav links */}
        <ul className="!mt-8 !space-y-4 font-montserrat !text-[16px] !font-semibold !text-white">
          <li>
            <Link href="/about" className="font-montserrat !text-[16px] !font-semibold transition-colors !text-white hover:!text-[#E8962E]">
              ABOUT US
            </Link>
          </li>

          <li>
            <Link href="/admissions" className="font-montserrat !text-[16px] !font-semibold transition-colors !text-white hover:!text-[#E8962E]">
              ADMISSIONS
            </Link>
          </li>

          <li>
            <Link href="/academics" className="font-montserrat !text-[16px] !font-semibold transition-colors !text-white hover:!text-[#E8962E]">
              ACADEMICS
            </Link>
          </li>

          <li>
            <Link href="/gallery" className="font-montserrat !text-[16px] !font-semibold transition-colors !text-white hover:!text-[#E8962E]">
              EXPLORE
            </Link>
          </li>

          <li>
            <Link href="/contact" className="font-montserrat !text-[16px] !font-semibold transition-colors !text-white hover:!text-[#E8962E]">
              CONTACT US
            </Link>
          </li>
        </ul>

        {/* Social icons */}
        <div className="!mt-8 flex items-center justify-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 transition-colors hover:border-[#E8962E] hover:text-[#E8962E]"
          >
            <FacebookIcon width={18} height={18} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 transition-colors hover:border-[#E8962E] hover:text-[#E8962E]"
          >
            <InstagramIcon width={18} height={18} />
          </a>

          <a
            href="mailto:info@yourschool.com"
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 transition-colors hover:border-[#E8962E] hover:text-[#E8962E]"
          >
            <Mail size={18} strokeWidth={1.75} />
          </a>
        </div>
      </div>

      {/* ================= MOBILE BOTTOM BAR ================= */}
      <div className="block bg-[#d59238] px-6 py-4 text-center sm:hidden">
        <p className="font-montserrat !text-[12px] !font-normal !leading-5 !text-[#0F3D2E]">
          © Copyright {new Date().getFullYear()}, All Rights Reserved -
          Prithvi Global School
        </p>
      </div>
    </footer>
  );
}