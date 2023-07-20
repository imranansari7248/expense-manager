import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {

    if (props.items.length == 0) {
        return <h2>Data Not Found.</h2>
    }
    return (
        <ul>
            {props.items.map((item) => {
                return <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
                />
            })}
        </ul>
    )


}



export default ExpenseList;