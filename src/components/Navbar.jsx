"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "Contact", href: "/contact" },
];

const CTA_LINKS = [
  {
    name: "Admissions",
    href: "/admissions",
    bg: "bg-[#f7941d]",
    hoverBg: "hover:bg-[#e88612]",
  },
  {
    name: "Enquire Now",
    href: "/contact",
    bg: "bg-[#64b0e2]",
    hoverBg: "hover:bg-[#438e42]",
  },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/* ================= DESKTOP NAV LINK ================= */

function DesktopNavLink({ href, label, active }) {
  return (
    <Link
      href={href}
      className={cn(
        "relative flex h-full items-center text-[14px] font-medium tracking-[-0.01em] transition-colors duration-300 text-[#666666] hover:text-[#438e42] after:absolute after:bottom-[25px] after:left-0 after:h-[3px] after:bg-[#438e42] after:transition-all after:duration-300",
        active ? "text-[#438e42] after:w-full" : "after:w-0 hover:after:w-full"
      )}
    >
      {label}
    </Link>
  );
}

/* ================= MOBILE NAV LINK ================= */

function MobileNavLink({ href, label, active, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex items-center justify-between border-b border-black/[0.07] py-[16px] text-[15px] font-medium transition-colors duration-300",
        active ? "text-[#438e42]" : "text-[#666666] hover:text-[#438e42]"
      )}
    >
      <div className="flex items-center gap-3">
        {active && <span className="h-[6px] w-[6px] rounded-full bg-[#f7941d]" />}
        {label}
      </div>
      <ArrowRight size={17} strokeWidth={1.8} className="text-[#aaaaaa]" />
    </Link>
  );
}

/* ================= CTA BUTTON ================= */

function CtaButton({ href, label, bg, hoverBg, size = "desktop", onClick }) {
  const isMobile = size === "mobile";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "rounded-[9px] px-3.5 py-2 text-[13px] font-medium tracking-[0.01em] text-white transition-all duration-300 ease-out",
        bg,
        isMobile
          ? cn("flex w-full items-center justify-between rounded-[12px] px-5 py-[15px]", hoverBg)
          : cn("hidden lg:block xl:px-5 hover:-translate-y-[2px]", hoverBg)
      )}
    >
      {label}
      {isMobile && <ArrowRight size={17} />}
    </Link>
  );
}

/* ================= NAVBAR ================= */

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {/* ================= MAIN NAVBAR ================= */}

      <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] font-[family-name:var(--font-manrope)]">
        <div className="container-custom flex h-[74px] items-center justify-between sm:h-[68px] md:h-[74px] lg:h-[86px]">

          {/* LOGO */}
          <Link href="/" className="relative z-10 shrink-0" aria-label="Prithvi Global School Home">
            <Image
              src="/logo3.png"
              alt="Prithvi Global School"
              width={210}
              height={75}
              priority
              className="h-auto w-[135px] sm:w-[145px] md:w-[155px] lg:w-[195px] xl:w-[215px]"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden h-full items-center gap-6 lg:flex xl:gap-8">
            {NAV_LINKS.slice(0, 3).map((link) => (
              <DesktopNavLink
                key={link.href}
                href={link.href}
                label={link.name}
                active={isActive(link.href)}
              />
            ))}

            {/* <button
              type="button"
              className="group flex h-full items-center gap-1.5 text-[14px] font-medium tracking-[-0.01em] text-[#666666] transition-colors duration-300 hover:text-[#438e42]"
            >
              Learning
              <ChevronDown
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-y-[2px]"
              />
            </button> */}

            {NAV_LINKS.slice(3).map((link) => (
              <DesktopNavLink
                key={link.href}
                href={link.href}
                label={link.name}
                active={isActive(link.href)}
              />
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 xl:gap-4">
            {CTA_LINKS.map((cta) => (
              <CtaButton key={cta.href} {...cta} href={cta.href} label={cta.name} />
            ))}

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              className="flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[#438e42] text-white transition-all duration-300 hover:scale-[1.04] hover:bg-[#367a38] active:scale-95 lg:hidden"
            >
              <Menu size={21} strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer so fixed header doesn't overlap page content */}
      <div className="h-[74px] sm:h-[68px] md:h-[74px] lg:h-[86px]" />

      {/* ================= MOBILE BACKDROP ================= */}

      <div
        onClick={() => setMenuOpen(false)}
        className={cn(
          "fixed inset-0 z-[90] bg-black/35 backdrop-blur-[3px] transition-opacity duration-300 lg:hidden",
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      />

      {/* ================= MOBILE DRAWER ================= */}

      <aside
        className={cn(
          "fixed left-0 top-0 z-[100] flex h-[100dvh] w-[88%] max-w-[390px] flex-col overflow-y-auto bg-[#fffdf8] shadow-[20px_0_60px_rgba(0,0,0,0.14)] transition-transform duration-500 ease-out lg:hidden",
          menuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-black/[0.06] px-6 py-5">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/logo1.png"
              alt="Prithvi Global School"
              width={180}
              height={65}
              className="h-auto w-[145px]"
            />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F2F2] text-[#333333] transition-all duration-300 hover:bg-[#438e42] hover:text-white"
          >
            <X size={19} />
          </button>
        </div>

        <nav className="mt-2 flex flex-col px-6">
          {NAV_LINKS.map((link) => (
            <MobileNavLink
              key={link.href}
              href={link.href}
              label={link.name}
              active={isActive(link.href)}
              onClick={() => setMenuOpen(false)}
            />
          ))}

          <button
            type="button"
            className="group flex items-center justify-between border-b border-black/[0.07] py-[16px] text-left text-[15px] font-medium text-[#666666] transition-colors duration-300 hover:text-[#438e42]"
          >
            Learning
            <ChevronDown size={17} className="text-[#aaaaaa]" />
          </button>
        </nav>

        <div className="px-6 pt-7">
          {CTA_LINKS.map((cta, index) => (
            <div key={cta.href} className={index > 0 ? "mt-3" : ""}>
              <CtaButton
                {...cta}
                href={cta.href}
                label={cta.name}
                size="mobile"
                onClick={() => setMenuOpen(false)}
              />
            </div>
          ))}
        </div>

        <div className="mt-auto px-6 pb-7 pt-10">
          <div className="border-t border-black/[0.07] pt-5">
            <div className="mb-4 flex gap-2">
              <span className="h-[5px] w-10 rounded-full bg-[#438e42]" />
              <span className="h-[5px] w-6 rounded-full bg-[#f7941d]" />
              <span className="h-[5px] w-6 rounded-full bg-[#64b0e2]" />
            </div>
            <p className="max-w-[280px] text-[11px] leading-[1.7] text-[#999999]">
              Shaping confident, knowledgeable and responsible learners prepared for a global future.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}