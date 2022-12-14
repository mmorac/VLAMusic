import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as fs from 'fs';


@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  filecontent:string = '';

  constructor(private http:HttpClient) { 
    this.obtenerCredenciales();
  }

  obtenerToken():any{
  }

  obtenerCredenciales():any{
    const fileName:string = 'C:\\Users\\mario\\Curso Front End\\Senior\\VLAMusic\\src\\assets\\secrets\\secrets.txt';
    this.http.get(fileName, {responseType: 'text'}).subscribe(data => console.log(data));
    
  }
}
