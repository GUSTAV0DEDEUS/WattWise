import * as React from 'react';

export interface IDailyExpensiveProps {
}

export default class DailyExpensive extends React.Component<IDailyExpensiveProps> {
  public render() {
    return (
      <div className='bg-card col-span-2 rounded-lg p-6'>
        <h1>Value Daily Expensive</h1>
      </div>
    );
  }
}
