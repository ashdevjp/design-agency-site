import './globals.css'

export const metadata = {
  title: 'Forxel Design — Digital Design Agency',
  description: 'We build stunning digital experiences that stand out',
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