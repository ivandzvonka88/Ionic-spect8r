import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { Event } from '../models/event.model';
import { EventResponse } from '../interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private _events = new BehaviorSubject<Event[]>([]);

  private _eventsUrl = 'http://api.spect8r.com/v1/events';
  //private _eventsUrl = 'http://localhost:10010/v1/events';

  constructor(private http: HttpClient) { }

  get events() {
    return this._events.asObservable();
  }

  fetchEvents() {
    return this.http
      .get<EventResponse>(this._eventsUrl)
      .subscribe((json: EventResponse) => {
        console.log(json);
        this._events.pipe(take(1)).subscribe(places => {
          this._events.next(json.events);
        });
      });
  }

  getEvent(id: string) {
    return this.events.pipe(take(1), map(events => {
      return { ...events.find(e => e.eventId == id) }
    }));
  }
}
