import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
//import NSRooferLogo from "../../images/logo/ns-roofer-logo.svg";
//import FBIcon from "../../images/social/fb.svg";
//import IGIcon from "../../images/social/ig.svg";

export default function Footer() {
  return (
    <footer className="w-full bg-dark-blue px-16 py-12 text-white -z-0">
      <div className="flex justify-between max-md:flex-col max-md:gap-8">
        {/* Logo and Social Media Section */}
        <div className="flex flex-col gap-8 mr-8">
          <StaticImage
            src="../../images/logo/hd-roofer-logo.png"
            alt="HD Roofer Logo"
            layout="fixed"
            width={200}
            height={50}
          />
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/nsroofer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                src="../../images/social/fb.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.instagram.com/nsroofer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                src="../../images/social/ig.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>

        {/* Navigation Links Section */}
        <div className="flex gap-8 max-md:flex-col max-md:gap-8">
          {/* Services Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Services</h3>
            <div className="mobile2:hidden flex gap-[22px]">
              <Link to="/roofing/shingle" className="hover:text-dark-green">
                Roofing
              </Link>
              <Link to="/insulation" className="hover:text-dark-green">
                Insulation
              </Link>
            </div>

            <Link
              to="/roofing/shingle"
              className="max-mobile2:hidden hover:text-dark-green"
            >
              Roofing
            </Link>
            <Link
              to="/insulation"
              className="max-mobile2:hidden hover:text-dark-green"
            >
              Insulation
            </Link>

            <div className="mobile2:hidden flex gap-8">
              <Link to="/siding" className="hover:text-dark-green">
                Siding
              </Link>
              <Link to="/repair" className="hover:text-dark-green">
                Repair
              </Link>
            </div>

            <Link to="/siding" className="max-mobile2:hidden hover:text-dark-green">
              Siding
            </Link>
            <Link to="/repair" className="max-mobile2:hidden hover:text-dark-green">
              Repair
            </Link>
          </div>

          {/* Quick Links Column */}
          <div className="flex max-mobile2:flex-col gap-4 w-[350px] font-bold text-lg">
            <Link to="/" className="hover:text-dark-green inline">
              Home
            </Link>
            <div className="mobile2:hidden flex flex-col gap-4">
              <Link to="/about-us" className="hover:text-dark-green inline">
                About Us
              </Link>
              <Link to="/get-a-quote" className="hover:text-dark-green inline">
                Get a Quote
              </Link>
            </div>

            <Link
              to="/about-us"
              className="max-mobile2:hidden hover:text-dark-green inline"
            >
              About Us
            </Link>
            <Link
              to="/get-a-quote"
              className="max-mobile2:hidden hover:text-dark-green inline"
            >
              Get a Quote
            </Link>
          </div>

          {/* Contact Info Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <a href="mailto:sales@nsroofer.com" className="hover:text-dark-green">
              sales@nsroofer.com
            </a>
            <p>Unit 108, 2880 45th Ave SE, Calgary, T2B 3M1</p>
            <div className="flex flex-col">
              <a href="tel:9024480428" className="hover:text-dark-green">
                (902) 448-0428
              </a>
              <a href="tel:6479530514" className="hover:text-dark-green">
                (647) 953-5014
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div>
            {/* Replace with actual map implementation */}
            <div className="max-w-fit overflow-hidden flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5020.173693375658!2d-113.9963486508179!3d51.0145443971732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717a6032a20cb9%3A0x394751073a40f115!2s2880 45 Ave SE %23108%2C Calgary%2C AB T2B 3M1!5e0!3m2!1sen!2sca!4v1750451940259!5m2!1sen!2sca"
                width="400"
                height="300"
                style={{ border: 0, position: "relative" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
