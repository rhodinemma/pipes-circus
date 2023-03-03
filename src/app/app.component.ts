import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number = 0.0;

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(event: Event) {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      this.date = target.value;
    }
  }

  onAmountChange(event: Event) {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      this.amount = parseFloat(target.value);
    }
  }
}
