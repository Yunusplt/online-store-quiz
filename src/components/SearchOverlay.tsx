type SearchOverlayProps = {
  onClose: () => void;
};

export const SearchOverlay = ({ onClose }: SearchOverlayProps) => {
  return (
    <div
      className="fixed inset-0 top-16 bg-black opacity-[.5] z-49 flex items-center justify-center"
      onClick={onClose}
    ></div>
  );
};
