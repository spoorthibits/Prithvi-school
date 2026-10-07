import Image from "next/image";

export default function PageBanner({
  image,
  mobileImage, // optional: separate image for mobile (falls back to `image`)
  alt = "Page Banner",
  title,
  subtitle,
  imageClassName = "",
  mobileImageClassName = "",
}) {
  return (
     <section className="!relative !w-full !h-[220px] sm:!h-[350px] md:!h-[500px] lg:!h-[500px] !overflow-hidden">
      {/* MOBILE IMAGE (below md) */}
      <Image
        src={mobileImage || image}
        alt={alt}
        fill
        priority
        fetchPriority="high"
        className={`!object-cover md:!hidden ${mobileImageClassName}`}
        sizes="100vw"
        quality={85}
      />
      {/*tablet image*/}
      <Image
        src={image}
        alt={alt}
        fill
        priority
        fetchPriority="high"
        className={`!object-cover !hidden md:!block !object-[center_30%] lg:!hidden !object-center ${imageClassName}`}
        sizes="100vw"
        quality={85}
      />

      {/* DESKTOP IMAGE */}
      <Image
        src={image}
        alt={alt}
        fill
        priority
        fetchPriority="high"
        className={`!object-cover !hidden lg:!block ${imageClassName}`}
        sizes="100vw"
        quality={85}
      />

      {/* Overlay: flat dark tint on mobile, left-to-right gradient on larger screens */}
      <div className="!absolute !inset-0 !bg-black/25 md:!bg-transparent md:!bg-gradient-to-r md:!from-black/50 md:!via-black/15 md:!to-transparent" />

      {/* Text content */}
      <div className="!absolute !inset-0 !flex !items-center container-custom">
        <div className="!max-w-2xl !px-6 sm:!px-10 md:!px-16">
          {title && (
            <h1 className="!text-white !text-3xl sm:!text-4xl md:!text-5xl !font-bold !leading-tight !font-sans">
              {title}
            </h1>
          )}

          {/* Subtitle hidden on mobile */}
          {subtitle && (
            <p className="!hidden md:!block !text-white/90 !text-base md:!text-lg !mt-4">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
