import { EyeIcon } from "lucide-react";

type DetailButtonProps = {
  onClick: () => void;
};

export const DetailButton = ({ onClick }: DetailButtonProps) => (
  <button
    className="flex items-center text-blue-400 px-2 py-1 rounded-full bg-gray-200 hover:bg-gray-400 hover:text-white transition cursor-pointer"
    onClick={onClick}
  >
    <EyeIcon className="inline" size={16} />
  </button>
);
