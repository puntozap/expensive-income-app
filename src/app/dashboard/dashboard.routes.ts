import { Route, Routes } from "@angular/router";
import { StatsComponent } from '../expense-income/stats/stats.component';
import { ExpenseIncomeComponent } from '../expense-income/expense-income.component';
import { DetailComponent } from '../expense-income/detail/detail.component';




export const dashboardRoutes:Routes = [
    {path:"",component:StatsComponent},
    {path:"expense-incomes",component:ExpenseIncomeComponent},
    {path:"details",component:DetailComponent},
]
