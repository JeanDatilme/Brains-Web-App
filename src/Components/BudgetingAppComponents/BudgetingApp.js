import React from 'react'
import PercentageForm from './PercentageForm'
import AmountForm from './AmountForm'
import DataConstructor from './DataConstructor'
import {BudgetAppReducer} from '../../Store/BudgetAppReducer'
import BarChart from './BarChart'
import { useReducer, useState } from 'react'
import { BudgetingAppContext, chart, options } from '../../Store/BudgetAppContext'

function BudgetingApp() {

  const [chartData, setChartData] = useReducer(BudgetAppReducer, chart);
  const [chartOptions, setChartOptions] = useReducer(BudgetAppReducer ,options);

  const [amount,setAmount] = useState(null);
  const [savingPercentage, setSavingPercentage] = useState(20);
  const [wantPercentage, setWantPercentage] = useState(30);
  const [needPercentage, setNeedPercentage] = useState(50);
  const [savingData, setSavingData] = useState({ x: 'Saving', y: null, label: 'Label C1' });
  const [wantsData, setWantsData] = useState({ x: 'Wants', y: null, label: 'Label C1' });
  const [needsData, setNeedsData] = useState({ x: 'Needs', y: null, label: 'Label C1' });

  return (
    <BudgetingAppContext.Provider value={
      { amount, setAmount, 
        savingPercentage, setSavingPercentage,
        wantPercentage, setWantPercentage, 
        needPercentage, setNeedPercentage, 
        chartData, setChartData, 
        savingData, setSavingData, 
        wantsData, setWantsData, 
        needsData, setNeedsData,
        chartOptions, setChartOptions
      }}>
      

    <div className='budgeting-app-container'>
      <BarChart reducerChartData={chartData} reducerOptionsData={chartOptions} />
      <PercentageForm/>
      <AmountForm/>
      <DataConstructor/>
    </div>
    </BudgetingAppContext.Provider>
  )
}

export default BudgetingApp