<<<<<<< Updated upstream
import { HttpClient } from '@angular/common/http';
=======
>>>>>>> Stashed changes
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

<<<<<<< Updated upstream
  constructor(private http: HttpClient) { }
 
  getUsuariosRedesSociales(){
    return this.http.get('http://localhost:3000/grafica')
  }

} 
=======
  constructor() { }
}
>>>>>>> Stashed changes
