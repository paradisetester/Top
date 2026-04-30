import { Link } from 'react-router-dom';
import LogoMain from '../../logos/logo-main.png';

const FOOTER_DATA = {
  tagline: 'The operating system for athletes who refuse to be average. Mind. Body. Social. System.',
  navTitle: 'NAVIGATE',
  navLinks: [
    { name: 'ABOUT', path: '/about' },
    { name: 'SYSTEMS', path: '/systems' },
    { name: 'CONTACT', path: '/contact' },
  ],
  socialTitle: 'CONNECT',
  socialLinks: ['Instagram', 'Twitter/X', 'TikTok'],
  copyright: 'TOP — ALL OR NOTHING',
  version: 'SYSTEM v2.0',
};

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] border-t border-white/5 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <img src={LogoMain} alt="TOP" className="logo-img h-8 mb-6 opacity-80" />
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">{FOOTER_DATA.tagline}</p>
          </div>
          

          <div className="flex gap-15 block md:hidden">
            <div>
              <h4 className="font-oswald text-xs tracking-[0.2em] text-gray-400 mb-6">{FOOTER_DATA.navTitle}</h4>
              <div className="flex flex-col space-y-3">
                {FOOTER_DATA.navLinks.map((l) => (
                  <Link key={l.name} to={l.path} className="text-gray-600 hover:text-[#D4FF00] text-sm transition-colors">
                    {l.name}
                  </Link>
                ))}
              </div>
            </div>
          <div>
            <h4 className="font-oswald text-xs tracking-[0.2em] text-gray-400 mb-6">{FOOTER_DATA.socialTitle}</h4>
            <div className="flex flex-col space-y-3">
              {FOOTER_DATA.socialLinks.map((s) => (<a key={s} href="#" className="text-gray-600 hover:text-[#D4FF00] text-sm transition-colors">{s}</a>))}
            </div>
          </div>
          </div>
          <div className='hidden md:block'>
            <h4 className="font-oswald text-xs tracking-[0.2em] text-gray-400 mb-6">{FOOTER_DATA.navTitle}</h4>
            <div className="flex flex-col space-y-3">
              {FOOTER_DATA.navLinks.map((l) => (
                <Link key={l.name} to={l.path} className="text-gray-600 hover:text-[#D4FF00] text-sm transition-colors">
                  {l.name}
                </Link>
              ))}
            </div>
          </div>

            <div className='hidden md:block'>
            <h4 className="font-oswald text-xs tracking-[0.2em] text-gray-400 mb-6">{FOOTER_DATA.socialTitle}</h4>
            <div className="flex flex-col space-y-3">
              {FOOTER_DATA.socialLinks.map((s) => (<a key={s} href="#" className="text-gray-600 hover:text-[#D4FF00] text-sm transition-colors">{s}</a>))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-700 text-xs tracking-widest font-mono">© {new Date().getFullYear()} {FOOTER_DATA.copyright}</div>
          <div className="font-mono text-[#D4FF00]/30 text-[9px] tracking-[0.3em]">{FOOTER_DATA.version}</div>
        </div>
      </div>
    </footer>
  );
}
