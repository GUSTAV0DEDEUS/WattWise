import * as React from 'react';

export interface IValueKWHProps {
}

export default class ValueKWH extends React.Component<IValueKWHProps> {
  public render() {
    return (
      <div className='bg-card rounded-lg flex-1 p-6'>
        <h1>Value KWH</h1>
      </div>
    );
  }
}
