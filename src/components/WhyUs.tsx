import Image from "next/image";
import img from '@/assets/imgs/whyus.jpg'

function WhyUs(){
  return(
    <section id='whyUs' className="bg-(--color-primary)/90">
      <div className="container max-w-7xl mx-auto py-16 px-16">
        <div className="flex items-stretch flex-col gap-8 md:flex-row">
          <div className="flex-1 relative min-h-80">
            <Image
              src={img}
              alt=""
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="flex-1 py-4">
            <h1 className="text-3xl">Почему мы? - Наш подход</h1>
            <br />
            <ul>
              <li>• работаем как официальная принимающая сторона на бали</li>
              <li>• юридические лица в казахстане, россии и индонезии</li>
              <li>• команда на месте: локальные контакты и экспертиза</li>
              <li>• коммуникация на русском и английском языках</li>
              <li>• понимаем задачи агентств и ожидания клиентов</li>
              <li>• быстро реагируем и предоставляем решения «под ключ»</li>
            </ul>
            <br />
            <i className="text-lg">Мы соединяем локальные возможности и привычный для партнёров уровень сервиса.</i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;