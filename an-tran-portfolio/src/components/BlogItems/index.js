import React from 'react';
import './blogs.scss';
import pictures from '../../assests/pictures/Computer3.jpg';

const BlogItem = ({ id, title, date, content }) => {
  return (
    <div key={id} className='blogs__child'>
      <img
        className='blogs__cl1'
        src={pictures}
        width='480'
        height='350'
        alt='The picture'
      />
      <article className='blogs__cl2'>
        <h3 id='about1'>{title}</h3>
        <span>{date}</span>
        <p>{content}</p>
        <button className='blogs__button' id='lk1' aria-labelledby='lk1 about1'>
          Read more
        </button>
      </article>
    </div>
  );
};

export default BlogItem;
