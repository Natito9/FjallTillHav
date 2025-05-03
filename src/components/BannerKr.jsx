export default function BannerKr() {
  return (
    <section className="flex flex-col justify-center items-center text-centerh-[40vh] p-4">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-4">1KR = 1M </h2>
      <p className="text-2xl md:2xl p-3">
        1 krona = 1 meter löpning – varje steg tar oss närmare målet! 🌍🏔️
      </p>
      <button className="bg-sky-800 hover:bg-sky-950 text-white font-semibold py-3 px-6 rounded-3xl shadow-md transition-all duration-300  w-[80%] max-w-xs md:max-w-sm">
        Stöd oss
      </button>
    </section>
  );
}
