"use client";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from 'react'; 
import Image from "next/image";

function Hero({img}: {img: any}){
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  return(
    <section className='relative h-screen w-full'>
      <Image
        src={urlFor(img).url()}
        alt={img.alt || 'Hero Image'}
        width={1920}
        height={1279}
        className={`fixed h-screen top-0 -z-50 object-cover transition-all delay-300 ease-in 
          ${ready ? 'object-bottom scale-110' : 'object-top'}`}
        priority
      />
      <div className="overlay fixed h-screen w-full top-0 left-0 bg-black/30 -z-49"></div>
    </section>
  )
}

export default Hero;