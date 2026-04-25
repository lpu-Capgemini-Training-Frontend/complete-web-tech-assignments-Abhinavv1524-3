import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Training } from '../../services/training';

@Component({
  selector: 'app-add-training',
  imports: [ReactiveFormsModule],
  templateUrl: './add-training.html',
  styleUrl: './add-training.css',
})
export class AddTraining {
  trainingForm!: FormGroup;

  constructor(private fb: FormBuilder,public service: Training) {}

  ngOnInit() {
    this.trainingForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      topic: ['', Validators.required],
      maxtrainees: ['', Validators.required],
      startdate: ['', Validators.required],
      enddate: ['', Validators.required],
      trainername: ['', Validators.required],
      venue: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.trainingForm.valid) {
      this.service.addTraining(this.trainingForm.value);
      console.log("Training Added");
      console.log(this.trainingForm.value);
      this.trainingForm.reset();
    }
  }
}
