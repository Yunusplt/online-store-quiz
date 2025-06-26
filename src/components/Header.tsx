import { useAuthUser } from "@/hooks/useAuthUser";

type HeaderProps = {
  onLogout: () => void;
};

export const Header = ({ onLogout }: HeaderProps) => {
  const user = useAuthUser();
  console.log("User data:", user.data);
  return (
    <header className="flex justify-end p-4 bg-white shadow">
      <button
        onClick={onLogout}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </header>
  );
};
