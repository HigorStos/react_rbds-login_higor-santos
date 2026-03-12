export const Loading = () => {
  return (
    <div className='absolute inset-0 flex items-center justify-center bg-gray-500/50 z-50'>
      <div className='w-8 h-8 border-4 border-gray-200 border-t-orange-500 rounded-full animate-spin' />
    </div>
  );
};
