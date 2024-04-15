export const Button = ({
  children,
  onClick,
  active = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
}) => {
  return (
    <button
      className={`border border-white text-center text-white px-[10px] py-[5px] text-sm leading-6 hover:bg-slate-600 ${
        active ? "bg-slate-600" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
