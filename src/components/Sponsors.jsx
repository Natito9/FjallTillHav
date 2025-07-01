import Image from 'next/image';

export default function Sponsors() {
    return(
        <section className="w-full h-auto  px-4 py-15 md:p-10 flex flex-col justify-center items-center bg-black">
      <h2 className="!text-white !font-nomal !text-xl py-5 pb-17">Tack till</h2>
      <div className="flex flex-col items-center md:flex-row md:flex-wrap gap-14  md:justify-around w-full md:max-w-[1440px]">
        <div className="relative w-auto md:max-w-[200px] min-w-[100px] max-w-[200px] ">
          <Image
            src="/assets/logos/alpe.png"
            alt="Alpe Logo"
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw"
            className=" w-full"
          />
        </div>
        <div className="relative w-auto h-auto md:max-w-[200px] max-w-[200px]">
          <Image
            src="/assets/logos/dacia.png"
            alt="Dacia Logo"
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw"
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="relative w-auto md:max-w-[200px] min-w-[100px] max-w-[200px]">
          <Image
            src="/assets/logos/silva.png"
            alt="Silva Logo"
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw"
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="relative w-auto h-auto max-w-[200px]">
          <Image
            src="/assets/logos/stf.png"
            alt="Stf Logo"
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw"
            className="h-auto w-full object-contain"
          />
        </div>
            <div className="relative w-auto h-auto md:max-w-[150px]  min-w-[135px]">
          <Image
            src="/assets/logos/lactigo.png"
            alt="Lactigo Logo"
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw"
            className="h-auto w-full object-contain"
          />
        </div>
           <div className="relative w-auto h-auto max-w-[130px]">
          <Image
            src="/assets/logos/realTurmat.png"
            alt="Real Turmat Logo"
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    
    </section>
    )
}