import { Component } from '@angular/core';
import * as jQuery from 'jquery';

import { CalendarService } from './calendar.service';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.html',
  styleUrls: ['./calendar.scss'],
})
export class Calendar {

  calendarConfiguration: any;
  private _calendar: Object;

  constructor(private _calendarService: CalendarService) {
    this.calendarConfiguration = this._calendarService.getData();
    this.calendarConfiguration.select = (start, end) => this._onSelect(start, end);
  }

  onCalendarReady(calendar): void {
    this._calendar = calendar;
  }

  private _onSelect(start, end): void {

    if (this._calendar !== null) {
      const title = prompt('Event Title:');
      let eventData;
      if (title) {
        eventData = {
          title,
          start,
          end,
        };
        jQuery(this._calendar).fullCalendar('renderEvent', eventData, true);
      }
      jQuery(this._calendar).fullCalendar('unselect');
    }
  }
}
