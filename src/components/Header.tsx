import React from 'react'
import { IoMenu } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link';


const Header = () => {
  return (
    <main>
        <div className='bg-blue-600 flex justify-between font-sans p-2'>
  <div className='text-2xl font-bold sm:text-3xl font-bold'>
        UmarsBlog
    </div>
    <div >
    <Sheet>
  <SheetTrigger className='text-3xl'><IoMenu /></SheetTrigger>
  <SheetContent>
  <ul>
  <li><Link href="/">Blogs</Link></li>
    </ul>
  </SheetContent>
</Sheet>
</div>
    </div>
    </main>
  )
}

export default Header