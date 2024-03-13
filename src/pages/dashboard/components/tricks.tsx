import * as React from 'react';

export interface ITricksProps {
}

export default class Tricks extends React.Component<ITricksProps> {
  public render() {
    return (
      <div className='bg-card rounded-lg p-6'>
        <h1>Tricks for your expenses</h1>
      </div>
    );
  }
}
