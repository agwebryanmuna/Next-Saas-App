'use client'

import React, { useState } from 'react'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const SearchInput = () => {
  const pathname = usePathname()
  const router = useRouter();
  const searchParams = useSearchParams()
  const query = searchParams.get("topic") || ''
  
 const handleSearch = (topic: string) => {
   setTimeout(() => {
     const params = new URLSearchParams(searchParams);
     if (topic) {
       params.set('topic', topic);
     } else {
       params.delete('topic');
     }
     router.replace(`${pathname}?${params.toString()}`);
   }, 500)
 }
  
  
  return (
    <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
      <Image src="/icons/search.svg" alt="search" width={15} height={15} />
      <input
        placeholder="Search companions..."
        className="outline-none"
        defaultValue={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  )
}
export default SearchInput
