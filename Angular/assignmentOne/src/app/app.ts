import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerDetails } from './components/customer-details/customer-details';
import { FormsModule } from '@angular/forms';


interface Customer{
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  gender: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomerDetails, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('assignmentOne');

  searchItem: string = '';
  filteredCustomerList: Customer[] = [];

  customerList: Customer[] = [
    {
      id: 1,
      name: "Abhinav Choudhary",
      address: "123 Punjab",
      email: "abhinav@gmail.com",
      phone: "1234567890",
      dateOfBirth: new Date("2000-01-01"),
      gender : "Male"
    },
    {
      id: 2,
      name: "Deepak Kumar",
      address: "456 Haryana",
      email: "deepak@gmail.com",
      phone: "0987654321",
      dateOfBirth: new Date("2001-05-15"),
      gender : "Male"
    },
    {
      id: 3,
      name: "Priya Singh",
      address: "789 Rajasthan",
      email: "priya@gmail.com",
      phone: "1111111111",
      dateOfBirth: new Date("2002-08-20"),
      gender : "Female"
    },
    {
      id: 4,
      name: "Anjali Sharma",
      address: "321 Uttar Pradesh",
      email: "anjali@gmail.com",
      phone: "2222222222",
      dateOfBirth: new Date("2003-12-10"),
      gender : "Female"
    },
    {
      id: 5,
      name: "Rahul Verma",
      address: "654 Bihar",
      email: "rahul@gmail.com",
      phone: "3333333333",
      dateOfBirth: new Date("2004-03-25"),
      gender : "Male"
    },{
      id: 6,
      name: "Sneha Patel",
      address: "987 Gujarat",
      email: "sneha@gmail.com",
      phone: "4444444444",
      dateOfBirth: new Date("2005-07-30"),
      gender : "Female"
    },
    {
      id: 7,
      name: "Deepika Reddy",
      address: "159 Andhra Pradesh",
      email: "deepika@gmail.com",
      phone: "5555555555",
      dateOfBirth: new Date("2006-11-05"),
      gender : "Female"
    }
  ];

  startIndex = 0;
  endIndex = 5;
  pageSize = 5;

  constructor() {
    this.filteredCustomerList = this.customerList;
  }

  onSearchChange(): void {
    const query = this.searchItem.trim().toLowerCase();

    if (query === '') {
      this.filteredCustomerList = this.customerList;
    } else {
      this.filteredCustomerList = this.customerList.filter((customer) =>
        customer.name.toLowerCase().includes(query)
      );
    }

    this.startIndex = 0;
    this.endIndex = this.pageSize;
  }

  previousPage(){
    if (this.startIndex > 0) {
      this.startIndex -= this.pageSize;
      this.endIndex -= this.pageSize;
    }
  }

  nextPage(){
    if (this.endIndex < this.filteredCustomerList.length) {
      this.startIndex += this.pageSize;
      this.endIndex += this.pageSize;
    }
  }

}
