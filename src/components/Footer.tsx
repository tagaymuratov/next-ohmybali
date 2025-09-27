function Footer(){
  return(
    <footer id='contacts' className="bg-(--color-secondary)/80">
      <div className="container max-w-7xl mx-auto py-16 px-8">
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <h1 className="w-full text-center text-3xl md:text-4xl">КОНТАКТЫ</h1>
          <div>
            <p>Александр Клочков</p>
            <p>RU: +7 969 018 8844</p>
            <p>KZ: +7 777 630 6911</p>
          </div>
          <div>
            <p>Полина Клочкова</p>
            <p>RU: +7 977 265 9370</p>
            <p>KZ: +7 705 847 83 47</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;