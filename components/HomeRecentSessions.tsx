import React from 'react'
import CompanionsList from "@/components/CompanionsList";
import { getRecentSessions } from "@/lib/actions/companions.action";

const HomeRecentSessions = async () => {
  const recentSessionsCompanions = await getRecentSessions(10);
  
  return (
    <>
      <CompanionsList
        title='Recently completed sessions'
        companions={recentSessionsCompanions}
        classNames='w-2/3 max-lg:w-full'
      />
    </>
  )
}
export default HomeRecentSessions
