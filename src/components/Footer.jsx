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
    <footer className="bg-[#196191] !text-white">
      {/* ================= DESKTOP / TABLET (sm and up) ================= */}
      <div className="hidden sm:block">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10 lg:py-10">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">

            {/* ================= LOGO ================= */}
            <div className="shrink-0">
              <img
                src="/logo1.png"
                alt="Prithvi Global School"
                className="h-44 w-auto object-contain"
              />
            </div>

            {/* ================= CONTACT INFO ================= */}
            <div className="max-w-[560px] text-center lg:text-left">
              <h3 className="font-montserrat text-[18px] font-bold uppercase tracking-wider !text-white">
                Contact
              </h3>
              <span className="mx-auto mt-3 block h-[3px] w-12 rounded bg-[#E8962E] lg:mx-0" />

              <div className="mt-6 space-y-5 font-manrope text-[17px] font-normal leading-8 !text-[#B9C9BE]">
                <p className="font-manrope !text-[#B9C9BE]">
                  <span className="font-manrope font-bold !text-white">LOCATION :</span>{" "}
                  Plot no 64, Mallikarjuna Swamy Temple Rd, Cheeriyal, Secunderabad, Telangana 501303
                </p>

                <p className="font-manrope !text-[#B9C9BE]">
                  <span className="font-manrope font-bold !text-white">MAIL US :</span>{" "}
                  <a
                    href="mailto:info@yourschool.com"
                    className="!text-[#B9C9BE] transition-colors hover:!text-[#E8962E]"
                  >
                    info@yourschool.com
                  </a>
                </p>

                <p className="font-manrope !text-[#B9C9BE]">
                  <span className="font-manrope font-bold !text-white">CALL US :</span>{" "}
                  <a
                    href="tel:+919553566056"
                    className="!text-[#B9C9BE] transition-colors hover:!text-[#E8962E]"
                  >
                    +91 95535 66056
                  </a>
                </p>
              </div>
            </div>

            {/* ================= LINKS + SOCIAL ================= */}
            <div className="flex shrink-0 items-start gap-10">
              <div>
                <h3 className="font-montserrat text-[18px] font-bold uppercase tracking-wider !text-white">
                  Quick Links
                </h3>
                <span className="mt-3 block h-[3px] w-12 rounded bg-[#E8962E]" />

                <ul className="mt-6 space-y-[18px] font-manrope text-[14px] font-medium uppercase !text-white">
                  <li>
                    <Link href="/about" className="font-manrope transition-colors !text-white hover:!text-[#E8962E]">
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link href="/admissions" className="font-manrope transition-colors !text-white hover:!text-[#E8962E]">
                      Admissions
                    </Link>
                  </li>

                  <li>
                    <Link href="/academics" className="font-manrope transition-colors !text-white hover:!text-[#E8962E]">
                      Academics
                    </Link>
                  </li>

                  <li>
                    <Link href="/gallery" className="font-manrope transition-colors !text-white hover:!text-[#E8962E]">
                      Explore
                    </Link>
                  </li>

                  <li>
                    <Link href="/contact" className="font-manrope transition-colors !text-white hover:!text-[#E8962E]">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* pt-16 pushes the icons down so they line up with the links, not the heading */}
              <div className="flex flex-col gap-4 pt-16">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-white/60 transition-colors hover:border-[#E8962E] hover:text-[#E8962E]"
                >
                  <FacebookIcon width={22} height={22} />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-white/60 transition-colors hover:border-[#E8962E] hover:text-[#E8962E]"
                >
                  <InstagramIcon width={22} height={22} />
                </a>

                <a
                  href="mailto:info@yourschool.com"
                  aria-label="Email"
                  className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-white/60 transition-colors hover:border-[#E8962E] hover:text-[#E8962E]"
                >
                  <Mail size={22} strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE (below sm) ================= */}
      <div className="block px-6 py-3 text-center sm:hidden">
        {/* Logo */}
        <img
          src="/logo1.png"
          alt="Prithvi Global School"
          className="mx-auto mb-5 h-40 w-auto object-contain"
        />

        {/* Contact info */}
        <div className="!space-y-4 font-manrope !text-[15px] !font-normal !leading-6 !text-[#B9C9BE]">
          <p className="font-manrope !text-[15px] !font-normal !leading-6 !text-[#B9C9BE]">
            <span className="font-manrope !text-[15px] !font-bold !text-white">LOCATION :</span>{" "}
            Plot no 64, Mallikarjuna Swamy Temple Rd, Cheeriyal, Secunderabad, Telangana 501303
          </p>

          <p className="font-manrope !text-[15px] !font-normal !leading-6 !text-[#B9C9BE]">
            <span className="font-manrope !text-[15px] !font-bold !text-white">MAIL US :</span>
            <br />
            <a href="mailto:info@yourschool.com" className="!text-[#B9C9BE]">
              info@yourschool.com
            </a>
          </p>

          <p className="font-manrope !text-[15px] !font-normal !leading-6 !text-[#B9C9BE]">
            <span className="font-manrope !text-[15px] !font-bold !text-white">CALL US :</span>{" "}
            <a href="tel:+919553566056" className="!text-[#B9C9BE]">
              +91 95535 66056
            </a>
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

      {/* ================= COPYRIGHT BAR (all screen sizes) ================= */}
      <div className="bg-[#d59238] px-6 py-2 text-center">
        <p className="font-montserrat text-[12px] font-normal leading-5 sm:text-[14px] !text-[#0F3D2E]">
          © Copyright {new Date().getFullYear()}, All Rights Reserved -
          Prithvi Global School
        </p>
      </div>
    </footer>
  );
}