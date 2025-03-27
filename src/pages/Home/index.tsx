export default function HomePage() {
  return (
    <section className="py-12 font-jost">
      <div
        className="max-w-[1200px] mx-auto flex flex-col items-center justify-start px-6 text-left gap-6">
        <h1 className="font-dm text-title">Let's Create Your Dream Interior</h1>
        <p className="text-base max-w-[600px]">
          The world needs innovators and problem solvers who turn challenges
          into greater
          opportunities.
        </p>
        <a
          href="#"
          className="bg-btnBg hover:bg-btnHover text-btn text-white font-jost rounded-btn px-6 py-3 no-underline transition"
        >
          Get Started →
        </a>
      </div>
    </section>
  )
}
