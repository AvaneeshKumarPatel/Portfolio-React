import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <div
      style={{
        backgroundImage: `url("https://www.eihabkhan.com/_next/image?url=%2Fassets%2Fgradient%2Fheader-gradient.png&w=1920&q=75")`,
      }}
      className="pb-40 pt-9 bg-black bg-cover bg-top bg-no-repeat"
    >
      <div className=" container mx-auto bg-center bg-cover flex h-16 w-full max-w-[1024px] items-center justify-between rounded-xl border-[1px] border-white/25bg-white/25 px-4 backdrop-blur-md dark:border-card-border/20 dark:bg-[#18181D]/30 ">
        <div>
          <div className="flex flex-row justify-center  text-white gap-11  ">
            <div className="text-white text-xl font-bold">[A]</div>
            <ul className="items-center justify-center  flex flex-row gap-6">
              <li>Home</li>
              <li>About</li>
              <li>Project</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        {/* Right-side: icons */}

        <div className="flex gap-4 text-gray-300 justify-center items-center ml-auto ">
          <FaLinkedin className="text-xl cursor-pointer hover:text-white" />
          <FaGithub className="text-xl cursor-pointer hover:text-white" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
