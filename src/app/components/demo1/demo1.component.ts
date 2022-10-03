import { Component, OnInit } from '@angular/core';
import { FakeauthService } from 'src/app/services/fakeauth.service';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

  isConnected! : boolean
  constructor(
    private service : FakeauthService
  ) { }

  ngOnInit(): void {
    this.service.connectionSubject.subscribe({
      next : (data : boolean) => this.isConnected = data,
      error : (error) => console.log(error),
      complete : () => console.log("j'ai fini")
    })

  }

  login() {
    this.service.login()
  }

  logout() {
    this.service.logout()
  }

}
