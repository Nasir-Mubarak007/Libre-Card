import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <Typography
        as="a"
        href="#"
        color="blue-gray"
        className="mr-4 cursor-pointer text-sm font-bold"
      >
        Features
      </Typography>
      <Typography
        as="a"
        href="#"
        color="blue-gray"
        className="mr-4 cursor-pointer text-sm font-bold"
      >
        How it Works
      </Typography>
      <Typography
        as="a"
        href="#"
        color="blue-gray"
        className="mr-4 cursor-pointer text-sm font-bold"
      >
        Testimonials
      </Typography>
    </ul>
  );
}

function Header() {
  const [open, setOpen] = useState();

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);
  return (
    <div className="w-full flex items-center  sticky top-0 border-b z-[100] inset-x-0 bg-white/75 backdrop-blur-lg transition-all">
      <Navbar color="transparent" fullWidth>
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900 bg-white/75 backdrop-blur-lg transition-all">
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="mr-4 cursor-pointer text-lg font-bold"
          >
            LIBER CARD
          </Typography>
          <div className="hidden md:hidden lg:block">
            <NavList />
          </div>

          <div className="btns hidden md:flex gap-2 ">
            <a href="#">
              <Button variant="outlined" className="">
                Contact Us
              </Button>
            </a>

            <a href="#">
              <Button variant="filled" color={"black"} onClick={() => {}}>
                Download App{" "}
              </Button>
            </a>
          </div>
          <IconButton
            size="sm"
            variant="text"
            color="blue-gray"
            onClick={handleOpen}
            className="ml-auto inline-block text-blue-gray-900 lg:hidden"
          >
            {open ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={1} />
            )}
          </IconButton>
        </div>
        <Collapse open={open}>
          <div className="mt-2 rounded-xl bg-white py-2 px-3">
            <NavList />
            <a href="#">
              <Button variant="outlined" className="mb-4" fullWidth>
                Contact Us
              </Button>
            </a>

            <a href="#">
              <Button
                variant="filled"
                color={"black"}
                onClick={() => {}}
                fullWidth
              >
                Download App{" "}
              </Button>
            </a>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
