
'use client';
import React from 'react'
import CommentSection from "@/components/CommentSection/page";
import Image from 'next/image';
import image1 from "../../../../public/js.jpg";
import image2 from "../../../../public/python.png";
import image3 from "../../../../public/java.png";
import image4 from "../../../../public/c++.png";
import image5  from "../../../../public/ruby.png";
import image6 from "../../../../public/swift.png";


const posts = [
{
    id: "javascript",
    image: image1,
    title1:"What is JavaScript ?",
    description1: "JavaScript is a versatile programming language used to add interactivity and functionality to websites. It works alongside HTML and CSS, enabling dynamic features like animations, form validation, real-time updates, event handling, DOM manipulation, and API integration.",
    title2: "A Brief History",
    description2: "Developed in 1995 by Brendan Eich, JavaScript quickly became a cornerstone of web development. Modern JavaScript, enhanced by ES6 and beyond, includes advanced features like modules, arrow functions, and asynchronous programming, making it powerful and efficient.",
    title3: "How Does JavaScript Work? ",
    description3: "JavaScript can be embedded directly in HTML or linked through external files. It manipulates the Document Object Model (DOM), allowing developers to dynamically update content, respond to user input, and create interactive elements. For instance, JavaScript can validate form entries or show/hide elements on a webpage.",
    title4: "Why Learn JavaScript?",
    description4: 'With its simplicity, versatility, and broad range of applications, Python remains one of the most popular and useful programming languages today.'
},
{
    id: "python",
    image: image2,
    title1: "What is Python ?",
    description1: "Python is a high-level, general-purpose programming language created by Guido van Rossum in 1991. It is known for its readability and simplicity, making it an excellent choice for both beginners and experienced developers.",
    title2: "Why Python is Popular ?",
    description2: "Python’s clean and concise syntax makes it beginner-friendly, while its vast range of libraries and frameworks caters to experienced developers. It's used in various fields, including web development, data science, machine learning, and automation. Libraries like Django, Flask, Pandas, NumPy, and TensorFlow allow developers to build powerful applications and perform complex tasks with minimal code.",
    title3: "Key Features of Python :",
    description3: "Python is object-oriented and supports multiple programming paradigms. It’s cross-platform, meaning it works across different operating systems like Windows, macOS, and Linux. The Python community is large and active, contributing to its ongoing growth.",
    title4: "Conclusion",
    description4: 'With its simplicity, versatility, and broad range of applications, Python remains one of the most popular and useful programming languages today.'
},

{
    id: "java",
    image: image3, 
    title1: "What is Java ?",
    description1: "Java is a general-purpose, object-oriented programming language created by James Gosling and Mike Sheridan at Sun Microsystems in 1991. It is known for its write once, run anywhere philosophy, meaning Java code can run on any device with a Java Virtual Machine (JVM).  ",
    title2: "Why Java is popular :",
    description2: "Java's portability, security, and scalability make it ideal for large-scale enterprise applications, mobile apps (Android), and web development. It is widely used in banking systems, e-commerce, and cloud-based applications. Java’s vast ecosystem of libraries and frameworks such as Spring, Hibernate, and JavaFX contributes to its popularity.",
    title3: "Key features of Java :",
    description3: "Java is platform-independent, robust, and supports multithreading, making it suitable for high-performance applications. It also provides automatic memory management through garbage collection, which helps developers avoid memory leaks.",
    title4: "Conclusion",
    description4: "Java remains one of the most popular programming languages, offering reliability, security, and extensive libraries for various types of software development."
},

{
    id: "c++",
    image: image4,
    title1: "What C++ ?",
    description1: "C++ is a general-purpose, object-oriented programming language created by Bjarne Stroustrup in 1979 as an extension of the C language. It’s widely used for system software, game development, and high-performance applications.",
    title2: "Why C++ is popular ?",
    description2: "C++ provides a combination of low-level memory manipulation and high-level abstractions, offering developers the flexibility to optimize performance while maintaining code structure. It’s commonly used in areas requiring high performance, such as real-time systems, games, and embedded systems. The language’s ability to control hardware resources directly makes it ideal for applications that demand efficiency and speed.",
    title3: "Key features of C++",
    description3: "C++ supports object-oriented programming, allowing for the creation of classes and objects. It also offers features like pointers, memory management, and a wide range of libraries that simplify complex tasks. C++ is platform-independent and can be used to develop software for various operating systems.",
    title4: "Conclusion",
    description4: "C++ remains a crucial language for developers building performance-critical applications, offering speed, control, and versatility."
},

{
    id: "ruby",
    image: image5,
    title1: "What is Ruby ?",
    description1: "Ruby is an open-source, high-level, object-oriented programming language created by Yukihiro Matz Matsumoto in 1993. Known for its simplicity and readability, Ruby is designed to be developer-friendly, making it easy to learn and use.",
    title2: "Why Ruby is popular ?",
    description2: "Ruby is particularly popular for web development, thanks to the Ruby on Rails framework, which allows developers to build powerful web applications quickly. Its elegant syntax promotes productivity, making it a go-to choice for startups and rapid prototyping. Ruby's active community and vast library of gems (reusable code libraries) further contribute to its appeal.",
    title3: "Key features of Ruby :",
    description3: "Ruby is dynamically typed, supports object-oriented and functional programming, and offers powerful built-in methods and tools. It also emphasizes convention over configuration, which speeds up development by making assumptions about what developers want to do.",
    title4: "Conclusion",
    description4: "Ruby’s simplicity, versatility, and powerful frameworks make it an excellent choice for both beginners and experienced developers, especially in web development."
},

{
    id: "swift",
    image: image6,
    title1: "What is JavaScript ?",
    description1: "Swift is a general-purpose, compiled programming language developed by Apple in 2014. It is designed for iOS, macOS, watchOS, and tvOS application development, offering modern syntax and advanced features while maintaining safety and performance.",
    title2: "Why Swift is popular ?",
    description2: "Swift is known for its speed, safety, and ease of use. Unlike its predecessor Objective-C, Swift is less error-prone and has a clean, readable syntax, making it easier for developers to write and maintain code. Swift’s automatic memory management and robust error-handling mechanisms help ensure stability in applications.",
    title3: "Key features of Swift :",
    description3: "Swift supports object-oriented and functional programming paradigms, and its advanced features include optional types, closures, and generics. It also integrates well with Apple’s frameworks like UIKit, SwiftUI, and Core Data, enabling developers to create dynamic and user-friendly applications.",
    title4: "Conclusion",
    description4: "Swift has quickly become a top choice for developers working within the Apple ecosystem, providing the tools to create high-performance and secure applications."
}

];

