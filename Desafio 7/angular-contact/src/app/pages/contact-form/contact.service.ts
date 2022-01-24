import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ContactRequestDto, ContactResponseDto } from './contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  // declarar a url da api
  private url = 'http://localhost:3000/contact-us';

  constructor(private http: HttpClient) {}

  // Criar um Post
  createPost(request: ContactRequestDto): Observable<ContactResponseDto> {
    return this.http.post<ContactResponseDto>(this.url, request);
  }
}
