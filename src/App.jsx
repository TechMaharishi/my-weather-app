import React from 'react';
import Cards from './components/Cards';
import Widgets from './components/Widgets';

const App = () => {
  return (
    <>
      {/* Main container with background color and full screen height */}
      <div className='bg-zinc-200 w-full min-h-screen'>

        {/* Styled header */}
        <h1 className='py-3 text-4xl font-bold text-center text-gray-800'>WEATHER APP</h1>

        {/* Flex container to wrap Cards and Widgets */}
        <div className='flex flex-wrap'>

          {/* Cards container: full width on small screens, 40% width on medium screens and up */}
          <div className='w-full md:w-[40%] h-full flex justify-center items-center p-2'>
            <Cards />
          </div>

          {/* Widgets container: full width on small screens, 60% width on medium screens and up */}
          <div className='w-full md:w-[60%] h-full grid gap-5 p-2 md:p-9' style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}>
            <Widgets />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
