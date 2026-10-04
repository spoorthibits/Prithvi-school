const CoreHeader = ({
  badge,
  title1,
  title2,
  headingAs: HeadingTag = "h2",
}) => {
  return (
    <div className="relative w-full">

      {/* CURVE */}
      <div
        className="
          relative
          mx-auto
          h-[350px]
          w-[450px]
          max-w-[90%]
          overflow-hidden
          rounded-b-[50%]
          border-x
          border-b
          border-[#D9B98C]/50

          /* MOBILE */
          max-[767px]:h-[300px]
          max-[767px]:w-[310px]

          /* TABLET */
          min-[768px]:max-[1024px]:h-[245px]
          min-[768px]:max-[1024px]:w-[320px]
        "
      >

        {/* INNER CURVE */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[305px]
            w-[420px]
            max-w-[82%]
            -translate-x-1/2
            rounded-b-[50%]
            bg-[#EFE0D0]

            /* MOBILE */
            max-[767px]:h-[265px]
            max-[767px]:w-[285px]

            /* TABLET */
            min-[768px]:max-[1024px]:h-[220px]
            min-[768px]:max-[1024px]:w-[295px]
          "
        >

          {/* BADGE */}
          {badge && (
            <span
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-[#D9A56C]
                px-4
                py-1.5
                text-[10px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-[#075A36]

                max-[767px]:px-3.5
                max-[767px]:py-1
                max-[767px]:text-[9px]
              "
            >
              {badge}
            </span>
          )}

        </div>
      </div>

      {/* TITLE */}
      <div
        className="
          relative
          z-10
          flex
          w-full
          justify-center
          text-center
          px-6

          /* MOBILE */
          max-[767px]:mt-5

          /* TABLET */
          min-[768px]:max-[1024px]:mt-6

          /* LAPTOP + DESKTOP */
          min-[1025px]:mt-8
        "
      >
        <HeadingTag
          className="
            heading
            !m-0
            max-w-[900px]
            text-center
            !text-[27px]
            leading-[1.1]
            text-[#292929]

            /* MOBILE */
            max-[767px]:!text-[25px]

            /* TABLET */
            min-[768px]:max-[1024px]:!text-[24px]

            /* LAPTOP + DESKTOP */
            min-[1025px]:!text-[34px]
          "
        >
          {title1}

          {title2 && (
            <>
              <br />
              {title2}
            </>
          )}
        </HeadingTag>
      </div>

    </div>
  );
};

export default CoreHeader;