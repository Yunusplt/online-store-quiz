import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Search } from "./Search";
import { Cart } from "./Cart";

type HeaderProps = {
  onLogout: () => void;
};

export default function NewHeader({ onLogout }: HeaderProps) {
  return (
    <header className="bg-[#f5f5f5] flex items-center justify-between shadow px-4 py-2">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">Mitarbeiter</h1>
        <div className="bg-white rounded-3xl  p-1.5 flex items-center ">
          {/* create 5 button side by side */}
          <button className="px-3 py-1  text-blue-500 border rounded-lg w-25 text-xs hover:bg-blue-600 transition">
            button
          </button>
          <button
            className="px-3 py-1  text-blue-500 border rounded-lg w-25 text-xs
                hover:bg-green-600 transition ml-2"
          >
            button
          </button>
          <button
            className="px-3 py-1  text-blue-500 border rounded-lg w-25 text-xs   
                hover:bg-yellow-600 transition ml-2"
          >
            button
          </button>
          <button
            className="px-3 py-1 rounded-lg w-25 text-xs font-bold
                hover:bg-red-600 transition ml-2"
          >
            Loger
          </button>
          <button
            className="px-3 py-1  text-blue-500 border rounded-lg w-25 text-xs
                hover:bg-gray-600 transition ml-2"
          >
            Production
          </button>
        </div>
        <Search />
      </div>
      <div className="flex items-center gap-3">
        <Cart />
        <button
          className="flex items-center cursor-pointer px-2 py-1 rounded-full bg-white hover:bg-gray-200 transition"
          onClick={() => console.log("Profile clicked")}
        >
          <PersonOutlinedIcon className="text-gray-600" fontSize="small" />
        </button>
        <button
          onClick={onLogout}
          className="flex items-center px-2 py-1 cursor-pointer rounded-full bg-white  hover:bg-gray-200 transition"
        >
          <ExitToAppOutlinedIcon className="text-gray-600" fontSize="small" />
        </button>
      </div>
    </header>
  );
}
