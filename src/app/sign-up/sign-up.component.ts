import { Component } from '@angular/core';
import { User } from './model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
user: User = new User("", "", "", "");

formSubmitted: boolean = false;

  onSubmit(): void {
    this.formSubmitted = true;
    console.log('Formulaire envoyé !!!');
    }
  }

