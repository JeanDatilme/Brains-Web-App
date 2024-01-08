import React from 'react'
import { useContext } from 'react';
import BudgetAppContext from '../../Store/BudgetAppReducer';
import { useEffect } from 'react';
import { BudgetingAppContext } from '../../Store/BudgetAppContext';

function PercentageForm() {


const { savingPercentage, setSavingPercentage,
        wantPercentage, setWantPercentage, 
        needPercentage, setNeedPercentage
    } = useContext(BudgetingAppContext);

  const handleClick = (set, state, value) => {
    const newValue = (state + value)
    const positiveValue = Math.max(0, Math.min(newValue, 100))
    set(positiveValue);
  }

  useEffect(() => {
    const totalPercentage = savingPercentage + wantPercentage + needPercentage;
    if (totalPercentage !== 100) {        // Distribute the difference evenly between the percentages


      const remainingPercentage = 100 - totalPercentage;

      const distributeAmong = [setSavingPercentage, setWantPercentage, setNeedPercentage];

      distributeAmong.forEach((setPercentage) => {
        setPercentage((prevPercentage) => {
          const percentages = +(prevPercentage + remainingPercentage / 3).toFixed(2);
          return Math.max(0, Math.min(100, percentages));
        })
      });

      // distributeAmong.forEach((setPercentage) => {
      //   setPercentage((prevPercentage) => prevPercentage + (remainingPercentage / 3));

      // });

    
    }    

  }, [savingPercentage, wantPercentage, needPercentage]);
  


  return (
    <div className='percentage-form-container'>

      <div className='percentage-category-div'>
        <div className='percentage-display-div'><p className='percentage-ptag'>{savingPercentage}%</p></div>
        <div className='percentage-button-div'>
        <button className='percentage-button' onClick={() => handleClick(setSavingPercentage, savingPercentage, +1 )} >add</button>
        <button className='percentage-button' onClick={() => handleClick(setSavingPercentage, savingPercentage, -1 )} >Subtract</button>
        </div>
      </div>

      <div className='percentage-category-div'>
        <div className='percentage-display-div'><p className='percentage-ptag'>{wantPercentage}%</p></div>
        <div className='percentage-button-div'>
        <button className='percentage-button' onClick={() => handleClick(setWantPercentage, wantPercentage, +1 )}>add</button>
        <button className='percentage-button' onClick={() => handleClick(setWantPercentage, wantPercentage, -1 )}>Subtract</button>
        </div>
      </div>

      <div className='percentage-category-div'>
        <div className='percentage-display-div'><p className='percentage-ptag'>{needPercentage}%</p></div>
        <div className='percentage-button-div'>
        <button className='percentage-button' onClick={() => handleClick(setNeedPercentage, needPercentage, +1 )}>add</button>
        <button className='percentage-button' onClick={() => handleClick(setNeedPercentage, needPercentage, -1 )}>Subtract</button>
        </div>
      </div>

    </div>
  )
}

export default PercentageForm