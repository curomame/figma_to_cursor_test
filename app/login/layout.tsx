import React from 'react'
import localFont from 'next/font/local'

const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
})

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${pretendard.variable} font-sans`}>
      {children}
    </div>
  )
} 