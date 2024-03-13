import * as React from 'react';

export interface INextReadingProps {
}

export default class NextReading extends React.Component<INextReadingProps> {
  public render() {
    return (
      <div className='bg-card flex-1 rounded-lg p-6'>
        <h1>Value Next Reading</h1>
      </div>
    );
  }
}
