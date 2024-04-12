import dynamic from 'next/dynamic';
import Footer from 'src/components/Footer';

const TopBar = dynamic(() => import('src/components/TopBar'), { ssr: false });

export default function AuthLayout({ children }) {
  return (
    <>
      <TopBar />
      <main className="bg-[#F7F9FB]">{children}</main>
      <Footer />
    </>
  );
}
