import Nav from '@/components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Sky Foundation',
  description: 'Make a Donation for the people',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>
        <Nav/>
        
        {children}
        </body>
    </html>
  )
}
