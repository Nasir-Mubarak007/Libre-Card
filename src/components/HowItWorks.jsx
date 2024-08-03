// eslint-disable-next-line no-unused-vars
import React from "react";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { MdLockPerson, MdOutlineFolderZip } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { TiWiFi } from "react-icons/ti";
import { BsBatteryFull } from "react-icons/bs";
import { CgAdd, CgArrowLeft, CgMoreVertical } from "react-icons/cg";
import {
  BiCloudUpload,
  BiDownload,
  BiErrorCircle,
  BiSearchAlt,
} from "react-icons/bi";
import { PiCirclesThreePlusFill } from "react-icons/pi";
import { IoCloudDone } from "react-icons/io5";

function HowItWorks() {
  return (
    <div className="my-6 mb-24">
      <h2 className=" font-bold text-2xl text-center mb-8">How It Works</h2>

      <div className="flex w-full flex-col md:flex-row   gap-6">
        <div className="flex flex-col md:w-1/3 items-center gap-6">
          <Card className="w-full">
            <CardBody className="">
              <div className="flex gap-3 ">
                <BiDownload size={24} />
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Download the App
                </Typography>
              </div>

              <Typography>
                Securely store and manage your essential documents like driving
                licenses, work ID cards, and more in one centralized location.
              </Typography>
            </CardBody>
          </Card>

          <div className=" w-11/12 select-none border border-gray-200 rounded-lg shadow-lg">
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
              <div className="flex  w-full mx-auto">
                <div className="flex h-fit w-1/3  items-start  border-r-2  border-r-black">
                  <div className=" flex flex-col items-center justify-center">
                    <BiDownload size={24} />
                    <Typography className="text-sm">17MB</Typography>
                  </div>
                </div>
                <div className="flex w-1/3 flex-col items-center border-r-2  border-r-black">
                  <div className=" flex flex-col items-center justify-center">
                    <PiCirclesThreePlusFill size={24} />
                    <Typography className="flex items-center text-xs">
                      Rated for 3+
                      <BiErrorCircle />
                    </Typography>
                  </div>
                </div>
                <div className="flex h-fit w-1/3 flex-col items-end">
                  <div className="flex flex-col items-center justify-center">
                    <Typography className="font-semibold">500K+</Typography>
                    <Typography className="text-sm">Downloads</Typography>
                  </div>
                </div>
              </div>
            </CardBody>

            <CardFooter className="pt-3">
              <Button className="rounded-3xl bg-gray-600" fullWidth={true}>
                Install
              </Button>
            </CardFooter>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:w-1/3 items-center">
          {/* step */}
          <Card className=" w-full">
            <CardBody className="">
              <div className="flex gap-3 ">
                <BiCloudUpload size={24} />
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Upload Your Documents
                </Typography>
              </div>

              <Typography>
                Securely store and manage your essential documents like driving
                licenses, work ID cards, and more in one centralized location.
              </Typography>
            </CardBody>
          </Card>
          {/* Illustration */}
          <div className=" w-11/12 select-none border border-gray-200 rounded-lg shadow-lg">
            <CardBody>
              <div className="flex w-full flex-col mb-4">
                <img src="/images/Frame 123.png" alt="" />
              </div>

              <div className="  w-full mx-auto mb-6">
                <Typography color="blue-black" className="font-semibold mb-1">
                  Upload your documents
                </Typography>
                <Typography variant="small">
                  Lorem ipsum dolor sit amet consectetur. Malesuada mauris eget
                  interdum pharetra aliquam.
                </Typography>
              </div>

              <div className="flex gap-3 p-3 mb-4 border border-gray-400 rounded-lg">
                <div className="img w-1/4">
                  <img
                    src="/public/images/Frame 124.png"
                    alt=""
                    className="w-full h-full"
                  />
                </div>

                <div className="flex w-9/12 flex-col">
                  <Typography color="black" className="font-semibold text-sm">
                    Drivers_License.JPG
                  </Typography>
                  <Typography className="text-xs">500 kb</Typography>
                  <div className="flex items-center gap-2 w-full">
                    <div className="line h-px border-gray-700  border-2 w-10/12"></div>
                    <Typography className="text-sm font-semibold">
                      100%
                    </Typography>
                  </div>
                </div>
              </div>
            </CardBody>

            <CardFooter className="flex gap-4 -mt-8">
              <Button
                variant="outlined"
                className="rounded-lg"
                fullWidth={true}
              >
                Cancel
              </Button>

              <Button className="rounded-lg" fullWidth={true}>
                Continue
              </Button>
            </CardFooter>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:w-1/3 items-center">
          {/* step */}
          <Card className=" w-full">
            <CardBody className="">
              <div className="flex gap-2 ">
                <MdOutlineFolderZip size={24} />
                <Typography variant="h6" className="mb-2">
                  Manage and Share Securely
                </Typography>
              </div>

              <Typography>
                Securely store and manage your essential documents like driving
                licenses, work ID cards, and more in one centralized location.
              </Typography>
            </CardBody>
          </Card>

          {/* Illustration */}
          <div className=" w-11/12 select-none border border-gray-200 rounded-lg shadow-lg">
            <CardBody>
              <div className="flex w-full flex-col mb-4">
                <img src="/images/undraw_hire_re_gn5j 1.svg" alt="" />
              </div>

              <div className="  w-full mx-auto mb-6 text-center">
                <Typography variant="small">
                  Manage your Drivers License, ID Cards, Credit Cards and any
                  other card using barcodes or QR codes
                </Typography>
              </div>

              <div className="flex gap-3 items-center mb-4">
                <MdLockPerson />
                <div className="flex flex-col">
                  <Typography color="black" className="font-semibold text-sm">
                    Secure your documents
                  </Typography>
                  <Typography className="text-sm">
                    Set fingerprint or PIN code access
                  </Typography>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <IoCloudDone />
                <div className="flex flex-col">
                  <Typography color="black" className="font-semibold text-sm">
                    Turn backup on
                  </Typography>
                  <Typography className="text-sm">
                    Never lose your documents
                  </Typography>
                </div>
              </div>
            </CardBody>

            <CardFooter className="flex gap-4 justify-end">
              <Button className="rounded-lg h-fit py-2 px-3">
                <Typography className="flex gap-3 items-center">
                  New <CgAdd />
                </Typography>
              </Button>
            </CardFooter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
