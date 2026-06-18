import './globals.css'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className="flex flex-col min-h-screen">
        <header className="bg-gray-200 h-20 flex justify-center items-center">header</header>
        <div className="flex flex-1">{children}</div>
        <footer className="bg-gray-200 h-20 flex justify-center items-center">footer</footer>
      </body>
    </html>
  )
}
