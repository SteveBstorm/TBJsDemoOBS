import { Component, OnInit } from '@angular/core';
import { FakeauthService } from 'src/app/services/fakeauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isConnected!: boolean
  constructor(
    private service : FakeauthService
  ) { }

  ngOnInit(): void {

    this.service.connectionSubject.subscribe({
      next : (data : boolean) => this.isConnected = data,
      error : (error) => console.log(error),
      complete : () => console.log("j'ai fini")
    }


    )
  }

}
