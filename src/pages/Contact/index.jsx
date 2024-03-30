import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "../../components/ContactCard";
import "../../style/contactPageStyle.css";
import PDF from "../../doc/GabrielDMonteiro_Resume.pdf"

function Contact() {
  const contacts = require("../../contacts.json");
  return (
    <>    
      <div className="contact-mainStyle">        
        <div className="header-content">
          <span id="back-arrow-span">
            <Link
              to="/gabrieldmonteiro_/"
              className="prevent-select"
              id="back-arrow"
            >
              &#10229;
            </Link>
          </span>
          <h1>Contact</h1>
        </div>
        <main>
        <section class="grid">
            {contacts.map((contact) => (
               <ContactCard
               key={contact.id}
               image={contact.image}
               name={contact.name}             
               url={contact.url!=="PDF"? contact.url : PDF}
             />
            ))}
          </section>
        </main>
      </div>      
    </>
  );
}

export default Contact;
