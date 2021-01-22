import { User } from './user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'api/users';

  isLogged: boolean = false;

  loggedUser: User;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`)
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.usersUrl, user, this.httpOptions);
  }
  
  searchUser(postedUser: User): Observable<User> {
    this.getUsers().subscribe(users => users.find(user => {
      if(user.username === postedUser.username &&
       user.password === postedUser.password) {
        this.isLogged = true;
        this.loggedUser = user;
        return this.getUser(user.id);
         }}));
    return of(postedUser);
  }
}
