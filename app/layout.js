import { Roboto_Mono } from 'next/font/google'
import './globals.css'

const inter = Roboto_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Hack-A-Sol 2K23',
  description: 'Hackathon by IIIT Naya Raipur',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
