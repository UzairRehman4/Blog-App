import Link from 'next/link';
import React from 'react';

const BlogCard = ({ title, author, metaDesc, readMoreLink, slug }) => {
      return (
            <div className="  bg-white rounded-xl overflow-hidden shadow-lg p-6 mb-6 ">
                  <h2 className="text-1xl font-bold mb-4">{title}</h2>
                  <p className="text-gray-700 mb-4">{metaDesc}</p>
                  <p className="text-gray-600 mb-4 text-sm font-bold">Author: {author}</p>

                  <Link href={"/blogpost/" + slug}
                        className="bg-green-300 hover:bg-green-400 px-4 py-2 rounded-md inline-block cursor-pointer">
                        Read More
                  </Link>

            </div>
      );
};

export default BlogCard;
