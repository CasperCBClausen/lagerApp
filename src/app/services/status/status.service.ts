import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  csvUrl = 'assets/events.csv';

  constructor(
    private httpClient: HttpClient
  ) { }

  
}
