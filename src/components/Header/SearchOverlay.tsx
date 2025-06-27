type SearchOverlayProps = {
  onClose: () => void;
};

const styles = {
  overlay:
    "fixed inset-0 top-16 bg-black opacity-[.5] z-49 flex items-center justify-center",
};

export const SearchOverlay = ({ onClose }: SearchOverlayProps) => {
  return <div className={styles.overlay} onClick={onClose}></div>;
};
