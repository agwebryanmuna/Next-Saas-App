'use client'

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { subjects } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const SubjectFilter = () => {
  const pathname = usePathname()
  const router = useRouter();
  const searchParams = useSearchParams()
  const query = searchParams.get("subject") || ''
  
  const [subject, setSubject] = useState(query);
  
  const handleSearch =  () => {
      const params = new URLSearchParams(searchParams);
      if (subject) {
        params.set('subject', subject);
      } else {
        params.delete('subject');
      }
      router.replace(`${pathname}?${params.toString()}`);
  }
  
  useEffect(() => {
    handleSearch();
  }, [subject]);
  
  return (
    <Select onValueChange={setSubject} value={subject}>
      <SelectTrigger className="input capitalize">
        <SelectValue placeholder="Subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All subjects</SelectItem>
        {subjects.map((subject) => (
          <SelectItem key={subject} value={subject} className="capitalize">
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
export default SubjectFilter
