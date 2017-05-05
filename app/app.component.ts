import {Component} from 'angular2/core';
import { TweetsComponent } from './tweets.component';

@Component({
    selector: 'my-app',
    template: '<tweets></tweets>',
    directives: [TweetsComponent]
})
export class AppComponent { }