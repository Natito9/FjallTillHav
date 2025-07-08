import Image from "next/image";

export default function HuvudSponsor() {
  return (
    <section className="absolute flex items-center justify-center top-14 md:top-15 w-full z-10 h-20">
      <div className="absolute  inset-0 pointer-events-none  bg-gradient-to-r from-transparent via-black/70 to-transparent" />

      <div className="relative flex items-center justify-center gap-5 w-full p-4 z-10 ">
        <h3 className="md:text-xl text-md">Huvudsponsor</h3>
        <div className="relative w-auto h-auto md:max-w-[200px] max-w-[150px]">
          <Image
            src="/assets/logos/houdini.png"
            alt="Houdini Logo"
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
