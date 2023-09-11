type ListProps = {
  lapTimes: number[];
};

const List: React.FC<ListProps> = ({ lapTimes }) => {
  return (
    <div className='py-12'>
      <ul>
        <li className='flex justify-between text-white pl-7 pr-36'>
          <span className='py-3'>Lap</span>
          <span className='py-3'>Time</span>
        </li>
      </ul>

      <ul>
        {lapTimes.map((lapTime, index) => (
          <div
            key={index}
            className={`flex justify-between text-white pl-7 pr-28 ${
              index % 2 == 0 ? 'bg-[#4D7DC1]' : ''
            }`}
          >
            <li>{index + 1}</li>
            <li>{lapTime} seconds</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default List;
