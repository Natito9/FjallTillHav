export default function Map() {
  return (
    <section className="md:h-[90vh] px-9 py-15 flex flex-col justify-center items-center w-full">
      <div className="flex justify-center items-center md:pb-8 pb-4 gap-5 ">
        <h3 className="text-md md:text-3xl">
          Följ oss på äventyret
        </h3>
        <div className="flex items-center gap-4 ml-4">
          <p className="md:text-xl text-md font-semibold text-red-400">Live</p>
           <div className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
        </div>
      </div>
      <div className="md:h-[600px] h-[500px] w-full md:w-[90%] max-w-[900px] relative">
        <iframe
          src="https://livetrack.garmin.com/session/1edfcf6a-43ab-8b72-a40d-607587189d01/token/3C5596AC4BBDFA11E057785C168F5017"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          allowFullScreen
        />
      </div>
    </section>
  );
}
