import React from 'react';
import weeklyTasks from '../utils/ALLweeklytasks.json';

const GOOGLE_FORM_URL ='https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform';


const getWeekNumber = () => {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 1);
  const diff = today - start;
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  return Math.ceil((diff + start.getDay() * 86400000) / oneWeek);
};



const WeeklyTask = () => {
    const currentWeek = getWeekNumber();
    const task = weeklyTasks[currentWeek];
  return (
    
    <div
    className="max-w-[800px]  max-h-[800px] mx-auto my-10 p-5 border-2 border-[#007bff] text-3xl md:text-4xl font-bold mb-8 dark: rounded-[10px] bg-[#f0f8ff] dark:bg-slate-800 text-center text-white-900  font-[Arial,sans-serif] "
    >
      <p>
        <strong>Week {currentWeek}</strong><br /> 
        
        
      </p>
       <p >
         Task:<br /> {task}
        
        
      </p>
      <button
      onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
       
        className="px-6 py-2.5 mt-12 text-base bg-blue-600 rounded-md text-white cursor-pointer transition-colors duration-300 hover:bg-blue-700"

        onMouseEnter={e => (e.target.style.backgroundColor = '#0056b3')}
        onMouseLeave={e => (e.target.style.backgroundColor = '#007bff')}
      >
        Submit your Work
      </button>
    </div>
    
  );
};

export default WeeklyTask;
