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
              At Prithvi Global School, we believe education is about developing
              the whole child. Our approach brings together academic excellence,
              strong values, creativity and meaningful experiences, creating an
              environment where children are encouraged to think independently,
              remain curious and develop a deeper understanding of the world
              around them.
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
              We aim to nurture individuals who are grounded in their identity
              and values, while being open to diverse perspectives and ideas.
              Through a balance of knowledge, character and responsibility, we
              prepare children to grow into confident, compassionate and
              thoughtful global citizens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}