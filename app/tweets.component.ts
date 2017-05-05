import { Component } from 'angular2/core'
import { TweetService} from './tweet.service'
import { LikeComponent } from './like.component'
 
@Component({
    selector: 'tweets',
    template: 
            `
            <div class="media" *ngFor="#t of tweets">
                <div class="media-left">
                    <img src="{{ t.image }}" />
                </div>
                <div class="media-body">
                    <h4 class="media-heading">{{ t.username }}<span style="color: #ccc;">{{ t.nickname }}</span></h4>
                    <span>{{ t.tweet }}</span><br />
                    <like></like>
                </div>
            </div>
            `,
    providers: [TweetService],
    directives: [LikeComponent]
})
export class TweetsComponent {
    tweets = []

    constructor (tweetService : TweetService) {
        this.tweets = tweetService.getTweets();
    }
}