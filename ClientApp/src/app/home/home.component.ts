import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  highest_number = 100;
  lowest_number = 1;
  formatA = "bold3n";
  formatB = "italic2n";
  listStyle = this.formatA;

  public list_of_numbers: string[] = [];

  constructor() {

    let listElementVal = this.lowest_number;
    // popoulate the array
    while (listElementVal <= this.highest_number) {
      this.list_of_numbers.push(listElementVal.toString());
      listElementVal++;
    }
    console.log("number in list: " + this.list_of_numbers.length);

    setInterval(() => {
      console.log("toggle tick");
      if (this.listStyle === this.formatA) {
        this.listStyle = this.formatB;
      }
      else {
        if (this.listStyle === this.formatB) {
          this.listStyle = this.formatA;
        }
      }
    }, 1000);

  }





}
