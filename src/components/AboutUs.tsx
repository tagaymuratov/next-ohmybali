import Image from "next/image";
import img1 from '@/assets/imgs/img1.jpg';
import imgMission from '@/assets/imgs/mission.jpg';

function AboutUs(){
  return(
    <section className="bg-(--color-secondary)/80 rounded-t-2xl" id="aboutUs">
      <div className="container max-w-7xl mx-auto py-16 px-16">
        <h1 className="text-center text-3xl mb-8">ohmyBali — ваш партнёр на острове</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 relative min-h-80">
            <Image 
              src={img1}
              alt=""
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="flex-1 py-4">
            <p className="font-[600]">ohmyBali — принимающая сторона и тревел-агентство на Бали.</p>
            <br />
            <p>Мы создаём авторские туры, ретриты и события, объединяя профессиональный сервис с глубоким знанием острова.</p>
            <br />
            <p>Компания официально зарегистрирована как юридическое лицо в: </p>
            <ul>
              <li>• Казахстане</li>
              <li>• России</li>
              <li>• Индонезии (о. Бали)</li>
            </ul>
            <br />
            <p>это даёт нам возможность работать прозрачно и удобно с клиентами и партнёрами из разных стран.</p>
          </div>
        </div>
        <h1 className="text-center text-3xl mb-8 mt-16">Наша миссия</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 py-4">
            <p>Мы стремимся быть надёжным партнёром, объединяя профессиональный сервис, глубокое знание Бали и гибкий подход.</p>
            <br />
            <p>Для нас важно не только организовать туры и события, но и создавать проекты, которые вдохновляют и остаются в памяти.</p>
          </div>
          <div className="flex-1 relative min-h-80">
            <Image
              src={imgMission}
              alt=""
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