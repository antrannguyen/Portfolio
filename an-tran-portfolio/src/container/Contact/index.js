import React from 'react';
import { contact, contactOtherDiv } from '../../assests/Data/contact';
// import contactOtherDiv from '../../assests/Data/contact';
import ContactItem from '../../components/ContactItem/contact';

const Contact = () => {
  return (
    <section title='Blogs' className='blogs'>
      <h2 className='titleSection' id='About'>
        Blogs
      </h2>
      {blogs.map((blog) => {
        return (
          <BlogItem
            title={blog.title}
            content={blog.content}
            id={blog.id}
            data={blog.date}
            img={blog.img}
          />
        );
      })}
    </section>
  );
};

export default Contact;
