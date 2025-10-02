type ChildProps = {
  txt:string;
  link:string;
  onClick?: () => void;
};

export default function Navlink ({txt, link, onClick}:ChildProps){
  return(
    <a 
      {...(link !== "none" ? {href:link} : {})}
      className={`relative p-2 flex font-[600] items-center rounded-t-lg before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-white before:-bottom-0 before:left-0 before:origin-right before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 hover:before:origin-left text-white ${link === 'none' ? 'cursor-default' : ''}`}
      onClick={onClick}
    >
      {txt}
    </a>
  );
}