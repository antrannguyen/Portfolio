import React from 'react';
import blogs from '../../assests/Data/blogs';
import BlogItem from '../../components/BlogItems/';

const Blogs = () => {
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

export default Blogs;
