import { useState, useEffect } from 'react';

import Time from './components/Time';
import Button from './components/Button';
import List from './components/List';

const App: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [lapTimes, setLapTimes] = useState<number[]>([]);

  useEffect(() => {
    let interval: number | undefined;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  // start, stop button
  const handleStartStop = () => {
    setRunning(!running);
  };

  // lap button
  const handleLap = () => {
    setLapTimes([...lapTimes, time]);
  };

  // end, reset button
  const handleReset = () => {
    setTime(0);
    setLapTimes([]);
  };

  return (
    <div className='flex justify-center items-center bg-[#5C6877] h-screen'>
      <div className='bg-[#303030] rounded w-[400px] h-[480px]'>
        <Time time={time} />
        <div className='flex justify-center gap-5'>
          <Button
            onClick={handleStartStop}
            name={running ? 'Stop' : 'Start'}
            className='bg-[#35713B]'
          />
          <Button onClick={handleLap} name='Lap' className='bg-[#4C7EC1]' />
          <Button onClick={handleReset} name='End' className='bg-[#AB3839]' />
        </div>
        <List time={time} lapTimes={lapTimes} />
      </div>
    </div>
  );
};

export default App;
