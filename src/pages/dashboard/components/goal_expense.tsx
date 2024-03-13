import * as React from 'react';

export interface IGoalExpenseProps {
}

export default class GoalExpense extends React.Component<IGoalExpenseProps> {
  public render() {
    return (
      <div className='bg-card rounded-lg p-6'>
        <h1>Value Goal Expense</h1>
      </div>
    );
  }
}
