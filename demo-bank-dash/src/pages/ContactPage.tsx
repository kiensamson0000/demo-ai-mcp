import React from "react";

// Import profile images
import jasonPrice from "../assets/jason-price.png";
import duaneDean from "../assets/duane-dean.png";
import jonathanBarker from "../assets/jonathan-barker.png";
import rosieGlover from "../assets/rosie-glover.png";
import patrickGreer from "../assets/patrick-greer.png";
import darrellOrtega from "../assets/darrell-ortega.png";

interface ContactCardProps {
  name: string;
  email: string;
  image: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ name, email, image }) => {
  return (
    <div className="contact-card rounded-2xl bg-white border border-[#B9B9B9] shadow-[6px_6px_54px_0px_rgba(0,0,0,0.03)] overflow-hidden">
      {/* Image Section */}
      <div className="h-48 overflow-hidden rounded-t-2xl">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col items-center">
        <h3 className="text-[#202224] text-base font-bold mb-1">{name}</h3>
        <p className="text-[#202224] text-sm opacity-60 mb-4">{email}</p>

        {/* Message Button */}
        <button className="message-btn bg-[#4C82FF] text-white font-bold text-sm tracking-[2.3%] py-2 px-4 rounded-md w-full">
          Message
        </button>
      </div>
    </div>
  );
};

const ContactPage: React.FC = () => {
  const contacts = [
    {
      id: 1,
      name: "Jason Price",
      email: "kuhlman.jermey@yahoo.com",
      image: jasonPrice,
    },
    {
      id: 2,
      name: "Duane Dean",
      email: "rusty.botsford@wilfrid.io",
      image: duaneDean,
    },
    {
      id: 3,
      name: "Jonathan Barker",
      email: "cora_haley@quinn.biz",
      image: jonathanBarker,
    },
    {
      id: 4,
      name: "Rosie Glover",
      email: "lockman.marques@hotmail.com",
      image: rosieGlover,
    },
    {
      id: 5,
      name: "Patrick Greer",
      email: "pearlie.eichmann@trevion.net",
      image: patrickGreer,
    },
    {
      id: 6,
      name: "Darrell Ortega",
      email: "chaya.shields@ferry.info",
      image: darrellOrtega,
    },
  ];

  return (
    <main className="px-8 py-6">
      {/* Header */}
      <h1 className="text-[#202224] text-3xl font-bold mb-8">Contact</h1>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            name={contact.name}
            email={contact.email}
            image={contact.image}
          />
        ))}
      </div>

      {/* Add New Contact Button */}
      <div className="mt-4">
        <button className="add-contact-button bg-[#4379EE] text-white font-bold py-3 px-6 rounded-md hover:bg-[#3668d8]">
          Add New Contact
        </button>
      </div>
    </main>
  );
};

export default ContactPage;
