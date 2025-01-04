'use client'
import Image from "next/image";
import image1 from "../../public/js.jpg"
import image2 from "../../public/python.png"
import image3 from "../../public/java.png"
import image4 from "../../public/c++.png"
import image5  from "../../public/ruby.png"
import image6 from "../../public/swift.png"
import Link from "next/link";

export default function Home() {
  return (
   <main className="font-sans">
   <div className="flex flex-col items-center m-2 gap-0 text-3xl sm:text-3xl sm:flex-row font-bold sm:gap-2 px-3 py-4 justify-center">
      <h1 className="">Blogs about</h1>
      <h1 className="text-blue-600"> programming</h1>
      <h1> languages :</h1>
    </div>
    <div className="grid grid-cols-1 m-2 sm:grid-cols-2 sm:m-4 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      <div className="border rounded-md p-2 shadow-md hover:shadow-lg transition">
        <Image src={image1} alt="JS_Image" height={300} width={500} className="rounded-md"></Image>
        <div className="m-3">
          <h1 className="font-bold text-xl">WHAT IS JAVASCRIPT ?</h1>
        <p className="text-lg">JavaScript is a versatile programming language used to add interactivity and functionality to websites. 
          It works alongside HTML and CSS, enabling dynamic features like animations, form validation, 
          and real-time updates.</p>
          </div>
          <Link href="/posts/javascript">
          <button className="text-blue-800 rounded-lg m-2 ml-3 mt-0 px-4 hover:bg-blue-600 hover:text-black">
      Read more...
    </button>
    </Link>
    <p className="text-[12px] flex justify-end items-end p-1 pb-0 font-semibold pr-2">Published on JAN-2025</p>
      </div>
      <div className="border rounded-md p-4 shadow-md hover:shadow-lg transition">
      <Image src={image2} alt="Python_Image" height={300} width={500} className="rounded-md"></Image>
      <div className="m-3">
          <h1 className="font-bold text-xl">WHAT IS PYTHON ?</h1>
        <p className="text-lg">Python is a high-level, general-purpose programming language created 
          by Guido van Rossum in 1991. It is known for its readability and simplicity, making it an 
          excellent choice for both beginners and experienced developers.</p>
          </div>
          <Link href="/posts/python">
          <button className="text-blue-800 rounded-lg m-2 ml-3 mt-0 px-4 hover:bg-blue-600 hover:text-black">
      Read more...
    </button>
    </Link>
      <p className="text-[12px] flex justify-end items-end p-1 pb-0 font-semibold pr-2">Published on DEC-2024</p>
      </div>
      
      <div className="border rounded-md p-4 shadow-md hover:shadow-lg transition">
      <Image src={image3} alt="JAVA_Image" height={300} width={500} className="rounded-md"></Image>
      <div className="m-3">
          <h1 className="font-bold text-xl">WHAT IS JAVA ?</h1>
        <p className="text-lg">Java is a general-purpose, object-oriented programming language created 
          by James Gosling and Mike Sheridan at Sun Microsystems in 1991. It is known for its write once, 
          run anywhere philosophy, meaning Java code can run</p>
          </div>
          <Link href="/posts/java">
          <button className="text-blue-800 rounded-lg m-2 ml-3 mt-0 px-4 hover:bg-blue-600 hover:text-black">
      Read more...
    </button>
    </Link>
      <p className="text-[12px] flex justify-end items-end p-1 pb-0 font-semibold pr-2">Published on NOV-2024</p>
      </div>

      <div className="border rounded-md p-4 shadow-md hover:shadow-lg transition">
      <Image src={image4} alt="C++_Image" height={300} width={500} className="rounded-md"></Image>
      <div className="m-3">
          <h1 className="font-bold text-xl">WHAT IS C++ ?</h1>
        <p className="text-lg">C++ is a general-purpose, object-oriented programming language created 
          by Bjarne Stroustrup in 1979 as an extension of the C language. It’s widely used for system software,
           game development, and high-performance applications.</p>
          </div>
          <Link href="/posts/c-plus-plus">
          <button className="text-blue-800 rounded-lg m-2 ml-3 mt-0 px-4 hover:bg-blue-600 hover:text-black">
      Read more...
    </button>
    </Link>
      <p className="text-[12px] flex justify-end items-end p-1 pb-0 font-semibold pr-2">Published on NOV-2024</p>
      </div>

      <div className="border rounded-md p-4 shadow-md hover:shadow-lg transition">
      <Image src={image5} alt="Ruby_Image" height={300} width={500} className="rounded-md"></Image>
      <div className="m-3">
          <h1 className="font-bold text-xl">WHAT IS RUBY ?</h1>
        <p className="text-lg">Ruby is an open-source, high-level, object-oriented programming language created
           by Yukihiro Matz Matsumoto in 1993. Known for its simplicity and readability, 
           Ruby is designed to be developer-friendly, making it easy to learn and use.</p>
          </div>
          <Link href="/posts/ruby">
          <button className="text-blue-800 rounded-lg m-2 ml-3 mt-0 px-4 hover:bg-blue-600 hover:text-black">
      Read more...
    </button>
    </Link>
      <p className="text-[12px] flex justify-end items-end p-1 pb-0 font-semibold pr-2">Published on OCT-2024</p>
      </div>

      <div className="border rounded-md p-4 shadow-md hover:shadow-lg transition">
      <Image src={image6} alt="Swift_Image" height={300} width={500} className="rounded-md"></Image>
      <div className="m-3">
          <h1 className="font-bold text-xl">WHAT IS SWIFT ?</h1>
        <p className="text-lg">Swift is a general-purpose, compiled programming language developed 
          by Apple in 2014. It is designed for iOS, macOS, watchOS, and tvOS application development,
           offering modern syntax and advanced features while maintaining safety.</p>
          </div>
          <Link href="/posts/swift">
          <button className="text-blue-800 rounded-lg m-2 ml-3 mt-0 px-4 hover:bg-blue-600 hover:text-black">
      Read more...
    </button>
    </Link>
      <p className="text-[12px] flex justify-end items-end p-1 pb-0 font-semibold pr-2">Published on OCT-2024</p>
      </div>
      </div>
   </main>
  );
}
