// components/Header.tsx
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

type HeaderProps = {
  onLogout: () => void;
};

export default function NewHeader({ onLogout }: HeaderProps) {
  return (
    <header className="bg-[#f5f5f5] flex items-center justify-between shadow px-4 py-2">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">Mitarbeiter</h1>
      </div>
      <div className="flex items-center gap-3">
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
