// src/components/layout/Footer.tsx
import Link from 'next/link';
import { Camera, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
    ],
    Community: [
      { name: 'For Creators', href: '/creators' },
      { name: 'Advertising', href: '/advertising' },
      { name: 'Partners Community', href: '/partners' },
    ],
    Help: [
      { name: 'Support', href: '/support' },
      { name: 'Mobile App', href: '/mobile' },
    ],
  };

  return (
    <footer className="bg-[#1e1e21] border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Socials */}
          <div className="col-span-1">
             <Link href="/" className="flex items-center space-x-2 mb-4">
                <Camera className="text-yellow-400" size={28} />
                <span className="text-2xl font-bold text-white">PhotoShare</span>
             </Link>
            <p className="text-gray-400 text-sm">Follow us</p>
            <div className="flex space-x-4 mt-2">
              <Link href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></Link>
            </div>
          </div>
          
          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-yellow-400 text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} PhotoShare. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
