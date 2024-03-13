import * as React from 'react';
import ValueKWH from './components/value_kwh';
import NextReading from './components/next_reading';
import MonthExpense from './components/month_expense';
import GoalExpense from './components/goal_expense';
import DailyExpensive from './components/daily_expense';
import BillExpense from './components/bill_expense';
import Tricks from './components/tricks';

export interface IDashboardProps {
}

export default class Dashboard extends React.Component<IDashboardProps> {
  public render() {
    return (
      <main className='m-auto p-8 h-dvh w-dvw  grid grid-cols-4	grid-rows-[max-content_1fr_1fr] gap-x-8 gap-y-4'>
        <div className='col-span-4'>
          <h1>Hi</h1>
        </div>
        <DailyExpensive />
        <MonthExpense />
        <div className="flex flex-col gap-4">
          <ValueKWH />
          <NextReading />
        </div>
        <GoalExpense />
        <BillExpense/>
        <Tricks />
      </main>
    );
  }
}
