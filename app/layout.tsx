import './globals.css'
import type { Metadata } from 'next'
// import { Web3ProviderWrapper } from '../contexts/Web3Provider';



export const metadata: Metadata = {
  title: 'Hack0x',
  description: 'the status quo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}