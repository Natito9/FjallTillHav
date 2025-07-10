
import Socials from "./Socials";
import Contact from "./Contact";
import Developer from "./Developer";
import VillkorLink from "./VillkorLink";

export default function Footer() {
  return (
    <div className="w-full h-auto md:px-10 px-9 md:pt-25 pt-15 pb-10  flex flex-col justify-around items-start gap-8 bg-black">
      <Socials/>
      <Contact />
      <Developer />
      <VillkorLink />
    </div>
  );
}
