import Image from "next/image";

export default function PageBanner({
  image,
  alt = "Page Banner",
  title,
  subtitle,
  imageClassName = "",
}) {
  return (
    <section
      className="
        relative
        w-full
        h-[200px]
        sm:h-[320px]
        md:h-[400px]
        lg:h-[450px]
        overflow-hidden
      "
    >
      {/* Banner Image
          Same image is used on ALL screen sizes
      */}
      <Image
        src={image}
        alt={alt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={75}
        className={`
          object-cover
          object-center
          ${imageClassName}
        `}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-transparent" />

      {/* Text */}
      <div className="absolute inset-0 flex items-center container-custom">
        <div
          className="
            max-w-2xl
            px-6
            pt-[5px]
            sm:px-10
            md:px-16
            sm:pt-[100px]
            md:pt-[120px]
          "
        >
          {title && (
            <h1
              className="
                !text-white
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-bold
                leading-tight
              "
            >
              {title}
            </h1>
          )}

          {subtitle && (
            <p
              className="
                !text-white/90
                text-sm
                sm:text-base
                md:text-lg
                mt-3
                sm:mt-4
              "
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}