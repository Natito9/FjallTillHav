import Image from "next/image";

const posts = [
  {
    src: "/assets/socials/post1.png",
    url: "https://www.instagram.com/p/DHu_3A8CUTo/",
  },
  {
    src: "/assets/socials/post2.png",
    url: "https://www.instagram.com/p/DL65HlECuXg/",
  },
  {
    src: "/assets/socials/post3.png",
    url: "https://www.instagram.com/p/DL4t8x7MHTJ/",
  },
  {
    src: "/assets/socials/post4.png",
    url: "https://www.instagram.com/reel/DHi1vgmMhS_/",
  },
];

export default function InstaPosts() {
  return (
    <section className="px-6 py-10">
      <h3 className="text-xl font-semibold mb-4 text-center md:pb-8 pb-4 ">Det senaste på Instagram</h3>

    <div className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory md:justify-center">

        {posts.map((post, index) => (
          <a
            key={index}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[200px] flex-shrink-0 snap-start"
          >
            <Image
              src={post.src}
              alt={`Instagram post ${index + 1}`}
              width={200}
              height={300}
              className="object-cover"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
