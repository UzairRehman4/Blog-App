'use client'
import React from 'react'
import Navbar from '@/app/components/Navbar'
import { useState } from 'react'
import { Client, Databases, ID, Query } from 'appwrite';


export default function Page({ params }) {
      const [blog, setBlog] = useState()
      const client = new Client();
      const [blogs, setBlogs] = useState([]);

      client
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('65d4e6881b8163e75c40');

      const databases = new Databases(client);

      let promise = databases.listDocuments(
            '65d4f367b0bb8d91d21d',
            '65d4fe8b88a409f0c18c',
            [
                  Query.equal('slug', params.slug)
            ]
      );

      promise.then(
            function (response) {
                  console.log(response);
                  setBlog(response.documents[0]);
            },
            function (error) {
                  console.log(error);
            }
      );
      return (
            <>
                  <Navbar />
                  <div className="container mx-aut mt-10">
                        <h1 className="text-3xl font-bold mb-11 text-center">{blog?.title}</h1>
                        <div className="w-9/12 m-auto rounded ">
                              {!blog && 'Loading...'}
                              <div className='text-sm font-bold p-3 bg-slate-100'>Author: {blog?.author}</div>
                              <div className='shadow-xl p-7 bg-slate-100' dangerouslySetInnerHTML={{ __html: blog?.content }}></div>

                        </div>

                  </div >

            </>
      )
}
