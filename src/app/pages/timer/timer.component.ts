import { Component, OnInit } from '@angular/core';
import {interval, Subscription} from 'rxjs';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

    time = {
        gaugeType: 'full',
        gaugeValue: 0,
        gaugeLabel: 'SECONDS',
        gaugeAppendText: ':00'
    };
    interval: Subscription;
    isStop = true;
    format(n: number) {
        return n < 10 ? '0' + n : '' + n;
    }

    private start(): void {
        let n = 0;
        this.interval = interval(1000 / 60).subscribe(r => {
            n++;
            const m = Math.floor(n / 60);
            const s = n % 60;
            this.time.gaugeAppendText = ':' + s.toString();
            this.time.gaugeValue = m;
        });
    }

    onStop() {
        if (this.isStop) {
            this.start();
        } else {
            this.interval.unsubscribe();
            this.time.gaugeAppendText = ':00';
            this.time.gaugeValue = 0;
        }
        this.isStop = !this.isStop;
    }

}
