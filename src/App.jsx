import toast, { Toaster } from 'react-hot-toast';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

window.triggerAPKDownload = () => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  if (isIOS) {
    toast.error('The APK is only compatible with Android devices. iOS version coming soon!', {
      style: { background: '#1e293b', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.4)', fontFamily: "'Plus Jakarta Sans',sans-serif" },
      iconTheme: { primary: '#f59e0b', secondary: '#1e293b' },
    });
    return;
  }

  toast.success('Download starting...', {
    style: { background: '#1e293b', color: '#f1f5f9', border: '1px solid rgba(201,168,76,0.4)', fontFamily: "'Plus Jakarta Sans',sans-serif" },
    iconTheme: { primary: '#C9A84C', secondary: '#1e293b' },
  });
  
  const link = document.createElement('a');
  link.href = '/vailnet.apk';
  link.download = 'vailnet.apk';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
import Features from './components/Features';
import IdentityGenerator from './components/IdentityGenerator';
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
        <IdentityGenerator />
        <About />
        <PrivacyPolicy />
        <TermsOfService />
      </main>
      <Footer />
    </div>
  );
}

export default App;
