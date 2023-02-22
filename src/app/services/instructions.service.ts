import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }    from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {IInstructions} from 'src/app/Models/IInstructions';
import { DtoCreateInstruction } from '../Models/DtoCreateInstruction';
@Injectable({
  providedIn: 'root'
})
export class InstructionsService {
  public instructions: IInstructions[] = [];
  constructor(private http: HttpClient) { }

  getData() : Observable<any> {
    return this.http.get(environment.apiUrl +"/instructions");
    
  }
  postCreateCustomerProfile(request: DtoCreateInstruction){

  }
    
}

