import Cards from '@/components/Cards'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className='mb-20'>
      <Hero/>
      </section>
      <section className='w-full sm:w-[80%] mx-auto px-5 sm:px-0'>
        <Cards/>

      </section>
   

    </main>
  )
}
