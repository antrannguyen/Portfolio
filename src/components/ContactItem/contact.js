import React from 'react';
import './contact.scss';

const ContactItem = () => {
  return (
    <section title='Contact' className='contact'>
      <h2 className='titleSection' id='contact'>
        Contact
      </h2>
      <div className='contact__container'>
        <form className='contact__form'>
          <div className='id'>
            <div className='name'>
              <label htmlFor='name'>Name</label>
              <input id='name' type='text' name='name' />
            </div>
            <div className='email'>
              <label htmlFor='email'>Email</label>
              <input id='email' type='text' name='email' />
            </div>
          </div>
          <div className='subject'>
            <label htmlFor='subject'>Subject</label>
            <input id='subject' type='text' name='subject' />
          </div>
          <div className='content'>
            <label id='content' htmlFor='content'>
              Content
            </label>
            <textarea name='content' cols='30' rows='10'></textarea>
            <button type='submit'>SUBMIT</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactItem;
