import * as React from 'react';

export interface IBillExpenseProps {
}

export default class BillExpense extends React.Component<IBillExpenseProps> {
  public render() {
    return (
      <div className='bg-card rounded-lg flex-1 p-6'>
        <h1>Value Bill Expense</h1>
      </div>
    );
  }
}
