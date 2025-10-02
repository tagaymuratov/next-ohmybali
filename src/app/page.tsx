import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";

import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Ohmy from "@/components/Ohmy";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Left from "@/components/Left";
import Right from "@/components/Right";

const POSTS_QUERY = `*[ _type == "directions" ]{_id, title_ru, image, content_ru} | order(_createdAt desc)`;
const MAIN_QUERY = `*[_type == "mainType" ]{_id, title_ru, image, content_ru} | order(_createdAt desc)`;
const CONTACTS_QUERY = `*[_type == "contactsType" ]{_id, content_ru} | order(_createdAt desc)`;

export default async function Home() {
  let odd: boolean = false;
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);
  const main = await client.fetch<SanityDocument[]>(MAIN_QUERY);
  const contacts = await client.fetch<SanityDocument[]>(CONTACTS_QUERY);
  const main_hero = main[0];
  const aboutUs = main[3];
  const mission = main[2];
  const whyus = main[1];

  return (
    <main>
      <Header posts={posts} body={main_hero.content_ru} eng={false} />
      <Left />
      <Right />
      <Hero img={main_hero.image} />
      <AboutUs id={aboutUs.title_ru} img={aboutUs.image} body={aboutUs.content_ru} id2={mission.title_ru} img2={mission.image} body2={mission.content_ru} />

      {posts.map((post) => (
        <div key={post._id}>
          <Ohmy id={post.title_ru} odd={odd = !odd} img={post.image} body={post.content_ru} />
        </div>
      ))}

      <WhyUs id={whyus.title_ru} img={whyus.image} body={whyus.content_ru} />
      <Footer contacts={contacts} eng={false} />
    </main>
  );
}

