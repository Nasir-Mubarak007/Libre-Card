// eslint-disable-next-line no-unused-vars
import React from "react";

import { Button, Typography } from "@material-tailwind/react";
import {
  FaApple,
  FaFacebookSquare,
  FaGooglePlay,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { PiXDuotone } from "react-icons/pi";

function Footer() {
  return (
    <div>
      {/* call to action section */}
      <div className="cta flex flex-col justify-center gap-3 py-12 px-6 bg-black mb-12 text-white text-center md:rounded-lg rounded-none -mx-4">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <Typography className="text-sm mb-8">
          Download LIBER CARD today and experience the convenience of secure
          document and photo management.
        </Typography>
        <div className="flex gap-4 justify-center items-center md:flex-row flex-col">
          <Button className="rounded-md flex gap-3 capitalize bg-gray-400 md:justify">
            <FaGooglePlay className="h-4 w-4" />
            Get it on Google Play
          </Button>
          <Button
            variant="outlined"
            className="rounded-md flex gap-3 text-white md:justify-center capitalize "
          >
            <FaApple color="white" className="h-4 w-4" />
            Download on the App Store
          </Button>
        </div>
      </div>
      <div className="footer w-full flex flex-col justify-center gap-4 py-12 px-6">
        {/* quick-links */}
        <div className="flex w-full justify-center font-semibold">
          <span className="px-4 border-r-black border-r-4">
            <a href="#">Terms of Service</a>
          </span>
          <span className="px-4 border-r-black border-r-4">
            <a href="#">Privacy Policy</a>
          </span>
          <span className="px-4 ">
            <a href="#">Contact Us</a>
          </span>
        </div>

        {/* social icons */}
        <div className="flex w-full justify-center font-semibol gap-8">
          <span className="">
            <a href="#">
              <FaFacebookSquare size={24} />
            </a>
          </span>
          <span className="">
            <a href="#">
              <LuInstagram size={24} />
            </a>
          </span>
          <span className="">
            <a href="#">
              <PiXDuotone size={24} className="bg-white" />
            </a>
          </span>
          <span className="">
            <a href="#">
              <FaLinkedin size={24} />
            </a>
          </span>
          <span className="">
            <a href="#">
              <FaYoutube size={25} />
            </a>
          </span>
        </div>

        {/* credits */}
        <div className="text-center text-xs font-semibold">
          <Typography>© 2024 LIBER CARD. All rights reserved.</Typography>
        </div>
      </div>
    </div>
  );
}

export default Footer;
