import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface Workout {
  userName: string;
  workoutType: string;
  workoutMinutes: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  workoutForm: FormGroup;
  workouts: Workout[] = [];

  constructor() {
    this.workoutForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      workoutType: new FormControl('', Validators.required),
      workoutMinutes: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  addWorkout(): void {
    if (this.workoutForm.valid) {
      const workout: Workout = {
        userName: this.workoutForm.get('userName').value,
        workoutType: this.workoutForm.get('workoutType').value,
        workoutMinutes: this.workoutForm.get('workoutMinutes').value
      };
      this.workouts.push(workout);
      this.workoutForm.reset();
    }
  }
}