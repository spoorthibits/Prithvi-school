import Image from "next/image";

export default function ImageContentSection({
  imageSrc,
  imageAlt,
  imageOnRight = false,
  children,
  title,
  className = "",
  imageClassName = "",
  contentClassName = "",
  gridGap = "",
  style,
  mobileImageFirst = true,
}) {
  return (
    <div className={` `} style={style}>
      <div className="" style={style ? { background: 'inherit' } : {}}>
        {/* Title - Only render if title exists */}
        {title && (
          <div className="heading">
            {title}
          </div>
        )}

        <div className={`grid grid-cols-1 lg:grid-cols-2 ${gridGap} items-stretch`}>
          {/* Image Section */}
          <div
            className={`${
              imageOnRight ? "lg:order-2" : "lg:order-1"
            } ${mobileImageFirst ? "order-1" : "order-2"} ${imageClassName}`}
          >
            <div className="overflow-hidden h-full image-content">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1500}
                height={1000}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content Section - Wrapper with order classes */}
          <div
            className={`${
              imageOnRight ? "lg:order-1" : "lg:order-2"
            } ${mobileImageFirst ? "order-2" : "order-1"} ${className} h-full flex items-center justify-center`}
          >
            <div className={`lg:px-20 md:px-4 px-6 py-8 ${contentClassName}`}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}