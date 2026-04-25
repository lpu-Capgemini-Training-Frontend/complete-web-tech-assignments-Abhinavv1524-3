import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Training {
  triaings : Training[] = []

  private role: string = '';

  setRole(role: string) {
    this.role = role;
  }

  getRole() : string{
    return this.role;
  }

  addTraining(training: Training){
    this.triaings.push(training);
  }

  getTrainings() : Training[]{
    return this.triaings;
  }
}
