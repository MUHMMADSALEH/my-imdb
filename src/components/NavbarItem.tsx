"use client"

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const NavbarItem = ({title,param}:{title:string,param:string}) => {
    const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  return (
    <Link href={`/?genre=${param}`}>
        <span className={`hover:text-amber-600 font-semibold ${genre===param?'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg':''}`}>{title}</span>
    </Link>
  )
}

export default NavbarItem