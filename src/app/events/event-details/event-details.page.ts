import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Event } from '../../models/event.model';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit, OnDestroy {
  event: Event;
  segment: string;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private eventService: EventService) {
    this.segment = 'settings';
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.subscription = this.route.paramMap.subscribe(paramMap => {
      this.eventService.getEvent(paramMap.get('eventId')).subscribe(event => {
        console.log(event);
        this.event = event;
      });
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  get headlinerLabel(): string {
    return this.event.headliningArtists.length > 1 ? 'Headliners' : 'Artist';
  }

  get supportingLabel(): string {
    return this.event.supportingArtists.length > 0 ? 'Support' : '';
  }

  get venueName(): string {
    return this.event.venue !== undefined ? this.event.venue.venueName : '';
  }

  get date(): string {
    return this.event.eventDate !== undefined ? this.event.eventDate : '';
  }

  get setlistUrl(): string {
    return this.event.setlist !== undefined ? this.event.setlist.url : '';
  }

  segmentChanged() {
    console.log('segmentChanged: ' + this.segment);
  }
}
