"use client";
import { useEffect, useState } from "react";
import { PortableText, type SanityDocument } from "next-sanity";
import Navlink from "./Navlink";
import Burger from "./Burger";
import Image from "next/image";

export default function Header({posts, body, eng}: {posts: SanityDocument[], body: any, eng: boolean}) {
  const [ready, setReady] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(128);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDirectionsOpen, setIsDirectionsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setReady(true);
    setWindowHeight(window.innerHeight);
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setWindowHeight(window.innerHeight);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {setIsMenuOpen(!isMenuOpen);}
  const handleDirectionsClick = () => {setIsDirectionsOpen(!isDirectionsOpen);}

  return (
    <header className={`
      fixed flex items-center w-full h-16 px-4 left-0 z-40 text-white transition-all duration-300 ease-in 
      ${ready ? 'translate-y-0' : '-translate-y-16'}
      ${scrollY > windowHeight-64 ? 'bg-black' : ''}
      `}>
      <div className={`
          absolute flex justify-center items-center flex-col max-w-1/2 transition-all duration-300 ease-in
          ${scrollY > 0 ? 'left-4 top-2 mr-4' : 'left-1/2 top-[50vh] -translate-x-1/2 -translate-y-1/2'}
        `}>
        <Image
          src="/logo.png"
          alt="OhMyBali Logo"
          className={`w-auto object-contain transition-[height, opacity] duration-300 ease-in
            ${scrollY>0 ? 'h-12' : 'h-auto'} ${ready ? 'opacity-100' : 'opacity-0'}`}
          width={1240}
          height={396}
          priority
        />
        <div className={`absolute top-full text-center transition-opacity 
          ${ready ? '' : 'hidden'}
          ${scrollY > 0 ? 'opacity-0' : 'opacity-100'}`}>
          <div className="font-[600] text-base sm:text-xl text-center w-full">{Array.isArray(body) && <PortableText value={body} />}</div>
        </div>
      </div>

      <nav className="ml-auto my-auto hidden xl:flex">
        <ul className="flex items-center gap-6">
          <li><Navlink txt={`${eng ? 'About Us' : 'О нас'}`} link='#aboutUs'/></li>
          <li className="relative">
            <div className="group hover:bg-black rounded-t-lg">
              <Navlink txt={`${eng ? 'Our Directions' : 'Наши направления'}`} link='none'/>
              <ul className="flex-col gap-2 p-4 w-full opacity-0 absolute hidden top-full left-0 z-50 group-hover:flex group-hover:opacity-100 transition-[opacity] delay-300 ease-in rounded-b-lg bg-black">
                {posts.map((post) => (
                  eng ? <li key={post._id}><Navlink txt={post.title_en} link={`#${post.title_en}`}/></li>
                  :
                  <li key={post._id}><Navlink txt={post.title_ru} link={`#${post.title_ru}`}/></li>
                ))}
              </ul>
            </div>
          </li>
          <li><Navlink txt={`${eng ? 'Why Us?' : 'Почему мы?'}`} link='#whyUs'/></li>
          <li><Navlink txt={`${eng ? 'Contacts' : 'Контакты'}`} link='#contacts'/></li>
          {eng ? <li><Navlink txt='RU' link='/' /></li>
            : <li><Navlink txt='EN' link='/en' /></li>
          }
        </ul>
      </nav>

      <Burger onClick={handleClick} />
      <aside className={`bg-black fixed top-0 right-0 h-screen z-40 transition-transform delay-300 ease-in ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col gap-4 mt-16 p-4">
          <li><Navlink txt={`${eng ? 'About Us' : 'О нас'}`} link='#aboutUs'/></li>
          <li className="relative">
            <div className="group rounded-t-lg">
              <Navlink txt={`${eng ? 'Our Directions' : 'Наши направления'}`} link='none' onClick={handleDirectionsClick} />
              <ul className={`w-full ml-4 h-0 transition-[height] delay-300 ease-in ${isDirectionsOpen ? 'block h-auto' : 'hidden h-0'}`}>
                {posts.map((post) => (
                  eng ? <li key={post._id}><Navlink txt={post.title_en} link={`#${post.title_en}`} /></li>
                  :
                  <li key={post._id}><Navlink txt={post.title_ru} link={`#${post.title_ru}`} /></li>
                ))}
              </ul>
            </div>
          </li>
          <li><Navlink txt={`${eng ? 'Why Us?' : 'Почему мы?'}`} link='#whyUs'/></li>
          <li><Navlink txt={`${eng ? 'Contacts' : 'Контакты'}`} link='#contacts'/></li>
          {eng ? <li><Navlink txt='RU' link='/' /></li>
            : <li><Navlink txt='EN' link='/en' /></li>
          }
        </ul>
      </aside>
    </header>
  );
};