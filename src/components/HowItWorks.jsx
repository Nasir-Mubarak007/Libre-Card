// eslint-disable-next-line no-unused-vars
import React from "react";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { MdAccountBalanceWallet } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { TiWiFi } from "react-icons/ti";
import { BsBatteryFull } from "react-icons/bs";
import { CgArrowLeft, CgMoreVertical } from "react-icons/cg";
import { BiDownload, BiErrorCircle, BiSearchAlt } from "react-icons/bi";

function HowItWorks() {
  return (
    <div>
      <h2 className=" font-bold text-2xl text-center mb-8">How It Works</h2>

      <div className="flex w-full flex-col md:flex-row   gap-6">
        <div className="flex flex-col md:w-1/3 items-center gap-3 border border-green-600">
          <Card className="w-full mb-6">
            <CardBody className="">
              <div className="flex gap-2 ">
                <MdAccountBalanceWallet size={24} />
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Digital Document Storage
                </Typography>
              </div>

              <Typography>
                Securely store and manage your essential documents like driving
                licenses, work ID cards, and more in one centralized location.
              </Typography>
            </CardBody>
          </Card>

          <Card className=" w-full shadow-lg">
            <CardBody>
              <div className="flex flex-col mb-4">
                <Typography className="w-full flex justify-between items-center h-8">
                  9:41 PM
                  <span className="flex gap-2">
                    <GiNetworkBars />
                    <TiWiFi />
                    <BsBatteryFull />
                  </span>
                </Typography>
                <Typography className="w-full flex justify-between items-center h-8">
                  <CgArrowLeft fontSize={24} />
                  <span className="flex gap-8">
                    <BiSearchAlt />
                    <CgMoreVertical />
                  </span>
                </Typography>
              </div>
              <div className="flex gap-3 mr-6 mb-4">
                <img src="/images/img-logo.svg" alt="" />

                <div className="flex flex-col">
                  <Typography
                    variant="h6"
                    color="black"
                    className="font-extrabold"
                  >
                    Liber Card
                  </Typography>
                  <Typography>3bytz Solutions</Typography>
                  <Typography color="black" className="font-semibold text-sm">
                    In-app purchases
                  </Typography>
                </div>
              </div>
              <div className="flex  w-10/12 border border-blue-900 mx-auto">
                <div className="flex w-1/3  items-start  border-r-2  border-r-black">
                  <div className=" flex flex-col items-center">
                    <BiDownload size={24} />
                    <Typography>17MB</Typography>
                  </div>
                </div>
                <div className="flex w-1/3 flex-col items-center border-r-2  border-r-black">
                  <div className=" flex flex-col justify-center">
                    <BiDownload />
                    <Typography className="flex gap-1">
                      Rated for 3+ <BiErrorCircle />
                    </Typography>
                  </div>
                </div>
                <div className="flex w-1/3 flex-col items-end">
                  <BiDownload />
                  <Typography>17MB</Typography>
                </div>
              </div>
            </CardBody>

            <CardFooter className="pt-3">
              <Button size="lg" fullWidth={true}>
                Install
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex flex-col gap-6 md:w-1/3 md:items-center">
          <Card className=" w-full">
            <CardBody className="">
              <div className="flex gap-2 ">
                <MdAccountBalanceWallet size={24} />
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Digital Document Storage
                </Typography>
              </div>

              <Typography>
                Securely store and manage your essential documents like driving
                licenses, work ID cards, and more in one centralized location.
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div className="flex flex-col gap-6 md:w-1/3 md:items-center">
          <Card className=" w-full">
            <CardBody className="">
              <div className="flex gap-2 ">
                <MdAccountBalanceWallet size={24} />
                <Typography variant="h6" className="mb-2">
                  Digital Document Storage
                </Typography>
              </div>

              <Typography>
                Securely store and manage your essential documents like driving
                licenses, work ID cards, and more in one centralized location.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
