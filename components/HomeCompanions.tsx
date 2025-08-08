import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import { getSubjectColor } from "@/lib/utils";
import { getAllCompanions } from "@/lib/actions/companions.action";

const HomeCompanions = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  return (
    <>
      {companions?.reverse().map((companion, index) => (
        <CompanionCard
          key={index}
          {...companion}
          color={getSubjectColor(companion.subject)}
        />
      ))}
    </>
  )
}
export default HomeCompanions
