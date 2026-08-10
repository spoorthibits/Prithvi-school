import Image from "next/image";

export default function PageBanner({ image, alt = "Page Banner", title, subtitle }) {
  return (
    <section className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        fetchPriority="high"
        className="object-cover"
        sizes="100vw"
        quality={85}
      />

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-transparent" />

      {/* Text content */}
      <div className="absolute inset-0 flex items-center container-custom">
        <div className="max-w-2xl px-6 sm:px-10 md:px-16">
          {title && (
            <h1 className="!text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="!text-white/90 text-sm sm:text-base md:text-lg mt-3 sm:mt-4">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}