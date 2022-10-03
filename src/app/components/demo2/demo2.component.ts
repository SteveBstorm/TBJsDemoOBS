import { Component, OnInit } from '@angular/core';
import {delay, map, of, tap } from 'rxjs';
@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  liste : any[] = []
  constructor() { }

  ngOnInit(): void {
      const listeObs = of([
        {id : 1, lastname : 'Pendragon', firstname : 'Arthur', role : 'roi'},
        {id : 2, lastname : 'Enchanteur', firstname : 'Merlin', role : 'druide'},
        {id : 3, lastname : 'De Galles', firstname : 'Perceval', role : 'chevalier'},
        {id : 4, lastname : 'De Carmélide', firstname : 'Leodagan', role : 'chevalier'},
      ])

      listeObs.pipe(
        tap((x : any[]) => {
          this.liste = x
          console.log(x)
        }),
        delay(3000),
        tap(() => {console.log("après 3 secondes")}),
        map((x : any[]) => x.filter(x => x.role == 'chevalier'))
      ).subscribe(
        (x => this.liste = x)
      )
  }

}
