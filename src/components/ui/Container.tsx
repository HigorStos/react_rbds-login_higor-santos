import { cn } from '@/utils/cn';

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: IContainerProps) => {
  return (
    <div className={cn('w-full flex items-center justify-center', className)}>
      {children}
    </div>
  );
};
