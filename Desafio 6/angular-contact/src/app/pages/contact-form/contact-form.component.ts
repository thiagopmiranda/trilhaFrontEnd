import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactRequestDto, ContactResponseDto } from './contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  formContact: FormGroup;

  mensagens = {
    name: [
      { tipo: 'required', mensagem: 'Nome é obrigatório!' },
      {
        tipo: 'minlenght',
        mensagem: 'O nome deve ter pelo menos 3 caracteres',
      },
    ],
    email: [
      { tipo: 'required', mensagem: 'Email é obrigatório!' },
      { tipo: 'email', mensagem: 'Email Inválido' },
    ],
    subject: [{ tipo: 'required', mensagem: 'O campo Subject é obrigatório!' }],
    message: [
      { tipo: 'required', mensagem: 'O campo Message é obrigatório!' },
      {
        tipo: 'minlenght',
        mensagem: 'Sua mensagem deve ter pelo menos 3 caracteres',
      },
    ],
  };

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {
    this.formContact = this.formBuilder.group({
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      subject: ['', Validators.required],
      message: [
        '',
        Validators.compose([Validators.required, Validators.minLength(10)]),
      ],
    });
  }

  ngOnInit() {}

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
