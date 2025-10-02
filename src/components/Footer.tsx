import { PortableText, SanityDocument } from "next-sanity";

function Footer({ contacts, eng }: { contacts: SanityDocument[], eng: boolean }) {
  return(
    <footer id='contacts' className="bg-(--color-secondary)/80">
      <div className="container max-w-7xl mx-auto py-16 px-8">
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <h1 className="w-full text-center text-3xl md:text-4xl">{eng ? 'CONTACTS' : 'КОНТАКТЫ'}</h1>
          {contacts.map((contact) => (
            <div key={contact._id}>
              {eng ? (
                Array.isArray(contact.content_en) && <PortableText value={contact.content_en} />
              ) : (
                Array.isArray(contact.content_ru) && <PortableText value={contact.content_ru} />
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;