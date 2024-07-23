"use client";

import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import NavLink from "./navLink";
import { AnimatePresence, motion } from "framer-motion"
import Image from 'next/image';


const links = 
    [
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'About',
            url: '/about'
        },
        {
            title: 'Courses',
            url: '/courses'
        },
        {
            title: 'Contact',
            url: '/contact'
        },
        
    ]


const Navbar = () => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open){
          document.getElementById("nav")
        }
          },[open]);

    // framer varients
    const topVarients={
        closed:{
            rotate:0,
        },
        opened:{
            rotate:45,
            backgroundColor:'rgb(0, 0, 0)'
        }
    }

    const centerVarients={
        closed:{
            opacity:1,
        },
        opened:{
            opacity:0,
        }
    }

    const bottomVarients={
        closed:{
            rotate:0,
            
        },
        opened:{
            rotate:-45,
            backgroundColor:'rgb(0, 0, 0)'
        }
    }

    const itemVariants = {
        closed: {
          opacity: 0
        },
        open: { opacity: 1 }
      };
      const sideVariants = {
        closed: {
          transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
          }
        },
        open: {
          transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
          }
        }
      };

  return (
    <div  className="h-full flex items-center justify-between px-5 lg:px-8 xl:px-14 text-md ">
        {/* LOGO */}
        <div className=' lg:flex justify-start'> 
            <Link href='/' className=' text-black font-semibold flex items-center justify-center'>
                <div className=' text-[20px]'>
                              <Image src='/alslogo.png' width={150} height={50} alt="ALS Medical"/>

                </div>
            </Link>
        </div>
        {/* NAVIGATION LINKS */}
        <div className="hidden lg:flex gap-20 text-black" >
            {links.map(link=>(
                <NavLink link={link} key={link.title}/>
            ))}
        </div>     

        {/* RESPONSIVE MENU */}
        <div className='lg:hidden  '> 
        {/* button MENU */}
        <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={(()=>setOpen((!open)))}>
            <motion.div variants={topVarients} 
                        animate={open ? "opened" : "closed"} 
                        className='w-10 h-1 bg-black rounded-xl origin-left'>

            </motion.div>
            <motion.div variants={centerVarients} 
                        animate={open ? "opened" : "closed"} 
                        className='w-10 h-1 bg-black rounded-xl'>
            </motion.div>
            <motion.div variants={bottomVarients} 
                        animate={open ? "opened" : "closed"} 
                        className='w-10 h-1 bg-black rounded-xl origin-left'>
            </motion.div>
        </button>
        {/* Menu List */}

        

        </div>

    </div>
  )
}

export default Navbar