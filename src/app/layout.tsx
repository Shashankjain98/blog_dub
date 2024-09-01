import './globals.css';
import NavBar from '../components/NavBar';
import Body from '../components/Body';
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>

        <NavBar />
        <main>
          <Body />
            {children}
          
        </main>
        <Footer />
      </body>
    </html>
  );
}
