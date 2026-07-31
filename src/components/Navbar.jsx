"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

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

/* =========================================================
   DESKTOP NAV LINK
========================================================= */

function DesktopNavLink({ href, label, active }) {
  return (
    <Link
      href={href}
      className={cn(
        `
        relative
        flex
        h-full
        items-center
        text-[14px]
        font-medium
        tracking-[-0.01em]
        transition-colors
        duration-300

        after:absolute
        after:bottom-[25px]
        after:left-0
        after:h-[3px]
        after:bg-[#f7941d]
        after:transition-all
        after:duration-300

        text-[#666666]
        hover:text-[#438e42]
        `,
        active
          ? "after:w-full"
          : "after:w-0 hover:after:w-full"
      )}
    >
      {label}
    </Link>
  );
}

/* =========================================================
   MOBILE NAV LINK
========================================================= */

function MobileNavLink({
  href,
  label,
  active,
  delay,
  onClick,
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={{ transitionDelay: delay }}
      className={cn(
        `
        group
        flex
        items-center
        justify-between
        border-b
        border-black/[0.07]
        py-[18px]
        text-[15px]
        font-medium

        transition-all
        duration-[600ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]
        `,
        delay
          ? "translate-x-0 opacity-100"
          : "-translate-x-6 opacity-0",
        active
          ? "text-[#438e42]"
          : "text-[#666666] hover:text-[#438e42]"
      )}
    >
      <div className="flex items-center gap-3">
        {active && (
          <span className="h-[6px] w-[6px] rounded-full bg-[#f7941d]" />
        )}

        {label}
      </div>

      <ArrowRight
        size={17}
        strokeWidth={1.8}
        className="
          text-[#aaaaaa]
          transition-all
          duration-300
          group-hover:translate-x-1
          group-hover:text-[#438e42]
        "
      />
    </Link>
  );
}

/* =========================================================
   CTA BUTTON
========================================================= */

function CtaButton({
  href,
  label,
  bg,
  hoverBg,
  size = "desktop",
  onClick,
}) {
  const isMobile = size === "mobile";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        `
        rounded-[9px]
        px-3.5
        py-2
        text-[13px]
        font-medium
        tracking-[0.01em]
        text-white
        transition-all
        duration-300
        ease-out
        `,
        bg,

        isMobile
          ? cn(
              `
              flex
              w-full
              items-center
              justify-between
              rounded-[12px]
              px-5
              py-[15px]
              `,
              hoverBg
            )
          : cn(
              `
              hidden
              lg:block
              xl:px-5
              hover:-translate-y-[2px]
              `,
              hoverBg
            )
      )}
    >
      {label}

      {isMobile && <ArrowRight size={17} />}
    </Link>
  );
}

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* NEW — controls navbar visibility */
  const [showNavbar, setShowNavbar] = useState(true);

  const pathname = usePathname();

  /*
   * Using refs prevents the scroll listener from being
   * recreated every time scroll position changes.
   */
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  /* =====================================================
     CLOSE MOBILE MENU ON ROUTE CHANGE
  ===================================================== */

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* =====================================================
     LOCK BODY WHEN MOBILE MENU IS OPEN
  ===================================================== */

  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =====================================================
     CLOSE MENU WITH ESCAPE
  ===================================================== */

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleEscape
      );
  }, []);

  /* =====================================================
     HIDE / SHOW NAVBAR ON SCROLL

     ↓ SCROLL DOWN  = HIDE
     ↑ SCROLL UP    = SHOW
     TOP OF PAGE    = ALWAYS SHOW
  ===================================================== */

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const previousScrollY = lastScrollY.current;

        /*
         * Always show navbar close to
         * the top of the page.
         */
        if (currentScrollY <= 80) {
          setShowNavbar(true);
        }

        /*
         * Scroll DOWN
         */
        else if (
          currentScrollY >
          previousScrollY + 6
        ) {
          setShowNavbar(false);
        }

        /*
         * Scroll UP
         */
        else if (
          currentScrollY <
          previousScrollY - 6
        ) {
          setShowNavbar(true);
        }

        lastScrollY.current =
          Math.max(currentScrollY, 0);

        ticking.current = false;
      });
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <>
      {/* =================================================
          MAIN NAVBAR
      ================================================= */}

      <header
        className={cn(
          `
          sticky
          top-0
          z-50
          w-full

          border-b
          border-black/[0.05]

          bg-[#F5F5F3]/90
          backdrop-blur-md

          font-[family-name:var(--font-manrope)]

          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          will-change-transform
          `,
          showNavbar || menuOpen
            ? "translate-y-0"
            : "-translate-y-full"
        )}
      >
        <div
          className="
            container-custom
            flex
            h-[74px]
            items-center
            justify-between

            sm:h-[68px]
            md:h-[74px]
            lg:h-[86px]
          "
        >
          {/* ================= LOGO ================= */}

          <Link
            href="/"
            className="relative z-10 shrink-0"
            aria-label="Prithvi Global School Home"
          >
            <Image
              src="/logo1.png"
              alt="Prithvi Global School"
              width={210}
              height={75}
              priority
              className="
                h-auto
                w-[135px]

                sm:w-[145px]
                md:w-[155px]
                lg:w-[195px]
                xl:w-[215px]
              "
            />
          </Link>

          {/* ================= DESKTOP NAV ================= */}

          <nav
            className="
              hidden
              h-full
              items-center
              gap-6

              lg:flex
              xl:gap-8
            "
          >
            {NAV_LINKS.slice(0, 3).map(
              (link) => (
                <DesktopNavLink
                  key={link.href}
                  href={link.href}
                  label={link.name}
                  active={isActive(link.href)}
                />
              )
            )}

            {/* ================= LEARNING ================= */}

            <button
              type="button"
              className="
                group
                flex
                h-full
                items-center
                gap-1.5

                text-[14px]
                font-medium
                tracking-[-0.01em]

                text-[#666666]

                transition-colors
                duration-300

                hover:text-[#438e42]
              "
            >
              Learning

              <ChevronDown
                size={15}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-y-[2px]
                "
              />
            </button>

            {NAV_LINKS.slice(3).map(
              (link) => (
                <DesktopNavLink
                  key={link.href}
                  href={link.href}
                  label={link.name}
                  active={isActive(link.href)}
                />
              )
            )}
          </nav>

          {/* ================= RIGHT SIDE ================= */}

          <div className="flex items-center gap-3 xl:gap-4">
            {CTA_LINKS.map((cta) => (
              <CtaButton
                key={cta.href}
                {...cta}
                href={cta.href}
                label={cta.name}
              />
            ))}

            {/* ================= HAMBURGER ================= */}

            <button
              type="button"
              onClick={() => {
                setShowNavbar(true);
                setMenuOpen(true);
              }}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              className="
                flex
                h-[43px]
                w-[43px]
                items-center
                justify-center

                rounded-full

                bg-[#438e42]
                text-white

                transition-all
                duration-300

                hover:scale-[1.04]
                hover:bg-[#367a38]

                active:scale-95

                lg:hidden
              "
            >
              <Menu
                size={21}
                strokeWidth={2}
              />
            </button>
          </div>
        </div>
      </header>

      {/* =================================================
          MOBILE BACKDROP
      ================================================= */}

      <div
        onClick={() => setMenuOpen(false)}
        className={cn(
          `
          fixed
          inset-0
          z-[90]

          bg-black/35
          backdrop-blur-[3px]

          transition-all
          duration-[600ms]

          ease-[cubic-bezier(0.22,1,0.36,1)]

          lg:hidden
          `,
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        )}
      />

      {/* =================================================
          MOBILE DRAWER
      ================================================= */}

      <aside
        className={cn(
          `
          fixed
          left-0
          top-0
          z-[100]

          flex
          h-[100dvh]
          w-[88%]
          max-w-[390px]
          flex-col

          overflow-y-auto

          bg-[#fffdf8]

          shadow-[20px_0_60px_rgba(0,0,0,0.14)]

          transition-transform
          duration-[750ms]

          ease-[cubic-bezier(0.22,1,0.36,1)]

          lg:hidden
          `,
          menuOpen
            ? "translate-x-0"
            : "-translate-x-full"
        )}
      >
        {/* ================= DRAWER HEADER ================= */}

        <div
          className="
            flex
            items-center
            justify-between

            border-b
            border-black/[0.06]

            px-6
            py-5
          "
        >
          <Link
            href="/"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            <Image
              src="/logo.png"
              alt="Prithvi Global School"
              width={180}
              height={65}
              className="h-auto w-[145px]"
            />
          </Link>

          <button
            type="button"
            onClick={() =>
              setMenuOpen(false)
            }
            aria-label="Close navigation menu"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-full

              bg-[#F2F2F2]
              text-[#333333]

              transition-all
              duration-500

              hover:rotate-90
              hover:bg-[#438e42]
              hover:text-white
            "
          >
            <X size={19} />
          </button>
        </div>

        {/* ================= DRAWER INTRO ================= */}

        <div className="px-6 pb-4 pt-8">
          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#438e42]
            "
          >
            Welcome to
          </p>

          <h2
            className="
              mt-3
              text-[23px]
              font-semibold
              leading-[1.3]
              text-[#333333]
            "
          >
            Prithvi Global School
          </h2>

          <p
            className="
              mt-2
              max-w-[280px]
              text-[13px]
              leading-[1.7]
              text-[#888888]
            "
          >
            Rooted in learning. Ready for
            the world.
          </p>
        </div>

        {/* ================= DRAWER LINKS ================= */}

        <nav className="mt-2 flex flex-col px-6">
          {NAV_LINKS.map(
            (link, index) => (
              <MobileNavLink
                key={link.href}
                href={link.href}
                label={link.name}
                active={isActive(
                  link.href
                )}
                delay={
                  menuOpen
                    ? `${
                        120 +
                        index * 65
                      }ms`
                    : "0ms"
                }
                onClick={() =>
                  setMenuOpen(false)
                }
              />
            )
          )}

          {/* ================= MOBILE LEARNING ================= */}

          <button
            type="button"
            style={{
              transitionDelay:
                menuOpen
                  ? "450ms"
                  : "0ms",
            }}
            className={cn(
              `
              group
              flex
              items-center
              justify-between

              border-b
              border-black/[0.07]

              py-[18px]

              text-left
              text-[15px]
              font-medium
              text-[#666666]

              transition-all
              duration-[600ms]

              hover:text-[#438e42]
              `,
              menuOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-6 opacity-0"
            )}
          >
            Learning

            <ChevronDown
              size={17}
              className="
                text-[#aaaaaa]
                transition-transform
                duration-300
                group-hover:translate-y-1
              "
            />
          </button>
        </nav>

        {/* ================= MOBILE CTA ================= */}

        <div
          className={cn(
            `
            px-6
            pt-7

            transition-all
            duration-700

            ease-[cubic-bezier(0.22,1,0.36,1)]
            `,
            menuOpen
              ? "translate-y-0 opacity-100 delay-500"
              : "translate-y-5 opacity-0"
          )}
        >
          {CTA_LINKS.map(
            (cta, index) => (
              <div
                key={cta.href}
                className={
                  index > 0
                    ? "mt-3"
                    : ""
                }
              >
                <CtaButton
                  {...cta}
                  href={cta.href}
                  label={cta.name}
                  size="mobile"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                />
              </div>
            )
          )}
        </div>

        {/* ================= DRAWER BOTTOM ================= */}

        <div className="mt-auto px-6 pb-7 pt-10">
          <div
            className="
              border-t
              border-black/[0.07]
              pt-5
            "
          >
            {/* BRAND COLORS */}

            <div className="mb-4 flex gap-2">
              <span className="h-[5px] w-10 rounded-full bg-[#438e42]" />

              <span className="h-[5px] w-6 rounded-full bg-[#f7941d]" />

              <span className="h-[5px] w-6 rounded-full bg-[#64b0e2]" />
            </div>

            <p
              className="
                max-w-[280px]
                text-[11px]
                leading-[1.7]
                text-[#999999]
              "
            >
              Shaping confident,
              knowledgeable and responsible
              learners prepared for a global
              future.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}