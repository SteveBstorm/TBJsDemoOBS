import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Biere, BiereService } from 'src/app/services/biere.service';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  liste! : Biere[]
  selected! : Biere
  constructor(
    private service : BiereService
  ) { }

  ngOnInit(): void {
    this.service.getAll().pipe(
      map((x : Biere[]) => x.filter(b => b.idCat == 1) )
    ).subscribe({
      next : (data : Biere[]) => {
        this.liste = data
      }
    })
  }

   getById(id : number){
    this.selected = this.service.getFoireu(id)
    // this.service.getDetail(id).subscribe({
    //   next : (b : Biere) => this.selected = b
    // })
  }

}
