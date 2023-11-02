import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Mail, Phone, Home, Link } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className=" text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src="/logo.png"
            alt="Hackathon Logo"
            className="mr-4 rounded-full"
            height={80}
            width={80}
          />
          <h2 className="text-2xl font-bold">Contact Us</h2>
        </div>
        <div className="text-center md:text-right">
          <p className="mb-2">
            For inquiries, sponsorship, or any assistance, please contact us:
          </p>
          <p className="mb-2 flex items-center">
            <Mail size={20} className="mr-2" />{' '}
            <a href="mailto:contact@hackathon.com">contact@hackathon.com</a>
          </p>
          <p className="mb-2 flex items-center">
            <Phone size={20} className="mr-2" /> +1 (123) 456-7890
          </p>
          <p className="mb-4 flex items-center">
            <Home size={20} className="mr-2" /> Your Address, City, Country
          </p>
          <p className="mb-4">
            Follow us on social media:
            <a
              href="https://www.facebook.com/hackathon"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://twitter.com/hackathon"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/hackathon"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              <Instagram size={24} />
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-4">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="mb-2 md:mb-0">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-2">
              <li>
                <Link size={20} className="mr-2" />
                <a href="#">Home</a>
              </li>
              <li>
                <Link size={20} className="mr-2" />
                <a href="#">About Us</a>
              </li>
              <li>
                <Link size={20} className="mr-2" />
                <a href="#">Events</a>
              </li>
              <li>
                <Link size={20} className="mr-2" />
                <a href="#">Sponsors</a>
              </li>
            </ul>
          </div>
          <div className="mb-2 md:mb-0">
            <h3 className="text-xl font-semibold">Support</h3>
            <ul className="mt-2">
              <li>
                <Link size={20} className="mr-2" />
                <a href="#">Contact Us</a>
              </li>
              <li>
                <Link size={20} className="mr-2" />
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Legal</h3>
            <ul className="mt-2">
              <li>
                <Link size={20} className="mr-2" />
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <Link size={20} className="mr-2" />
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
