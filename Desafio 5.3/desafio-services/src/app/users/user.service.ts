import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  RequestCreate,
  RequestUpdate,
  ResponseCreate,
  ResponseUpdate,
  ResponseUser,
  ResponseUsers,
} from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // declarar a url da api
  private url = 'https://reqres.in/api/users';

  // Declarar / Injetar independencia no Construtor
  constructor(private http: HttpClient) {}

  // Usar Observable para gerar um retorno da url
  getUsers(): Observable<ResponseUsers> {
    return this.http.get<ResponseUsers>(this.url);
  }

  // Criar um Post
  createUser(request: RequestCreate): Observable<ResponseCreate> {
    return this.http.post<ResponseCreate>(this.url, request);
  }

  // criar um método para selecionar por id
  getUserById(id: string): Observable<ResponseUser> {
    const _url = `${this.url}/${id}`;
    return this.http.get<ResponseUser>(_url);
  }

  // atualizar os dados por id
  updateUser(id: string, request: RequestUpdate): Observable<ResponseUpdate> {
    const _url = `${this.url}/${id}`;
    return this.http.put<ResponseUpdate>(_url, request);
  }
  // setUsers(users: any): <any> { }

  // deleteUser(userId: number): <any> { }
  deleteUser(id: string): Observable<any> {
    const _url = `${this.url}/${id}`;
    return this.http.delete<any>(_url);
  }
}
