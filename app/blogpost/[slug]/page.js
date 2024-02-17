"use client"

import React from 'react'
import Navbar from '@/app/component/navbar'
import { Client, Databases, ID , Query } from "appwrite";
import { useState } from 'react'


export default function Page({ params }) {

  const [blog, setBlog]=useState()
  const client = new Client();

const [blogs, setBlogs] = useState([])


  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65cb378e9f77a98e15bc');
  
const databases = new Databases(client);
    let promise = databases.listDocuments(
     '65cb3d2285a7df48ae76',
     '65cb3d30d679ed1ead8e',
      [
        Query.equal('slug', params.slug)
      ]
  ); 
  
  promise.then(function (response) {
      console.log(response);
      setBlog(response.documents[0])

  }, function (error) {
      console.log(error);
  });

  
    return (
<>
  
  <Navbar/>                         
  <div className="container mx-10 mt-8   ">
       <h1 className=" text-3xl font-bold mb-6">{"Blog Title"}</h1>
       <div className= ""> 
       { !blog && "Loading...."}
       <div className='text-sm font-bold'> Author: {blog?.author}  </div>
 <div className='shadow-xl p-10 '  dangerouslySetInnerHTML={{__html: blog?.content}}>
  
</div>
 
 
 
 
       </div>
       
     </div>
   
   </>




    )
  }
