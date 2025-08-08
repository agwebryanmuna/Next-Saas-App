import CTA from "@/components/CTA";
import HomeCompanions from "@/components/HomeCompanions";
import HomeRecentSessions from "@/components/HomeRecentSessions";

export default async function Home() {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      
      <section className='companions-grid'>
        <HomeCompanions />
      </section>
      
      <section className='home-section'>
        <HomeRecentSessions />
        <CTA />
      </section>
    </main>
  )
}
