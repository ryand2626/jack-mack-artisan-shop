
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-nature-forest text-nature-sage py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/695ffc1a-cc81-412f-9df5-d02cd08750d3.png" 
                alt="Jack Mack Woodturning" 
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-nature-sage/80 leading-relaxed mb-6 max-w-md">
              Handcrafting unique woodturned pieces that celebrate the natural beauty 
              of timber. Each creation tells a story of artisan skill and sustainable craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-nature-sage/60 hover:text-nature-sage transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-nature-sage/60 hover:text-nature-sage transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-nature-sage/60 hover:text-nature-sage transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-nature-sage/80 hover:text-nature-sage transition-colors">Home</a></li>
              <li><a href="#art" className="text-nature-sage/80 hover:text-nature-sage transition-colors">One-Off Art</a></li>
              <li><a href="#kitchenware" className="text-nature-sage/80 hover:text-nature-sage transition-colors">Kitchenware</a></li>
              <li><a href="#about" className="text-nature-sage/80 hover:text-nature-sage transition-colors">About Jack</a></li>
              <li><a href="#contact" className="text-nature-sage/80 hover:text-nature-sage transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-nature-sage/60" />
                <span className="text-nature-sage/80">info@jackmackwoodturning.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-nature-sage/60 mt-0.5" />
                <span className="text-nature-sage/80">Countryside Workshop<br />United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-nature-sage/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-nature-sage/60 text-sm">
              © 2025 Jack Mack Woodturning. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-nature-sage/60 hover:text-nature-sage transition-colors">Privacy Policy</a>
              <a href="#" className="text-nature-sage/60 hover:text-nature-sage transition-colors">Terms of Service</a>
              <a href="#" className="text-nature-sage/60 hover:text-nature-sage transition-colors">Returns</a>
              <Link to="/auth" className="text-nature-sage/60 hover:text-nature-sage transition-colors">Admin Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
