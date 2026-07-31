const LEAF_DOT_COLORS = [
  "#075A36",
  "#438E42",
  "#8BC53F",
  "#64B0E2",
];

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-[#f1f6eb]">

      {/* =====================================================
          LARGE DECORATIVE CIRCLES — RIGHT
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          -right-[170px]
          top-1/2
          hidden
          h-[600px]
          w-[600px]
          -translate-y-1/2
          rounded-full
          border
          border-[#438E42]/10
          lg:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[30px]
          top-1/2
          hidden
          h-[420px]
          w-[420px]
          -translate-y-1/2
          rounded-full
          border
          border-[#438E42]/10
          lg:block
        "
      />

      {/* =====================================================
          FAINT GROW TEXT
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          right-[2%]
          top-1/2
          hidden
          -translate-y-1/2
          select-none
          text-[110px]
          font-semibold
          uppercase
          tracking-[-0.06em]
          text-[#438E42]/[0.035]
          xl:block
        "
      >
        GROW
      </div>

      {/* =====================================================
          TOP LEFT DECORATIVE CIRCLES
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          -top-[45px]
          left-[4%]
          hidden
          h-[85px]
          w-[85px]
          rounded-full
          bg-[#438E42]/[0.045]
          lg:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -top-[40px]
          left-[9%]
          hidden
          h-[75px]
          w-[75px]
          rounded-full
          bg-[#438E42]/[0.04]
          lg:block
        "
      />

      {/* =====================================================
          SMALL DECORATIVE LEAF — RIGHT TOP
      ====================================================== */}
      <svg
        viewBox="0 0 70 50"
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[13%]
          hidden
          h-[45px]
          w-[65px]
          rotate-[-18deg]
          lg:block
        "
      >
        <path
          d="
            M5 38
            C15 10 40 3 63 5
            C52 30 31 42 5 38Z
          "
          fill="#438E42"
          opacity="0.17"
        />

        <path
          d="M8 36 C27 27 42 17 59 7"
          stroke="#438E42"
          strokeWidth="1.5"
          opacity="0.22"
          fill="none"
        />
      </svg>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}
      <div
        className="
          container-custom
          relative
          z-10
          py-8
          sm:py-9
          lg:py-10
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-8

            lg:grid-cols-[110px_1fr]
            lg:gap-10

            xl:grid-cols-[120px_1fr]
            xl:gap-12
          "
        >

          {/* =================================================
              LEFT VERTICAL PHILOSOPHY
          ================================================== */}
          <div
            className="
              hidden
              flex-col
              items-center
              pt-3
              lg:flex
            "
          >
            <p
              className="
                rotate-180
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.35em]
                text-[#438E42]
                [writing-mode:vertical-rl]
              "
            >
              The Prithvi Philosophy
            </p>

            {/* VERTICAL LINE */}
            <div
              className="
                my-4
                h-[60px]
                w-[1px]
                bg-[#438E42]/25
              "
            />

            {/* LEAF ICON */}
            <svg
              width="38"
              height="46"
              viewBox="0 0 42 52"
              fill="none"
            >
              <path
                d="
                  M37 4
                  C19 7 7 18 5 34
                  C4 39 4 44 5 48
                  C15 44 24 38 29 31
                  C34 24 37 15 37 4Z
                "
                fill="#438E42"
              />

              <path
                d="M7 44 C15 33 23 23 34 10"
                stroke="#F1F6EB"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* =================================================
              MAIN CONTENT
          ================================================== */}
          <div className="relative">

            {/* TOP LABEL */}
            <p
              className="
                mb-4
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-[#438E42]

                sm:text-[11px]

                lg:mb-5
              "
            >
              Learning Rooted in Experience
            </p>

            {/* =================================================
                MAIN QUOTE
            ================================================== */}
            <h2
              className="
                relative
                max-w-[1100px]

                font-[family-name:var(--font-caveat)]

                text-[35px]
                font-medium
                leading-[1.22]
                text-[#574D41]

                sm:text-[41px]

                md:text-[47px]

                lg:text-[51px]
                lg:leading-[1.35]

                xl:text-[55px]
              "
            >
              A child should not only{" "}
              <span className="text-[#075A36]">
                learn about the world.
              </span>

              <span className="mt-1 block">
                They should{" "}
                <span className="relative inline-block text-[#438E42]">
                  experience it.

                  {/* HAND DRAWN UNDERLINE */}
                  <svg
                    viewBox="0 0 260 10"
                    preserveAspectRatio="none"
                    className="
                      absolute
                      -bottom-[3px]
                      left-0
                      h-[7px]
                      w-full
                    "
                  >
                    <path
                      d="
                        M2 5
                        C50 2 100 3 130 3
                        C175 3 220 3 258 5
                      "
                      stroke="#8BC53F"
                      strokeWidth="2.3"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </span>

              <span className="block">
                Touch it. Question it. Care for it.
              </span>
            </h2>

            {/* =================================================
                BOTTOM INFORMATION
            ================================================== */}
            <div
              className="
                mt-6
                grid
                w-full
                grid-cols-1
                gap-6
                border-t
                border-[#075A36]/15
                pt-5

                md:grid-cols-[1fr_auto]
                md:items-end

                lg:mt-7
              "
            >

              {/* LEFT DESCRIPTION */}
              <div>
                <p
                  className="
                    mb-2
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-[#438E42]
                  "
                >
                  The Prithvi Way
                </p>

                <p
                  className="
                    max-w-[620px]
                    text-[12px]
                    leading-[1.7]
                    text-[#574D41]/70

                    md:text-[13px]
                  "
                >
                  We believe the most meaningful learning happens when
                  children explore, create, question and connect what they
                  learn with the world around them.
                </p>
              </div>

              {/* =================================================
                  THREE PRINCIPLES
              ================================================== */}
              <div
                className="
                  flex
                  items-start
                  gap-7

                  sm:gap-9

                  lg:gap-10
                "
              >

                {/* 01 */}
                <div>
                  <span
                    className="
                      text-[19px]
                      font-medium
                      text-[#075A36]

                      md:text-[21px]
                    "
                  >
                    01
                  </span>

                  <p
                    className="
                      mt-1
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#574D41]/60

                      sm:text-[9px]
                    "
                  >
                    Explore
                  </p>
                </div>

                {/* 02 */}
                <div>
                  <span
                    className="
                      text-[19px]
                      font-medium
                      text-[#438E42]

                      md:text-[21px]
                    "
                  >
                    02
                  </span>

                  <p
                    className="
                      mt-1
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#574D41]/60

                      sm:text-[9px]
                    "
                  >
                    Experience
                  </p>
                </div>

                {/* 03 */}
                <div>
                  <span
                    className="
                      text-[19px]
                      font-medium
                      text-[#64B0E2]

                      md:text-[21px]
                    "
                  >
                    03
                  </span>

                  <p
                    className="
                      mt-1
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#574D41]/60

                      sm:text-[9px]
                    "
                  >
                    Grow
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                BOTTOM LEAF DOTS
            ================================================== */}
            <div
              className="
                mt-4
                flex
                items-center
                justify-end
                gap-[8px]

                md:mt-5
              "
            >
              {LEAF_DOT_COLORS.map((color, i) => (
                <svg
                  key={i}
                  width="18"
                  height="22"
                  viewBox="0 0 19 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="
                    h-[17px]
                    w-[14px]
                  "
                >
                  <path
                    d="
                      M17.8 1.4
                      C12.1 2.2 7.1 4.8 4.2 8.4
                      C1.7 11.5 0.8 15.5 1.2 20.7
                      C5.6 19.4 9.1 17.2 11.7 14.1
                      C14.8 10.4 16.7 6.1 17.8 1.4Z
                    "
                    fill={color}
                  />
                </svg>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}