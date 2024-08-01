// eslint-disable-next-line no-unused-vars
import React from "react";

import { Card, CardBody, Typography } from "@material-tailwind/react";
import { MdAccountBalanceWallet } from "react-icons/md";

function HowItWorks() {
  return (
    <div>
      <h2 className=" font-bold text-2xl text-center mb-8">How It Works</h2>

      <div className="flex w-full flex-col md:flex-row border border-green-600   gap-6">
        <div className="flex flex-col md:w-1/3 md:items-center">
          <Card className="w-full">
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

          <Card className="w-1/8"></Card>
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
      </div>
    </div>
  );
}

export default HowItWorks;
