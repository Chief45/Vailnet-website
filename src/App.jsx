import toast, { Toaster } from 'react-hot-toast';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

window.triggerAPKDownload = () => {
  const toastId = toast.loading('Preparing your download...', {
    style: { background: '#1e293b', color: '#f1f5f9', border: '1px solid rgba(255,255,255,0.08)', fontFamily: "'Plus Jakarta Sans',sans-serif" },
  });
  
  setTimeout(() => {
    toast.dismiss(toastId);
    toast.success('Download started!', {
      style: { background: '#1e293b', color: '#f1f5f9', border: '1px solid rgba(201,168,76,0.4)', fontFamily: "'Plus Jakarta Sans',sans-serif" },
      iconTheme: { primary: '#C9A84C', secondary: '#1e293b' },
    });
    
    window.location.href = 'https://github.com/Chief45/VAILNET-APP/releases/download/v0.7.0/app-debug.apk';
  }, 2000);
};
import Features from './components/Features';
import About from './components/About';
import StatusWidget from './components/StatusWidget';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans bg-[#0A0A0C] text-[#F4F4F5]">
      <Toaster position="bottom-right" />
      <NavBar />
      <main>
        <Hero />
        <StatusWidget />
        <Features />
        <About />
        <PrivacyPolicy />
        <TermsOfService />
      </main>
      <Footer />
    </div>
  );
}

export default App;
