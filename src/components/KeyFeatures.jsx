import { Card, CardBody, Typography } from "@material-tailwind/react";
import { BiBell } from "react-icons/bi";
import { FcDataEncryption } from "react-icons/fc";
import {
  MdAccountBalanceWallet,
  MdLockClock,
  MdOutlineShutterSpeed,
} from "react-icons/md";
import { TbDeviceMobileCheck } from "react-icons/tb";

function KeyFeatures() {
  return (
    <div className="my-6 mb-24">
      <Typography>
        <h2 className=" font-bold text-2xl text-center mb-8">
          Key Features of LIBER CARD
        </h2>
      </Typography>

      <div className="flex items-center gap-6 flex-col md:flex-row">
        <div className="flex w-full md:w-1/3 flex-col   gap-3">
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
          <Card className=" w-full">
            <CardBody className="">
              <div className="flex gap-2 ">
                <BiBell size={24} />
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Automated Expiry Reminders
                </Typography>
              </div>

              <Typography>
                Never miss a renewal date again. Receive timely notifications
                when your documents are approaching expiration.
              </Typography>
            </CardBody>
          </Card>
          <Card className=" w-full">
            <CardBody className="">
              <div className="flex gap-2 ">
                <MdLockClock size={24} />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Secure Interaction with Authorities
                </Typography>
              </div>

              <Typography>
                Securely store and manage your essential documents like driving
                licenses, work ID cards, and more in one centralized location.
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div className="flex w-1/3">
          <img
            src="/images/Phone.png"
            alt="phone demo"
            className="w-full h-full"
          />
        </div>
        <div className="flex w-full md:w-1/3 flex-col  gap-3">
          <Card className=" w-full">
            <CardBody className="">
              <div className="flex gap-2 ">
                <FcDataEncryption size={24} />
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Remote Blocking and Security
                </Typography>
              </div>

              <Typography>
                Lost your phone? Remotely block access to your documents or
                generate a new QR code for added security.
              </Typography>
            </CardBody>
          </Card>
          <Card className=" w-full">
            <CardBody className="">
              <div className="flex gap-2 ">
                <TbDeviceMobileCheck size={24} />
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Seamless Integration with Your Phone
                </Typography>
              </div>

              <Typography>
                Update and manage your documents in real-time without needing to
                print new cards.
              </Typography>
            </CardBody>
          </Card>
          <Card className=" w-full">
            <CardBody className="">
              <div className="flex gap-2 ">
                <MdOutlineShutterSpeed size={24} />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  LIBER PHOTOS
                </Typography>
              </div>

              <Typography>
                Store and share photos securely. Control who can view your
                photos and delete them from your phone once uploaded.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default KeyFeatures;
