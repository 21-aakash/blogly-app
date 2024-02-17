"use client"

import { Client, Databases, ID } from "appwrite";

import {useEffect, useState} from "react";

export default function Home() {
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65cb378e9f77a98e15bc');
    const databases = new Databases(client);
    let a=[

      
        {
          "title": "Learn JavaScript",
          "content": "<p>JavaScript is a versatile programming language used primarily for creating interactive web pages and web applications. It is a cornerstone technology for web development alongside HTML and CSS.</p><p>Learning JavaScript opens up a world of possibilities in web development. Whether you're a beginner or an experienced programmer looking to expand your skills, mastering JavaScript is essential.</p><p>Here are some key concepts to focus on when learning JavaScript:</p><ul><li><strong>Variables and Data Types:</strong> Understanding how to declare variables and work with different data types such as strings, numbers, and arrays is fundamental.</li><li><strong>Functions:</strong> Functions allow you to group code into reusable blocks, making your code more organized and efficient.</li><li><strong>Control Flow:</strong> Learn about conditional statements (if/else) and loops (for, while) to control the flow of your code.</li><li><strong>DOM Manipulation:</strong> The Document Object Model (DOM) is a programming interface that allows you to manipulate the structure and content of web pages. Mastering DOM manipulation is crucial for creating dynamic and interactive web applications.</li><li><strong>Events:</strong> JavaScript enables you to respond to user actions such as clicks, mouse movements, and keyboard inputs by using event handlers.</li><li><strong>AJAX and Fetch API:</strong> Asynchronous JavaScript and XML (AJAX) and the Fetch API allow you to make HTTP requests to fetch data from servers without reloading the entire web page.</li></ul><p>There are numerous resources available for learning JavaScript, including online tutorials, books, and interactive coding platforms. Some popular resources include:</p><ul><li><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript\" target=\"_blank\" rel=\"noopener\">MDN Web Docs</a></li><li><a href=\"https://www.codecademy.com/learn/introduction-to-javascript\" target=\"_blank\" rel=\"noopener\">Codecademy JavaScript Course</a></li><li><a href=\"https://www.udemy.com/topic/javascript/\" target=\"_blank\" rel=\"noopener\">Udemy JavaScript Courses</a></li></ul><p>Remember that learning JavaScript is an ongoing process, and practice is key to mastering the language. Start by building small projects and gradually work your way up to more complex applications. Don't be afraid to experiment and explore new concepts!</p>",
          "slug": "learn-javascript",
          "author": "John Doe",
          "views": "1024",
          "is_published": true
        },
        {
          "title": "Introduction to HTML",
          "content": "<p>HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications. It provides the structure and content of a web page by using a system of tags and attributes.</p><p>Learning HTML is essential for anyone interested in web development. Whether you're a beginner or an experienced developer, understanding HTML is the first step towards building websites and web applications.</p><p>Here are some key concepts to focus on when learning HTML:</p><ul><li><strong>HTML Elements:</strong> Elements are the building blocks of HTML documents. They consist of tags that define the structure and content of the page.</li><li><strong>HTML Attributes:</strong> Attributes provide additional information about HTML elements. They can be used to customize the appearance and behavior of elements.</li><li><strong>HTML Forms:</strong> Forms allow users to input data into a web page. They are essential for collecting user information and enabling interactions on the web.</li><li><strong>HTML5:</strong> HTML5 is the latest version of HTML, introducing new features and capabilities for modern web development. It includes elements for multimedia, graphics, and interactive content.</li></ul><p>There are many resources available for learning HTML, including online tutorials, books, and interactive coding platforms. Some popular resources include:</p><ul><li><a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML\" target=\"_blank\" rel=\"noopener\">MDN Web Docs</a></li><li><a href=\"https://www.w3schools.com/html/\" target=\"_blank\" rel=\"noopener\">W3Schools HTML Tutorial</a></li><li><a href=\"https://www.codecademy.com/learn/learn-html\" target=\"_blank\" rel=\"noopener\">Codecademy HTML Course</a></li></ul><p>Remember to practice regularly and experiment with different HTML elements and attributes to reinforce your learning. HTML is a foundational skill for web development, and mastering it will open up endless possibilities for creating websites and web applications!</p>",
          "slug": "introduction-to-html",
          "author": "Jane Smith",
          "views": "789",
          "is_published": true
        },
        {
          "title": "Introduction to CSS",
          "content": "<p>CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. It defines how elements should be displayed on a web page, including layout, colors, fonts, and more.</p><p>Learning CSS is essential for anyone interested in web development. By mastering CSS, you can create visually appealing and responsive web pages that engage users and enhance their browsing experience.</p><p>Here are some key concepts to focus on when learning CSS:</p><ul><li><strong>CSS Selectors:</strong> Selectors allow you to target HTML elements and apply styles to them. Understanding different types of selectors is crucial for effective styling.</li><li><strong>CSS Box Model:</strong> The box model describes how elements are rendered on a web page, including padding, borders, margins, and content.</li><li><strong>CSS Flexbox:</strong> Flexbox is a layout model that allows you to design flexible and responsive layouts with ease. It simplifies the process of creating complex layouts and aligning elements within a container.</li><li><strong>CSS Grid:</strong> CSS Grid is a powerful layout system that enables you to create grid-based layouts for organizing content on a web page. It provides precise control over the placement and alignment of elements.</li></ul><p>There are many resources available for learning CSS, including online tutorials, books, and interactive coding platforms. Some popular resources include:</p><ul><li><a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS\" target=\"_blank\" rel=\"noopener\">MDN Web Docs</a></li><li><a href=\"https://www.w3schools.com/css/\" target=\"_blank\" rel=\"noopener\">W3Schools CSS Tutorial</a></li><li><a href=\"https://www.codecademy.com/learn/learn-css\" target=\"_blank\" rel=\"noopener\">Codecademy CSS Course</a></li></ul><p>Remember to practice regularly and experiment with different CSS properties and techniques to enhance your skills. CSS is an essential tool for web developers, and mastering it will open up new opportunities for creating beautiful and engaging websites.</p>",
          "slug": "introduction-to-css",
          "author": "John Doe",
          "views": "1234",
          "is_published": true
        },
        
        {
          "title": "Getting Started with React",
          "content": "<p>React is a JavaScript library for building user interfaces, developed by Facebook. It allows you to create reusable UI components and manage the state of your application efficiently.</p><p>Learning React is essential for modern web development, especially for building single-page applications and dynamic user interfaces. With its component-based architecture and virtual DOM, React makes it easy to build fast and scalable web applications.</p><p>Here are some key concepts to focus on when learning React:</p><ul><li><strong>Components:</strong> Components are the building blocks of React applications. They encapsulate UI elements and logic, making it easier to maintain and reuse code.</li><li><strong>State and Props:</strong> React components can have state, which represents data that can change over time. Props allow you to pass data from parent to child components.</li><li><strong>JSX:</strong> JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It makes React components more readable and expressive.</li><li><strong>Virtual DOM:</strong> React uses a virtual DOM to optimize rendering performance. Instead of updating the entire DOM tree, React only updates the parts of the DOM that have changed.</li></ul><p>There are many resources available for learning React, including online tutorials, books, and interactive coding platforms. Some popular resources include:</p><ul><li><a href=\"https://reactjs.org/docs/getting-started.html\" target=\"_blank\" rel=\"noopener\">React Documentation</a></li><li><a href=\"https://www.udemy.com/course/react-redux/\" target=\"_blank\" rel=\"noopener\">Udemy React Course</a></li><li><a href=\"https://www.codecademy.com/learn/react-101\" target=\"_blank\" rel=\"noopener\">Codecademy React Course</a></li></ul><p>Remember to practice regularly and build small projects to reinforce your learning. React is a powerful tool for front-end development, and mastering it will make you a valuable asset in the web development industry.</p>",
          "slug": "getting-started-with-react",
          "author": "Jane Smith",
          "views": "567",
          "is_published": true
        },

        {
          "title": "Deep Dive into Data Science",
          "content": "<p>Data science is an interdisciplinary field that uses scientific methods, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It encompasses various techniques and tools, including statistics, machine learning, data visualization, and more.</p><p>Learning data science opens up exciting career opportunities in industries such as finance, healthcare, e-commerce, and technology. With the increasing demand for data-driven decision-making, data scientists play a crucial role in driving innovation and solving complex problems.</p><p>Here are some key concepts to focus on when diving into data science:</p><ul><li><strong>Statistics:</strong> Understanding basic statistical concepts is essential for analyzing and interpreting data. Topics such as probability, hypothesis testing, and regression analysis are fundamental for data science.</li><li><strong>Machine Learning:</strong> Machine learning algorithms enable computers to learn from data and make predictions or decisions without being explicitly programmed. Supervised learning, unsupervised learning, and deep learning are common subfields of machine learning.</li><li><strong>Data Visualization:</strong> Data visualization is the graphical representation of data to facilitate understanding and interpretation. Tools like Matplotlib, Seaborn, and Plotly allow you to create insightful visualizations that convey complex information effectively.</li><li><strong>Big Data:</strong> Big data refers to large and complex datasets that traditional data processing applications struggle to handle. Technologies like Hadoop and Spark enable distributed processing of big data, making it feasible to analyze and derive value from massive datasets.</li></ul><p>There are many resources available for learning data science, including online courses, books, and hands-on projects. Some popular resources include:</p><ul><li><a href=\"https://www.kaggle.com/learn/overview\" target=\"_blank\" rel=\"noopener\">Kaggle Courses</a></li><li><a href=\"https://www.coursera.org/specializations/jhu-data-science\" target=\"_blank\" rel=\"noopener\">Coursera Data Science Specialization</a></li><li><a href=\"https://www.datacamp.com/\" target=\"_blank\" rel=\"noopener\">DataCamp</a></li></ul><p>Remember to practice regularly and apply your knowledge to real-world datasets and problems. Data science is a dynamic field that requires continuous learning and experimentation to stay updated with the latest trends and technologies.</p>",
          "slug": "deep-dive-into-data-science",
          "author": "Emily Johnson",
          "views": "654",
          "is_published": true
        },
        {
          "title": "The Power of Python",
          "content": "<p>Python is a versatile and powerful programming language known for its simplicity and readability. It is widely used in various domains, including web development, data science, artificial intelligence, and more.</p><p>Learning Python opens up a world of opportunities for developers. Whether you're a beginner or an experienced programmer, Python's ease of use and extensive libraries make it an excellent choice for building applications of all kinds.</p><p>Here are some key concepts to focus on when learning Python:</p><ul><li><strong>Python Syntax:</strong> Python's syntax is clean and easy to read, making it ideal for beginners. Understanding basic syntax rules is essential for writing Python code.</li><li><strong>Data Structures:</strong> Python offers built-in data structures such as lists, tuples, dictionaries, and sets. Learning how to work with these data structures is fundamental for handling and organizing data efficiently.</li><li><strong>Control Flow:</strong> Python supports various control flow statements, including if/else, loops, and exception handling. Mastering control flow allows you to write structured and reliable code.</li><li><strong>Functions and Modules:</strong> Functions allow you to encapsulate code for reuse, while modules enable you to organize code into logical units. Understanding functions and modules is essential for building modular and maintainable applications.</li><li><strong>Python Libraries:</strong> Python has a vast ecosystem of libraries for different purposes, including NumPy for numerical computing, Pandas for data analysis, and Flask/Django for web development. Exploring and leveraging Python libraries can significantly boost your productivity as a developer.</li></ul><p>There are many resources available for learning Python, including online tutorials, books, and interactive coding platforms. Some popular resources include:</p><ul><li><a href=\"https://docs.python.org/3/tutorial/\" target=\"_blank\" rel=\"noopener\">Python Documentation</a></li><li><a href=\"https://www.codecademy.com/learn/learn-python-3\" target=\"_blank\" rel=\"noopener\">Codecademy Python Course</a></li><li><a href=\"https://www.udemy.com/topic/python/\" target=\"_blank\" rel=\"noopener\">Udemy Python Courses</a></li></ul><p>Remember to practice regularly and work on projects that interest you. Python's versatility and ease of use make it an excellent language for both beginners and experienced developers alike.</p>",
          "slug": "the-power-of-python",
          "author": "John Smith",
          "views": "987",
          "is_published": true
        }]

        
        

// for (let index = 0; index < a.length; index++) {
//    const element = a[index];
  
// }




// const promise = databases.createDocument(
//     '65cb3d2285a7df48ae76',
//     '65cb3d30d679ed1ead8e',
//     ID.unique(),
//    element
    
// )



// promise.then(function (response) {
//     console.log(response, "done");
// }, function (error) {
//     console.log(error);
// });
for (let index = 0; index < a.length; index++) {
  const element = a[index];
 
  const promise = databases.createDocument(
     '65cb3d2285a7df48ae76',
     '65cb3d30d679ed1ead8e',
     ID.unique(),
     element
  );
  
  // Process the promise as needed
  promise.then(function (response) {
     console.log(response, "done");
  }, function (error) {
     console.log(error);
  });
}

  return (
  <>
  
  navbar here 
<div>
  main page here 
</div>
  
  
  </>
  );
}
