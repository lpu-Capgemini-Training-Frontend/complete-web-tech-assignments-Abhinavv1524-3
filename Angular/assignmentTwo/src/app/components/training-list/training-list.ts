import { Component } from '@angular/core';
import { Training } from '../../services/training';

@Component({
  selector: 'app-training-list',
  imports: [],
  templateUrl: './training-list.html',
  styleUrl: './training-list.css',
})
export class TrainingList {
  trainings: any[] = [];

  constructor(private service: Training) {}

  ngOnInit() {
    this.trainings = this.service.getTrainings();
  }
}
