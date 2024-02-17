import React from 'react';
import Link from 'next/link';

const BlogCard = ({ title, author, metaDesc,  slug}) => {
  return (
    <div className=" mx-auto bg-white rounded-x2 overflow-hidden shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 ">{title}</h2>
      <p className=" text-gray-600 mb-4 ">Author:  {author}</p>
      <p className="text-gray-600 mb-4 blog-meta-description">{metaDesc}</p>
      <Link href ={"/blogpost/"+slug}
      className="bg-purple-500 text-white px-4 py-2 rounded-md inline-block text-sm font-bold cursor-pointer">
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
