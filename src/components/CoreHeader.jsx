const CoreHeader = ({
  badge,
  title1,
  title2,
  headingAs: HeadingTag = "h2",
}) => {
  return (
    <div className="relative w-full">

      {/* OUTER CURVE */}
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
        "
      >

       
        <div
          className="
            absolute
            left-1/2
            top-0
            flex
            h-[305px]
            w-[420px]
            max-w-[82%]
            -translate-x-1/2
            flex-col
            items-center
            justify-center
            rounded-b-[50%]
            bg-[#EFE0D0]
            px-6
            text-center
          "
        >

          {/* BADGE */}
          {badge && (
            <span
              className="
                mb-4
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
              "
            >
              {badge}
            </span>
          )}

          {/* TITLE */}
          <HeadingTag
            className="
              heading
              !text-[27px]
              leading-[1.1]
              text-[#292929]
              md:!text-[34px]
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
    </div>
  );
};

export default CoreHeader;