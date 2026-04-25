import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { AddTraining } from './components/add-training/add-training';
import { TrainingList } from './components/training-list/training-list';

export const routes: Routes = [
    { path : '', component : Login},
    { path : 'add', component : AddTraining },
    { path : 'list', component : TrainingList}
];
