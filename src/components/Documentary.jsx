export default function Documentary() {
    return (
        <section className="flex justify-center items-center h-[50vh] md:h-[70vh] w-full ">
        <div className="relative w-[80%] max-w-[800px] aspect-video">
            <iframe
        className="absolute top-0 left-0 w-full h-full rounded-3xl"
              src={`https://www.youtube.com/embed/v1A8rSpC048`}
              title="Från Fjäll Till Hav"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          </section>
    );
  }
//   https://www.youtube.com/watch?v=v1A8rSpC048&ab_channel=ROOKIISOttoBl%C3%BCcker