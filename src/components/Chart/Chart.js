import React from "react";
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const maximumValue = Math.max(...props.dataValues.map((dataValue) => dataValue.value));
    console.log(maximumValue)
    
    return (
        <div className='chart'>
            {props.dataValues.map((dataValue) => {
                return <ChartBar
                    key={dataValue.month}
                    value={dataValue.value}
                    maxValue={maximumValue}
                    month={dataValue.month}
                />
            })}
        </div>
    )
};

export default Chart;