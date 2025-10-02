import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
import './ohmy.css';

type ChildProps = {
  id:string, 
  odd:boolean,
  img:any,
  body:any,
}

export default function Ohmy({id, odd, img, body}:ChildProps) {
  return (
    <section id={id} className={`ohmy ${odd ? 'bg-(--color-primary)/90' : 'bg-(--color-secondary)/80'}`}>
      <div className="container max-w-7xl mx-auto py-16 px-16">
        <div className={`flex items-stretch flex-col gap-8 ${odd ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
          <div className="flex-1 py-4">
            <h1 className="text-3xl">{id}</h1>
            {Array.isArray(body) && <PortableText value={body} />}
          </div>
          <div className="flex-1 relative min-h-80">
            <Image
              src={urlFor(img).url()}
              alt={img.alt || id}
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}