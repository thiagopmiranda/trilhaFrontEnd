import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ContactRequestDto, ContactResponseDto } from './contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  formContact!: FormGroup;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.formContact = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50),
      ]),
    });
  }

  get name() {
    return this.formContact.get('name');
  }

  get email() {
    return this.formContact.get('email');
  }
  get subject() {
    return this.formContact.get('subject');
  }
  get message() {
    return this.formContact.get('message');
  }

  postData() {
    if (!this.formContact.valid) {
      console.log('Formulário inválido');
      return;
    }
    console.log('Formulário válido', this.formContact.value);

    const contact: ContactRequestDto = {
      id: 0,
      name: this.formContact.get('name')?.value,
      email: this.formContact.get('email')?.value,
      subject: this.formContact.get('subject')?.value,
      message: this.formContact.get('message')?.value,
    };

    this.contactService.createPost(contact).subscribe({
      next: (response: ContactResponseDto) => {
        console.log(response);
        this.formContact.reset();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
