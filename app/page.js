"use client"

import Navbar from "@/app/component/navbar";
import { Client, Databases, ID } from "appwrite";
// import { loadBindings } from "next/dist/build/swc";
import BlogCard from "@/app/component/BlogCard"
import {useEffect, useState} from "react";

export default function Home() {
  const client = new Client();

const [blogs, setBlogs] = useState([])


  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65cb378e9f77a98e15bc');
  
const databases = new Databases(client);
    let promise = databases.listDocuments(
     '65cb3d2285a7df48ae76',
     '65cb3d30d679ed1ead8e',
      []
  );
  
  promise.then(function (response) {
      console.log(response);
      setBlogs(response.documents)

  }, function (error) {
      console.log(error);
  });

  function extractText(htmlString) {
    // Strip HTML tags from the input string
    const strippedString = htmlString.replace(/<[^>]*>/g, '');
  
    // Extract the first 100 characters
    const extractedText = strippedString.substring(0, 100);
  
    // Add "..." if there are more than 100 characters in the original string
    const finalText = strippedString.length > 100 ? extractedText + "..." : extractedText;
  
    return finalText;
  }

  return (
  <>
  
 <Navbar/>                         
 <div className="container mx-10 mt-8   ">
      <h1 className=" text-3xl font-bold mb-6">Latest Blog</h1>
      <div className= ""> 

{blogs.length==0 && "Loading...."}

{blogs.map((blog, index)=>
(
  <BlogCard key={index} {...blog} metaDesc={extractText(blog.content) }/>
))}

      </div>
      
    </div>
  
  </>
  );
}