export default function Post({ params }: { params: { id: string } }) {
    const { id } = params;
    const post = posts.find((p) => p.id === id);

    if(!post) {
        return (
            <h2 className='text-2xl font-bold text-center my-32'>Post Not Found</h2>
        );
    }
    
    const renderParagraphs = (description: string ) => {
        return description.split("/n").map((para, index) => (
            <p key={index} className='mt-4 text-justify'>
                {para.trim()}{""}
                </p>
        ));
    };

    return (
        <main>
            <div className='min-h-screen container mx-auto px-4 xs:px-6 sm:px-52 m-3'>
    <div className='border rounded-md p-2 shadow-md hover:shadow-lg transition'>
        <div className='flex justify-center'>
{post.image && (
    <Image 
    src={post.image} 
    alt='JavaScript Image'
    height={500}
    width={800}
    className='rounded-md m-2'></Image>
)}
</div>
<div className='px-4'>
            <h1 className='text-2xl sm:text-3xl font-bold mt-5'>
                {post.title1}
                </h1> 
  <div className='text-md sm:text-lg mt-0'>
    {renderParagraphs(post.description1)} 
</div>
<h1 className='text-2xl sm:text-3xl font-bold mt-5'>
                {post.title2}
                </h1> 
  <div className='text-md sm:text-lg mt-0'>
    {renderParagraphs(post.description2)} 
</div>
<h1 className='text-2xl sm:text-3xl font-bold mt-5'>
                {post.title3}
                </h1> 
  <div className='text-md sm:text-lg mt-0'>
    {renderParagraphs(post.description3)} 
</div>
<h1 className='text-2xl sm:text-3xl font-bold mt-5'>
                {post.title4}
                </h1> 
  <div className='text-md sm:text-lg mt-0'>
    {renderParagraphs(post.description4)} 
</div>
</div>
</div>
</div>
<div className='pb-5 sm:pb-8'>
<CommentSection />
</div>
        </main>
    )
};

