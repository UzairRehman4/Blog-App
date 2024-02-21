'use client';
import Image from 'next/image';
import { Client, Databases, ID } from 'appwrite';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import BlogCard from './components/BlogCard';

export default function Home() {
  const client = new Client();
  const [blogs, setBlogs] = useState([]);

  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65d4e6881b8163e75c40');

  const databases = new Databases(client);

  let promise = databases.listDocuments(
    '65d4f367b0bb8d91d21d',
    '65d4fe8b88a409f0c18c',
    []
  );

  promise.then(
    function (response) {
      console.log(response);
      setBlogs(response.documents);
    },
    function (error) {
      console.log(error);
    }
  );
  function extractFirst100Characters(htmlString) {
    // Remove HTML tags from the input string
    const text = htmlString.replace(/<[^>]*>/g, '');

    // Extract the first 100 characters
    const first100Characters = text.substring(0, 100);

    // Add ellipsis if there are more than 100 characters
    const truncatedText =
      text.length > 100 ? first100Characters + '...' : first100Characters;

    return truncatedText;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-aut mt-10">
        <h1 className="text-3xl font-bold mb-11 text-center">Latest Blogs</h1>
        <div className="w-9/12 m-auto ">
          {blogs.length == 0 && 'Loading...'}
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              {...blog}
              metaDesc={extractFirst100Characters(blog.content)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
