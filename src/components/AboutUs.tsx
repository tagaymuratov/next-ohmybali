import Image from "next/image";
import img1 from '@/assets/imgs/img1.webp';
import imgMission from '@/assets/imgs/mission.webp';
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";

type ChildProps = {
  id: string,
  img: any,
  body: any,
  id2: string,
  img2: any,
  body2: any,
}

function AboutUs({ id, img, body, id2, img2, body2 }: ChildProps){
  return(
    <section className="bg-(--color-secondary)/80 rounded-t-2xl" id="aboutUs">
      <div className="container max-w-7xl mx-auto py-16 px-16">
        <h1 className="text-center text-3xl mb-8">{id}</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 relative min-h-80">
            <Image 
              src={urlFor(img).url()}
              alt={img.alt || id}
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="flex-1 py-4">
            {Array.isArray(body) && <PortableText value={body} />}
          </div>
        </div>
        <h1 className="text-center text-3xl mb-8 mt-16">{id2}</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 py-4">
            {Array.isArray(body2) && <PortableText value={body2} />}
          </div>
          <div className="flex-1 relative min-h-80">
            <Image
              src={urlFor(img2).url()}
              alt={img2.alt || id}
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;