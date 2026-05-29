import './globals.css'

export const metadata = {
  title: 'Forxel Design',
  description: 'Modern design agency specializing in UI/UX design, web development, and digital marketing. We create stunning digital experiences that help brands stand out.',
  keywords: ['design agency', 'UI/UX design', 'web development', 'digital marketing', 'web design', 'branding'],
  authors: [{ name: 'Forxel Design' }],
  creator: 'Forxel Design',
  viewport: 'width=device-width, initial-scale=1.0',
  themeColor: '#ab5bec',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    url: 'https://forxeldesign.vercel.app',
    title: 'Forxel Design — Digital Design Agency',
    description: 'Modern design agency specializing in UI/UX design, web development, and digital marketing.',
    images: [
      {
        url: 'https://forxeldesign.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Forxel Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forxel Design — Digital Design Agency',
    description: 'Modern design agency specializing in UI/UX design, web development, and digital marketing.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}