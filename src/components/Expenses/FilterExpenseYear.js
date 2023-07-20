import React from 'react';
import './FilterExpenseYear.css'

const FilterExpenseYear =(props) => {
    const onYearChange = (event) => {

        console.log(event.target.value)
        props.onChangeSelectedYear(event.target.value);
    }
    return (
        <div className='filter-expense-year'>
            <div >
                <label className='filter-expense-year__label'>Filter by Year</label>
            </div>
            <div >
                <select className='filter-expense-year__select' onChange={onYearChange}>
                    <option value="All">All</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>
        </div>
    );
};

export default FilterExpenseYear;