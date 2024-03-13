import * as React from 'react';
import Sidebar from '../../components/sidebar';

export interface IDashboardProps {
}

export default class Dashboard extends React.Component<IDashboardProps> {
  public render() {
    return (
      <>
        <Sidebar></Sidebar>
      </>
    );
  }
}
