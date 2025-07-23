export default function Map() {
  return (
    <section className="md:h-[90vh] px-9 py-15 flex flex-col justify-center items-center w-full bg-black">
      <div className="flex justify-center items-center md:pb-8 pb-4 gap-5 ">
        <h3 className="text-xl font-semibold text-center text-white">Följ oss på äventyret</h3>
    
      </div>
      <div className="md:h-[600px] h-[500px] w-full md:w-[90%] max-w-[900px] relative">
        <iframe
          src="https://live.garmin.com/session/663a25b4-7db2-89fb-bdb4-7e9a02440201/token/76E77FE69EAE1D1BF5345FF26F93F324"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          allowFullScreen
        />
      </div>
    </section>
  );
}
