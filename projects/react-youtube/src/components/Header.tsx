import { IoMenuSharp } from "react-icons/io5";

export default function Header() {
  return (
    <div className='flex items-center justify-between gap-10 bg-black'>
        {/* header left wrapper */}
        <div className="flex items-center gap-6">
            <button className="text-2xl font-bold text-white font-roboto">
                <IoMenuSharp />
            </button>
            <img src='/logo.png' alt='logo' height={"40em"} width={"40em"}/>
        </div>
    </div>
  )
}
