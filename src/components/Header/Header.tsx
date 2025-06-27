import { Cart } from "./Cart";
import { Search } from "./Search";
import Logout from "./Logout";
import ActionButtons from "./ActionButtons";
import ProfileCircle from "./ProfileCircle";

export type HeaderProps = {
  onLogout: () => void;
};

const styles = {
  header: "bg-[#f5f5f5] flex items-center justify-between shadow px-4 py-2",
  title: "text-xl font-bold",
  leftSection: "flex items-center gap-2",
  rightSection: "flex items-center gap-3",
};

export default function Header({ onLogout }: HeaderProps) {
  return (
    <header className={styles.header}>
      <section className={styles.leftSection}>
        <h1 className={styles.title}>Mitarbeiter</h1>
        <ActionButtons />
        <Search />
      </section>
      <section className={styles.rightSection}>
        <Cart />
        <ProfileCircle />
        <Logout onLogout={onLogout} />
      </section>
    </header>
  );
}
