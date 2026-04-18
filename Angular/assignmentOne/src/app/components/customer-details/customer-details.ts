import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  imports: [DatePipe],
  templateUrl: './customer-details.html',
  styleUrl: './customer-details.css',
})
export class CustomerDetails {
  @Input() customerObj = {
    id: 0,
    name: "",
    address : "",
    email : "",
    phone : "",
    dateOfBirth : new Date(),
    gender : ""
  }
}
