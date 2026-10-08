import Image from "next/image";

export default function ImageContentSection({
  imageSrc,
  mobileImageSrc,
  imageAlt = "",
  imageOnRight = false,
  children,
  title,
  description,
  bgColor,
  breakText = false,
  primaryBtnText,
  secondaryBtnText,
  onPrimaryClick,
  onSecondaryClick,
  className = "",
  imageClassName = "",
  contentClassName = "",
  gridGap = "gap-8 lg:gap-12",
  style,
  mobileImageFirst = true,
}) {
  const sectionStyle = { ...(bgColor ? { background: bgColor } : {}), ...style };

  return (
    <section style={sectionStyle} className="py-10 lg:py-9 bg-[#F7F6F2]">
      <div className="container-custom">
        <div className={`grid grid-cols-1 lg:grid-cols-2 ${gridGap} items-center`}>
          {/* Image */}
          <div
            className={`${imageOnRight ? "lg:order-2" : "lg:order-1"} ${
              mobileImageFirst ? "order-1" : "order-2"
            } ${imageClassName}`}
          >
            {mobileImageSrc && (
              <Image
                src={mobileImageSrc}
                alt={imageAlt}
                width={800}
                height={800}
                className="w-full h-auto block lg:hidden"
              />
            )}
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1500}
              height={1000}
              className={`w-full h-auto ${mobileImageSrc ? "hidden lg:block" : ""}`}
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div
            className={`${imageOnRight ? "lg:order-1" : "lg:order-2"} ${
              mobileImageFirst ? "order-2" : "order-1"
            } ${className} flex items-center`}
          >
            <div className={`w-full ${contentClassName}`}>
              {title && (
                <h2 className="heading text-4xl lg:text-5xl font-bold leading-tight !text-[#196191] mb-4 max-w-md text-left">
                  {title}
                </h2>
              )}

              {description && (
                <p className="text-base lg:text-lg text-gray-600 mb-8">
                  {breakText
                    ? description.split(",").map((part, i, arr) => (
                        <span key={i}>
                          {part.trim()}
                          {i < arr.length - 1 && <br />}
                        </span>
                      ))
                    : description}
                </p>
              )}

              {(primaryBtnText || secondaryBtnText) && (
  <div className="flex flex-nowrap gap-3 justify-center lg:justify-start lg:flex-wrap lg:gap-4">
    {primaryBtnText && (
      <button
        onClick={onPrimaryClick}
        className="px-5 py-3 lg:px-8 lg:py-4 rounded-full bg-[#196191] text-white text-xs lg:text-sm font-semibold uppercase tracking-wide whitespace-nowrap hover:opacity-90 transition"
      >
        {primaryBtnText}
      </button>
    )}
    {secondaryBtnText && (
      <button
        onClick={onSecondaryClick}
        className="px-5 py-3 lg:px-8 lg:py-4 rounded-full bg-[#e88f1b] text-white text-xs lg:text-sm font-semibold uppercase tracking-wide whitespace-nowrap hover:opacity-90 transition"
      >
        {secondaryBtnText}
      </button>
    )}
  </div>
)}

              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}