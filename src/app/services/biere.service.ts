import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BiereService {

  private url : string = environment.url
  constructor(
    private client : HttpClient
  ) { }

  getAll() : Observable<Biere[]> {
    return this.client.get<Biere[]>(this.url+"bieres")
  }

  getCat() : Observable<Categorie[]> {
    return this.client.get<Categorie[]>(this.url+"categorie")
  }

  getDetail(id : number) : Observable<Biere> {
    return this.client.get<Biere>(this.url+"bieres/"+id)
      .pipe(
        mergeMap(
          (b : Biere) => {
              return this.client.get<Categorie>(this.url+"categorie/"+b.idCat)
              .pipe(
                map((c : Categorie) => {
                  b.categorie = c.nom
                  return b
                })
              )
          }
        )
      )
  }

  selected! : Biere
  getFoireu(id : number) {

     this.client.get<Biere>(this.url+"bieres/"+id).subscribe({
      next : (biere : Biere) => {
        this.selected = biere
        this.client.get<Categorie>(this.url+"categorie/"+this.selected.idCat).subscribe({
          next : (c : Categorie) => this.selected.categorie = c.nom
        })
      }
    })
    return this.selected;

  }

  addBeer(nom: string, catid : string, degre : number) {
    let idCat : number = Number.parseInt(catid)
    return this.client.post(this.url+"bieres", {nom, degre, idCat})
  }

  delete(id : number) {
    return this.client.delete(this.url+"bieres/"+id)
  }
}


export interface Biere {
  id : number
  nom : string
  degre : number
  idCat : number
  categorie : string
}

export interface Categorie {
  id : number
  nom : string
}

export interface FullBiere {
  id : number
  nom : string
  degre : number

}
