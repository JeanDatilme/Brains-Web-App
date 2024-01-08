import React from 'react'
import { useContext } from 'react';
import { BudgetingAppContext } from '../../Store/BudgetAppContext';
import { useState } from 'react'
import { useEffect } from 'react';



function DataContructor() {

  const {amount,savingPercentage, 
        wantPercentage,needPercentage,
        setChartData, 
        savingData,setSavingData,
        wantsData, setWantsData,
        needsData, setNeedsData
  } = useContext(BudgetingAppContext);



  useEffect(() => {
    setSavingData((prevSavingData) => ({
      ...prevSavingData,
      y: parseFloat((amount * savingPercentage) / 100),
      label: `Savings: ${ ( +(amount * savingPercentage) / 100).toFixed(2) }$`, 
    }));
  }, [amount, savingPercentage]);

  useEffect(() => {
    setWantsData((prevWantsData) => ({
      ...prevWantsData,
      y: parseFloat((amount * wantPercentage) / 100),
      label: `Wants: ${( +(amount * wantPercentage) / 100).toFixed(2) }$`, 
    }));
  }, [amount, wantPercentage]);

  useEffect(() => {
    setNeedsData((prevNeedsData) => ({
      ...prevNeedsData,
      y: parseFloat((amount * needPercentage) / 100),
      label: `Needs: ${ ( +(amount * needPercentage) / 100).toFixed(2) }$`, 
    }));
  }, [amount, needPercentage]);



  useEffect(() => {
    setChartData({type: 'DataChange', payload: [savingData, wantsData, needsData]});
  }, [savingData, wantsData, needsData, setChartData]);

  // console.log(data);

  return (
    null
  )
}

export default DataContructor