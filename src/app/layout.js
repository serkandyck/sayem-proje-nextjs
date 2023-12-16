
import "bootstrap/dist/css/bootstrap.css";
import { Providers } from './providers'
import { Toaster } from 'react-hot-toast';


import './globals.css'

import Header from './components/header'
import Footer from './components/footer'

export const metadata = {
  title: 'SAYEM | Talep toplama Sistemi',
  description: 'Sayem yazılım geliştirici 5 için hazırlanmıştır',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Providers>
          <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <Toaster />
            <header className="masthead mb-auto">
              <Header />
            </header>
            
            <main role="main" className="inner cover">
              {children}
            </main>
            
            <footer className="mastfoot mt-auto">
              <Footer />
            </footer>
            
          </div>
        </Providers>
      </body>
    </html>
  )
}
