// eslint-disable-next-line no-unused-vars
import React from "react";

import { Button, Typography } from "@material-tailwind/react";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

function Hero() {
  return (
    <div className="w-full grid grid-cols-1 my-4 mb-9  px-2 gap-2 md:grid-cols-2 ">
      <div className="description flex flex-col  justify-center gap-4 w-full order-2 md:order-1">
        <Typography
          variant="h1"
          className="font-bold text-center md:text-left "
        >
          <h1>Securely Manage Documents & Share Photos with Liber Card</h1>
        </Typography>
        <p>
          Ditch the bulky wallets and scattered cloud storage - Liber Card puts
          everything at your fingertips.
        </p>

        <div className="flex gap-4 justify-center items-center md:flex-row flex-col">
          <Button className="rounded-md flex gap-3 capitalize bg-gray-400 md:justify">
            <FaGooglePlay className="h-4 w-4" />
            Get it on Google Play
          </Button>
          <Button className="rounded-md flex gap-3 capitalize md:justify-center">
            <FaApple color="white" className="h-4 w-4" />
            Download on the App Store
          </Button>
        </div>
      </div>
      <div className="Illustration order-1 md:order-2">
        <img
          src="/images/wallet-rafiki-1.svg"
          alt="Hero Iamge"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default Hero;
