'use server'

import { auth } from "@clerk/nextjs/server";
import { createSuperbaseClient } from "@/lib/superbase";

export const createCompanion = async (formData: CreateCompanion) => {
  const { userId: author} = await auth();
  const superbase = createSuperbaseClient();
  
  const { data, error } = await superbase
    .from('Companions')
    .insert(
      {
        ...formData,
        author,
      }
    ).select()
  
  if( error || !data ) throw new Error(error?.message || 'Failed to create a companion')
  
  return data[0]
}
