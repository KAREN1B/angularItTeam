
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})

export class InfoImageService {
  constructor(private http: HttpClient) {}
	key='13119377-fc7e10c6305a7de49da6ecb25';
	query=''
	category=''
  private urlApiImages = `https://pixabay.com/api/?key=${this.key}`
  /*  */
  public getinfoImage(): Observable<any>{
    return this.http.get<any>(this.urlApiImages);
  }
	/* Filtra imagenes por palabra */
  public getFilterImage(query:string): Observable<any>{
    return this.http.get<any>(this.urlApiImages+`&q=${query}`);
  }
	/* Filra por categorias */
  public getFilterCategoryImage(category:string): Observable<any>{
    return this.http.get<any>(this.urlApiImages+`&category=${category}`);
  }





}

