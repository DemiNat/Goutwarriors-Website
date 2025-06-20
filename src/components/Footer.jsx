import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-secondary" />
              <span className="font-heading font-bold text-2xl">
                GoutWarriors
              </span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering individuals to take control of their gout journey through 
              evidence-based guidance, supportive community, and practical tools.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/understanding-gout" className="text-gray-300 hover:text-secondary transition-colors">
                  Understanding Gout
                </Link>
              </li>
              <li>
                <Link to="/diet-nutrition" className="text-gray-300 hover:text-secondary transition-colors">
                  Diet & Nutrition
                </Link>
              </li>
              <li>
                <Link to="/living-with-gout" className="text-gray-300 hover:text-secondary transition-colors">
                  Living with Gout
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  Community Forum
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-gray-300">info@goutwarriors.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-gray-300">1-800-GOUT-HELP</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-gray-300">Online Community</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 GoutWarriors. All rights reserved. | 
            <a href="#" className="hover:text-secondary transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-secondary transition-colors ml-1">Terms of Service</a>
          </p>
          <p className="text-gray-400 text-sm mt-2">
            This website is for educational purposes only and does not replace professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

