import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { BiereService, Categorie } from 'src/app/services/biere.service';

@Component({
  selector: 'app-newbeer',
  templateUrl: './newbeer.component.html',
  styleUrls: ['./newbeer.component.scss']
})
export class NewbeerComponent implements OnInit {

  nom! : string
  degre! : number
  catId! : number
  catList! : Categorie[]
  constructor(
    private service : BiereService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.service.getCat().subscribe({
      next : (data : Categorie[]) => this.catList = data
    })
  }

  addBeer() : void {
    this.service.addBeer(this.nom, this.catId.toString(), this.degre).subscribe({
      next : () => this.router.navigate(["demo3"])
    })
  }

}
