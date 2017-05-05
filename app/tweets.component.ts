import { Component } from 'angular2/core'
import { TweetService} from './tweet.service'

@Component({
    selector: 'tweets',
    template: 
            `
            <div class="media" *ngFor="#t of tweets">
                <div class="media-left">
                    <img src="{{ t.image }}" />
                    <span>{{ t.username }}</span>
                </div>
            </div>
            `,
    providers: [TweetService]
})
export class TweetsComponent {
    tweets = []

    constructor (tweetService : TweetService) {
        this.tweets = tweetService.getTweets();
    }
}