import * as React from 'react';

export interface IMonthExpenseProps {
}

export default class MonthExpense extends React.Component<IMonthExpenseProps> {
  public render() {
    return (
      <div className='bg-card col-span-2 rounded-lg p-6'>
        <h1>Month Expense</h1>
      </div>
    );
  }
}
