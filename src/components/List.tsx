type ListProps = {
  lapTimes: number[];
};

const List: React.FC<ListProps> = ({ lapTimes }) => {
  const formatListTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const formatHours = hours.toString().padStart(2, '0');
    const formatMinutes = minutes.toString().padStart(2, '0');
    const formatSeconds = seconds.toString().padStart(2, '0');

    return `${formatHours}:${formatMinutes}:${formatSeconds}`;
  };

  return (
    <div className='py-12'>
      <ul>
        <li className='flex justify-between text-white pl-7 pr-36'>
          <span className='py-3'>Lap</span>
          <span className='py-3'>Time</span>
        </li>
      </ul>

      <ul>
        {lapTimes.map((lapTime, index) => {
          return (
            <div
              key={index}
              className={`flex justify-between text-white pl-7 pr-28 py-1 ${
                index % 2 === 0 ? 'bg-[#4D7DC1] p-1' : ''
              }`}
            >
              <li>{index + 1}</li>
              <li>{formatListTime(lapTime)}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
