// useFormatTime.ts
const padTime = (value: number) => {
  return value < 10 ? `0${value}` : `${value}`;
};

const useFormatTime = (timeInSeconds: number) => {
  const formatTime = () => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const formattedHours = padTime(hours);
    const formattedMinutes = padTime(minutes);
    const formattedSeconds = padTime(seconds);

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return formatTime();
};

export default useFormatTime;
