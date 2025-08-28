import { BsGrid3X3GapFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { IoMdMic } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";
import { RiVideoUploadLine } from "react-icons/ri";

export default function Header() {
  return (
    <div className="flex items-center justify-between gap-10 bg-[#121212] h-[60px] w-full">
      {/* header left wrapper */}
      <div className="flex items-center gap-6">
        <button className="text-2xl font-bold text-white font-roboto cursor-pointer">
          <IoMenuSharp />
        </button>
        <img
          src="/logo.png"
          alt="logo"
          className="max-w-[89px] w-full h-[20px] object-cover cursor-pointer text-white"
        />
      </div>
      {/* search wrapper */}
      <div className="max-w-[578px] w-full h-[36px] flex items-center">
        <form className="w-full h-full flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="max-w-[478px] w-full h-full border-[#323232] border-2 rounded-[2px] pl-3 outline-0"
          />
          <button
            type="submit"
            className="w-[56px] h-full bg-[#323232] text-white font-bold cursor-pointer flex items-center justify-center"
          >
            <CiSearch color="white" size={"1.5rem"} />
          </button>
          <button
            type="submit"
            className="w-[56px] h-full bg-[#121212] text-white font-bold cursor-pointer flex items-center justify-center"
          >
            <IoMdMic color="white" size={"1.5rem"} />
          </button>
        </form>
      </div>

      {/* header right wrapper */}
      <div className="flex items-center gap-6">
        <button className='text-white font-bold cursor-pointer'>
          <RiVideoUploadLine  size={"1.5rem"}/>
        </button>
        <button className='text-white font-bold cursor-pointer'>
          <BsGrid3X3GapFill  size={"1.5rem"}/>
        </button>
        <button className='text-white font-bold cursor-pointer'>
          <FaBell size={"1.5rem"}/>
        </button>
        <button className='w-[30px] h-[30px] cursor-pointer'>
            <img src="/channel.jpg" alt='channel image' className="w-[30px] h-[30px] object-cover rounded-full" />
        </button>
      </div>
    </div>
  );
}
