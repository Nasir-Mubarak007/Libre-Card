// eslint-disable-next-line no-unused-vars
import React from "react";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { PiCheckCircleDuotone } from "react-icons/pi";

function SubscriptionPlan() {
  return (
    <div className=" mb-14">
      <div className="mb-10 text-center">
        <h2 className=" font-bold text-2xl  mb-4">
          Choose the Right Plan for You
        </h2>

        <Typography>
          LIBER CARD offers both Free and Premium plans to suit your needs.
          Manage your documents and photos with the flexibility you require.
        </Typography>
      </div>

      <div className="w-full flex flex-col sm:gap-8 gap-4 md:flex-row justify-center items-center">
        <Card
          color="balckgray"
          variant="gradient"
          className="w-fit bg-gray-200  p-8"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 mb-4 rounded-none border-b border-black/10 pb-4"
          >
            <Typography
              variant="lead"
              color="black"
              className="font-normal text-lg"
            >
              Free Plan (Basic)
            </Typography>
            <Typography
              color="black"
              className="mt-3 flex  items-baseline gap-1 font-bold"
            >
              <span className="text-2xl">₦0.00/</span>
              <span className="text-xs">per annum</span>
            </Typography>
          </CardHeader>
          <CardBody className="p-0 rounded-none border-b border-black/10 pb-4 text-black">
            <Typography className="text-xl font-semibold ">
              What’s included:
            </Typography>
            <ul className="flex flex-col mt-2 gap-4">
              <li className="flex items-center gap-3">
                <PiCheckCircleDuotone className="bg-black  text-white overflow-hidden rounded-full" />
                <Typography className="font-normal text-sm">
                  Limited document storage
                </Typography>
              </li>
              <li className="flex items-center gap-3">
                <PiCheckCircleDuotone className="bg-black  text-white overflow-hidden rounded-full" />
                <Typography className="font-normal text-sm">
                  Secure document storage and management
                </Typography>
              </li>
              <li className="flex items-center gap-3">
                <PiCheckCircleDuotone className="bg-black  text-white overflow-hidden rounded-full" />
                <Typography className="font-normal text-sm">
                  Secure interaction with authorities
                </Typography>
              </li>
              <li className="flex items-center gap-3">
                <PiCheckCircleDuotone className="bg-black  text-white overflow-hidden rounded-full" />
                <Typography className="font-normal text-sm">
                  Automated expiry reminders
                </Typography>
              </li>
              <li className="flex items-center gap-3">
                <PiCheckCircleDuotone className="bg-black  text-white overflow-hidden rounded-full" />
                <Typography className="font-normal text-sm">
                  Integration with your phone
                </Typography>
              </li>
              <li className="flex items-center gap-3">
                <PiCheckCircleDuotone className="bg-black  text-white overflow-hidden rounded-full" />
                <Typography className="font-normal text-sm">
                  Photo backup onlyPhoto backup only
                </Typography>
              </li>
              <li className="flex items-center gap-3">
                <PiCheckCircleDuotone className="bg-black  text-white overflow-hidden rounded-full" />
                <Typography className="font-normal text-sm">
                  Basic customer support
                </Typography>
              </li>
            </ul>
          </CardBody>

          <CardFooter className="mt-5 p-0">
            <a href="">
              <Button
                size="lg"
                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 rounded-full  capitalize font-semibold text-sm"
                ripple={false}
                fullWidth={true}
              >
                Sign Up for Free
              </Button>
            </a>
          </CardFooter>
        </Card>
        <Card
          color="balckgray"
          variant="gradient"
          className="w-fit bg-gray-200  p-8"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 mb-4 rounded-none border-b border-black/10 pb-4"
          >
            <Typography
              variant="lead"
              color="black"
              className="font-normal text-lg"
            >
              Premium Plan
            </Typography>
            <Typography
              color="black"
              className="mt-3 flex  items-baseline gap-1 font-bold"
            >
              <span className="text-2xl">₦20,000.00/</span>
              <span className="text-xs">per annum</span>
            </Typography>
          </CardHeader>
          <CardBody className="p-0 rounded-none border-b border-black/10 pb-4 text-black">
            <Typography className="text-xl font-semibold ">
              What’s included:
            </Typography>
            <ul className="flex flex-col mt-2 gap-4">
              <li className="flex items-center gap-3">
                <PiCheckCircleDuotone className="bg-black  text-white overflow-hidden rounded-full" />
                <Typography className="font-normal text-sm">
                  Limited document storage
                </Typography>
              </li>
              <li className="flex items-center gap-3">
                <PiCheckCircleDuotone className="bg-black  text-white overflow-hidden rounded-full" />
                <Typography className="font-normal text-sm">
                  Everything in Free Plan
                </Typography>
              </li>
              <li className="flex items-center gap-3">
                <PiCheckCircleDuotone className="bg-black  text-white overflow-hidden rounded-full" />
                <Typography className="font-normal text-sm">
                  Expanded document storage
                </Typography>
              </li>
              <li className="flex items-center gap-3">
                <PiCheckCircleDuotone className="bg-black  text-white overflow-hidden rounded-full" />
                <Typography className="font-normal text-sm">
                  Backup of videos and other document formats
                </Typography>
              </li>
              <li className="flex items-center gap-3">
                <PiCheckCircleDuotone className="bg-black  text-white overflow-hidden rounded-full" />
                <Typography className="font-normal text-sm">
                  Priority customer support
                </Typography>
              </li>
              <li className="flex items-center gap-3">
                <PiCheckCircleDuotone className="bg-black  text-white overflow-hidden rounded-full" />
                <Typography className="font-normal text-sm">
                  Early access to new features
                </Typography>
              </li>
              <li className="flex items-center gap-3">
                <PiCheckCircleDuotone className="bg-black  text-white overflow-hidden rounded-full" />
                <Typography className="font-normal text-sm">
                  Enhanced security options
                </Typography>
              </li>
            </ul>
          </CardBody>
          <CardFooter className="mt-5 p-0">
            <a href="">
              <Button
                size="lg"
                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 rounded-full  capitalize font-semibold text-sm"
                ripple={false}
                fullWidth={true}
              >
                Upgrade to Premium
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default SubscriptionPlan;
