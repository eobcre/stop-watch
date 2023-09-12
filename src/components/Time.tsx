type TimeProps = {
  formatTime: () => string;
};

const Time: React.FC<TimeProps> = ({ formatTime }) => {
  return (
    <div className='flex justify-center items-center mt-10 mb-4'>
      <p className='text-white text-[36px]'>{formatTime()}</p>
    </div>
  );
};

export default Time;
