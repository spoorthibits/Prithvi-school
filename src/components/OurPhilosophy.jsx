export default function OurPhilosophySection() {
  return (
    <section className="!w-full !bg-white">
      <div
        className="
          !relative
          !w-full
          !overflow-hidden
          !bg-cover
          !bg-center
          !bg-no-repeat
          !py-16
          sm:!py-20
          md:!py-24
          lg:!py-28
        "
        style={{
          backgroundImage: "url('/bgblue.png')",
        }}
      >
        {/* Top Center Label */}
        <div className="!absolute !left-1/2 !top-0 !z-10 !-translate-x-1/2">
          <div
            className="
              !flex
              !items-center
              !justify-center
              !whitespace-nowrap
              !px-5
              !py-4
              !text-center
              !text-sm
              !font-bold
              !tracking-[3px]
              !text-[#ffffff]
              !shadow-sm
              sm:!px-7
              sm:!py-5
              sm:!text-base
              sm:!tracking-widest
            "
          >
            OUR PHILOSOPHY
          </div>
        </div>

        {/* Content */}
        <div className="container-custom !relative !z-10">
          <div className="!mx-auto !max-w-4xl !text-center">
            <p
              className="
                !mb-5
                !text-white
                !text-[15px]
                !leading-[26px]
                sm:!text-[16px]
                sm:!leading-[28px]
                md:!text-lg
                md:!leading-[30px]
              "
            >
              At Prithvi, we believe children grow best when they are grounded in who
              they are and connected to the world around them. Our philosophy brings
              together values, nature, curiosity, creativity and meaningful learning
              experiences.
            </p>

            <p
              className="
                !text-white
                !text-[15px]
                !leading-[26px]
                sm:!text-[16px]
                sm:!leading-[28px]
                md:!text-lg
                md:!leading-[30px]
              "
            >
              We nurture children to become mindful, compassionate and responsible
              individuals — confident enough to lead, yet humble enough to listen and
              learn. Our aim is to help them grow into thoughtful global citizens,
              ready to shape the world they inherit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}