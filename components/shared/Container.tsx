import { twMerge } from "tailwind-merge";
interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={twMerge("max-w-[1400px] mx-auto px-4 lg:px-16", className)}>
      {children}
    </div>
  );
};

export default Container;