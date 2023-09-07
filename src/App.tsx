import Button from './components/Button';

const App = () => {
  return (
    <div className='flex justify-center items-center bg-[#5C6877] h-screen'>
      <div className='bg-[#303030] rounded w-[400px] h-[480px]'>
        <div className='flex justify-center gap-5'>
          <Button name='Start' className='bg-[#35713B]' />
          <Button name='Lap' className='bg-[#4C7EC1]' />
          <Button name='End' className='bg-[#AB3839]' />
        </div>
      </div>
    </div>
  );
};

export default App;
