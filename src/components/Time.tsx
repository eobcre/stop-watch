import useFormatTime from '../hooks/useFormatTime';

type TimeProps = {
  time: number;
};

const Time: React.FC<TimeProps> = ({ time }) => {
  const formatTime = useFormatTime(time);

  return (
    <div className='flex justify-center items-center mt-10 mb-4'>
      <p className='text-white text-[36px]'>{formatTime}</p>
    </div>
  );
};

export default Time;
