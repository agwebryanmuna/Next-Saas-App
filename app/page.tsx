import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      
      <section className='home-section'>
        <CompanionCard
          id='123'
          name='Neura the Brainy Explorer'
          topic='How to build a brain'
          subject='Science'
          duration={120}
          color='#000'
          bookmarked={false}
        />
        <CompanionCard
          id='124'
          name='Neura the Brainy Explorer'
          topic='How to build a brain'
          subject='Science'
          duration={120}
          color='#ddd'
          bookmarked={false}
        />
        <CompanionCard
          id='125'
          name='Neura the Brainy Explorer'
          topic='How to build a brain'
          subject='Science'
          duration={120}
          color='#ff0000'
          bookmarked={false}
        />
      </section>
      
      <section className='home-section'>
        <CompanionsList
          title='Recently completed sessions'
          companions={recentSessions}
          classNames='w-2/3 max-lg:w-full'
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page
