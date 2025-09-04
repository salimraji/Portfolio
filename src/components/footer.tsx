import { Typography, Button } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className=" px-8 ">
      <div className="container mx-auto">
        <div className=" flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} Salim Emmanuel Raji
          </Typography>
          <ul className="flex gap-8 items-center">
            <li>
              <Typography
                as="a"
                href="https://www.linkedin.com/in/salimemmanuelraji"
                target="_blank"
                variant="small"
                className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
              >
                LinkedIn
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="https://github.com/salimraji"
                target="_blank"
                variant="small"
                className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
              >
                GitHub
              </Typography>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
