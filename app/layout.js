import { Inter } from '@next/font/google';
import styles from './styles.module.css';
import "../styles/global.css";
import Header from '../components/Header';
import Footer from '../components/Footer';


const interFont = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFont.className}>
      <body className={styles.container}>
        <Header />
        <main>
          {children}
          </main>
        <Footer />
        </body>
    </html>
  )
}
