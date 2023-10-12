"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';



const Nav = () => {
    const pathname=usePathname()

    return (
        <main className='w-full bg-white shadow-sm'>

        
        <section className='w-full sm:w-[80%] mx-auto px-5 sm:px-0'>
            <nav className='flex flex-col py-5 sm:py-10 sm:flex-row sm:justify-between sm:items-center'>
                <div className='text-center sm:text-left mb-5 sm:mb-0'>
                <Link href="/"><button className='text-3xl  text-blue-600 font-bold'>The Sky Foundation</button></Link>

                </div>
                <div className='flex justify-evenly gap-5 sm:gap-10'>
                    <Link className={`link ${pathname === '/' ? 'active border-b border-[#FF444A] font-bold text-[#FF444A]' : ''}`} href="/">Home</Link>
                    <Link className={`link ${pathname === '/donation' ? 'active border-b border-[#FF444A] font-bold text-[#FF444A]' : ''}`} href="/donation">Donation</Link>
                    <Link className={`link ${pathname === '/statistics' ? 'active border-b border-[#FF444A] font-bold text-[#FF444A]' : ''}`} href="/statistics">Statistics</Link>
                </div>


            </nav>
            
        </section>
        </main>
    );
};

export default Nav;


// 'use client'
 
// import { usePathname } from 'next/navigation'
// import Link from 'next/link'
 
// export function Links() {
//   const pathname = usePathname()
 
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             className={`link ${pathname === '/about' ? 'active' : ''}`}
//             href="/about"
//           >
//             About
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   )
// }