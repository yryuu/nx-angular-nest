import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@nx-base/api-interfaces';

@Component({
  selector: 'nx-base-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('http://localhost:3333/api/hello');
  constructor(private http: HttpClient) {}
}
