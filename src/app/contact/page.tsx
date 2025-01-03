import Link from 'next/link'
import React from 'react'

const Contact  = () => {
  return (
    <main className='font-sans'>
        <div className='m-2 my-56 sm:m-4 sm:my-36'>
        <h1 className='text-2xl font-bold sm:text-3xl font-bold '>Contact :</h1>
        <p className='text-lg sm:text-2xl'>Id love to hear from you! Whether you have a question, 
            feedback, or a project in mind, feel free to reach out. Contact us today, and lets create 
            something amazing together!
        </p>
        <div className='m-2 flex gap-6 sm:m-2 flex gap-3'>
        <Link href="https://www.linkedin.com/in/umar-ali-64b379307" target='_blank'>
        <button className='bg-blue-600 px-5 py-2 rounded-md text-lg font-semibold hover:shadow-lg hover:shadow-black'>LinkedIn</button>
        </Link>

        <Link href="https://github.com/Umar-Ali226" target='_blank'>
        <button className='bg-blue-600 px-5 py-2 rounded-md text-lg font-semibold hover:shadow-lg hover:shadow-black'>GitHub</button>
        </Link>

        <Link href="https://vercel.com/umar-alis-projects-c440ddd9" target='_blank'>
        <button className='bg-blue-600 px-5 py-2 rounded-md text-lg font-semibold hover:shadow-lg hover:shadow-black'>Vercel</button>
        </Link>
        </div>
        </div>
    </main>
  )
}

export default Contact