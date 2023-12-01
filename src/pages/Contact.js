import React from 'react'
import '../style/contactStyle.css'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <>
      <div className='contact-mainStyle'>        
          <h1 className='header'>Contact</h1>        
        <div>        
          <section class="grid">
            <div class="card">test_card_template</div>
            <div class="card">test_card_template</div>
            <div class="card">test_card_template</div>
          </section>        
        </div>
        <div>
        <ContactForm />
        </div>
      </div>      
    </>


  )
}

export default Contact