export default function VideoProject() {
  return (
    <section
      data-theme="dark"
      className="flex justify-center items-center h-[50vh] md:h-[70vh] w-full "
    >
      <div className="relative w-[80%] max-w-[800px] aspect-video">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-3xl"
          src={`https://www.youtube.com/embed/1wHP1S1mViI`}
          title="Från Fjäll Till Hav"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
