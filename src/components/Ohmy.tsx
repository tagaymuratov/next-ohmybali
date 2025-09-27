import Image from "next/image";
import imgOhmyEvent from '@/assets/imgs/ohmyEvent.jpg';
import imgOhmyGroup from '@/assets/imgs/ohmyGroup.jpg';
import imgOhmySoul from '@/assets/imgs/ohmySoul.jpg';
import imgOhmyTrip from '@/assets/imgs/ohmyTrip.jpg';
import imgOhmyDay from '@/assets/imgs/ohmyDay.jpg';
import imgOhmySport from '@/assets/imgs/ohmySport.jpg';

type ChildProps = {id:string, green:boolean}

function setImg(id:string){
  switch (id) {
    case 'ohmyEvent':
      return imgOhmyEvent;
      break;
    case 'ohmyGroup':
      return imgOhmyGroup;
      break;
    case 'ohmySoul':
      return imgOhmySoul;
      break;
    case 'ohmyTrip':
      return imgOhmyTrip;
      break;
    case 'ohmyDay':
      return imgOhmyDay;
      break;
    case 'ohmySport':
      return imgOhmySport;
      break;
    default:
      return imgOhmyEvent;
      break;
  }
}

function Ohmy({id, green}:ChildProps) {
  return (
    <section id={id} className={`${green ? 'bg-(--color-primary)/90' : 'bg-(--color-secondary)/80'}`}>
      <div className="container max-w-7xl mx-auto py-16 px-16">
        <div className={`flex items-stretch flex-col gap-8 ${green ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
          <div className="flex-1 py-4">
            <h1 className="text-3xl">{id}</h1>
            {getBody(id)}
          </div>
          <div className="flex-1 relative min-h-80">
            <Image
              src={setImg(id)}
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

function getBody(id:string){
  switch (id) {
    case 'ohmyEvent':
      return(
        <div>
          <p><i className="text-lg">полный цикл MICE-организации на Бали</i></p>
          <br/>
          <p>мы берём на себя всю организационную часть деловых мероприятий:</p>
          <ul>
            <li>— конференции, съезды, форумы, саммиты</li>
            <li>— подбор площадки и техническое обеспечение</li>
            <li>— организация проживания по специальным тарифам</li>
            <li>— работа с подрядчиками, кейтеринг, декор</li>
            <li>— встреча и сопровождение участников</li>
            <li>— программа, экскурсии, ужины, развлекательная часть</li>
          </ul>
          <br/>
          <p>💼 работаем по международным mice-стандартам</p>
          <p>💬 опыт управления мероприятиями на 100+ человек</p>
          <p>🌴 все сложности мы берём на себя — вы просто прилетаете и проводите своё событие на высшем уровне</p>
          <br/>
          <i className="text-lg">Бали — это новая точка силы для вашего бизнеса</i>
        </div>
      );
      break;

    case 'ohmyGroup':
      return(
        <div>
          <p><i className="text-lg">групповые авторские туры</i></p>
          <br />
          <p>готовые уникальные путешествия для единомышленников от 7 до 14 дней.</p>
          <br />
          <p>формат «присоединиться и не думать ни о чём» - всё уже организовано:</p>
          <ul>
            <li>— проживание</li>
            <li>— завтраки</li>
            <li>— трансферы и насыщенная программа</li>
            <li>— душевная компания и забота</li>
          </ul>
        </div>
      );
      break;

    case 'ohmySoul':
      return(
        <div>
          <p><i className="text-lg">туры для вашей души</i></p>
          <br />
          <p>мы создаём программы, где сочетаются йога, медитации, звуковые практики и прогулки в природе. такой формат помогает перезагрузиться и открыть бали с другой стороны - спокойной и осмысленной.</p>
          <ul>
            <li>— проведение ретритов</li>
            <li>— организация духовных программ</li>
            <li>— индивидуальные церемонии (очищение, балийские традиции)</li>
            <li>— мягкий контакт с культурой и природой</li>
          </ul>
          <br />
          <p>* также работаем с проводниками:</p>
          <p>если у вас есть аудитория — мы создадим для вас авторский тур или ретрит на высшем уровне.</p>
        </div>
      );
      break;

    case 'ohmyTrip':
      return(
        <div>
          <p><i className="text-lg">индивидуальные путешествия</i></p>
          <br/>
          <p>мы создаём индивидуальные маршруты по бали с учётом интересов и запросов клиента. каждый тур продуман до деталей и сочетает комфорт, атмосферу острова и персональный подход.</p>
          <br/>
          <ul>
            <li>— авторские маршруты «под ключ»</li>
            <li>— персональное сопровождение и организация</li>
            <li>— доступ к уникальным локациям и сервисам</li>
            <li>— фото- и видеосопровождение по запросу</li>
            <li>— подбор кафе, вилл и эксклюзивных точек для отдыха</li>
          </ul>
        </div>
      );
      break;

    case 'ohmyDay':
      return(
        <div>
          <p><i className="text-lg">экскурсии и поездки одного дня</i></p>
          <br/>
          <p>мы организуем насыщенные однодневные маршруты по острову для небольших и больших групп:</p>
          <ul>
            <li>— гид и сопровождающий</li>
            <li>— комфортный транспорт</li>
            <li>— входные билеты</li>
          </ul>
          <br/>
          <p>* мы подбираем лучший маршрут под сезон, погоду и настроение группы.</p>
        </div>
      );
      break;

    case 'ohmySport':
      return(
        <div>
          <p><i className="text-lg">спортивные туры и активные программы</i></p>
          <br/>
          <p>мы организуем спортивные и фитнес-туры «под ключ»: проживание, питание, трансферы, аренда площадок и сопровождение тренеров.</p>
          <br/>
          <p>форматы:</p>
          <ul>
            <li>— падел и большой теннис: сборы, турниры, персональные программы</li>
            <li>— фитнес-выезды и bootcamps: интенсивные тренировки, спецпитание</li>
            <li>— сёрфинг и sup-программы: для новичков и профи</li>
            <li>— йога, пилатес, боевые искусства: групповые и индивидуальные занятия</li>
            <li>— активные туры: восхождения, веломаршруты, беговые сборы</li>
          </ul>
        </div>
      );
      break;
  
    default:
      return('default');
      break;
  }
}

export default Ohmy;