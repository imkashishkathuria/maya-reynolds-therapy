import Image from "next/image"

const OurOffice = () => {
  return (
    <section
      id="office"
      className="bg-[#FBF7F2] py-20 px-5 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-[32px] lg:text-[42px] font-[500] mb-6 text-[#212121]">
            Our Santa Monica Office
          </h2>

          <p className="text-[17px] leading-relaxed mb-6 text-[#212121]">
            My therapy practice is located in the heart of Santa Monica, California,
            offering a calm and private space for adults seeking in-person therapy.
            The office is thoughtfully designed to feel warm, grounding, and
            uncluttered—so you can arrive, settle in, and feel at ease.
          </p>

          <p className="text-[17px] leading-relaxed mb-6 text-[#212121]">
            Many clients share that the environment itself feels soothing—from the
            natural light and neutral tones to the comfortable seating and quiet
            surroundings. Whether you are coming in after a busy workday or carving
            out intentional space for yourself, the office is meant to support a
            slower, more reflective pace.
          </p>

          <p className="text-[17px] leading-relaxed mb-6 text-[#212121]">
            In-person sessions are ideal for those who value face-to-face connection,
            structure, and a dedicated space away from daily responsibilities.
            I also offer secure telehealth sessions for clients located anywhere in
            California.
          </p>

          <div className="mt-8">
            <p className="text-[18px] font-medium text-[#03252d]">
              📍 Office Address
            </p>
            <p className="text-[#212121] mt-1">
              123th Street 45 W<br />
              Santa Monica, CA 90401
            </p>

            <p className="text-[18px] font-medium text-[#212121] mt-5">
              🕒 Office Hours
            </p>
            <p className="text-[#212121] mt-1">
              Monday – Friday<br />
              10:00 AM – 6:00 PM
            </p>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="">
          

          <div className="relative h-[220px] lg:h-[600px] rounded-xl overflow-hidden">
            <Image
              src="/assets/office1.jpeg"
              alt="Calm counseling space in Santa Monica"
              fill
              className="object-cover"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurOffice
