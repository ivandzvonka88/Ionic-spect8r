import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Event } from '../models/event.model';
import { EventResponse } from '../interfaces/event.interface';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  private events: Event[];
  private subscription: Subscription;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.subscription = this.eventService.events.subscribe(events => {
      this.events = events;
    });
    this.eventService.fetchEvents()/*.subscribe()*/;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
