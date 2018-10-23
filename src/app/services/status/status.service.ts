import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  csvUrl = 'assets/events.csv';
  events: string[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  createEvent(event: string) {
   
  }

  async updateEvents(){
    await this.readevents();
  }

  readevents() {
    this.httpClient.get(this.csvUrl, { responseType: 'text' })
      .subscribe(
        data => {
          this.events = data.split(',');
        },
        error => {
          console.log(error);
        }
      );
  }
}
