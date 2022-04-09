import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  private now = new Date();

  transform(value: string): string {
    const then = new Date(value)
    const timePassed = this.now.getTime() - then.getTime();
    const secondInMs = 1000
    const minuteInMS = 60 * secondInMs
    const hourInMS = minuteInMS * 60
    const dayInMS = hourInMS * 24
    const monthInMS = dayInMS * 30
    const yearInMS = dayInMS * 365
    // const yearInMSM = monthInMS * 12
    if (timePassed < minuteInMS) {
      if (Math.floor(timePassed / secondInMs) < 2) {
        return `${Math.floor(timePassed / secondInMs)} second ago`;
      }
      return `${Math.floor(timePassed / secondInMs)} seconds ago`;
    }
    if (timePassed < hourInMS) {
      if (Math.floor(timePassed / minuteInMS) < 2) {
        return `${Math.floor(timePassed / minuteInMS)} minute ago`;
      }
      return `${Math.floor(timePassed / minuteInMS)} minutes ago`;
    }
    if (timePassed < dayInMS) {
      if (Math.floor(timePassed / hourInMS) < 2) {
        return `${Math.floor(timePassed / hourInMS)} hour ago`;
      }
      return `${Math.floor(timePassed / hourInMS)} hours ago`;
    }
    if (timePassed < monthInMS) {
      if (Math.floor(timePassed / dayInMS) < 2) {
        return `${Math.floor(timePassed / dayInMS)} day ago`;
      }
      return `${Math.floor(timePassed / dayInMS)} days ago`;
    }
    if (timePassed < yearInMS) {
      if (Math.floor(timePassed / monthInMS) < 2) {
        return `${Math.floor(timePassed / monthInMS)} month ago`;
      }
      return `${Math.floor(timePassed / monthInMS)} months ago`;
    }

    if (Math.floor(timePassed / yearInMS) < 2) {
      return `${Math.floor(timePassed / yearInMS)} year ago`;
    }

    return `${Math.floor(timePassed / yearInMS)} years ago`;

  }

}
