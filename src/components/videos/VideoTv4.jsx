export default function VideoTv4() {
    return (
        <section className="flex justify-center items-center h-[50vh] md:h-[70vh] w-full ">
        <div className="relative w-[80%] max-w-[800px] aspect-video">
         <iframe
          className="absolute top-0 left-0 w-full h-full rounded-3xl"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wGrexnauxEI?si=ZpwlJVTK3uypGfiC"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
          </div>
          </section>
    );
  }