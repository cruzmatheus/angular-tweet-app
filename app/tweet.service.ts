export class TweetService {
    getTweets() {
        return [
            {
                username: 'Windward',
                nickname: '@windwardstudios',
                tweet: 'Looking for a better company reporting or docgen app?',
                likes: 0,
                image: 'http://lorempixel.com/100/100/people'
            },
            {
                username: 'Angular JS News',
                nickname: '@angularjs_news',
                tweet: 'Right Relevance: Influencers, Articles and Conversations',
                likes: 4,
                image: 'http://lorempixel.com/100/100/people?1'
            },
            {
                username: 'UX & Bootstrap',
                nickname: '@3rdwave',
                tweet: '10 Reasons why web project fail',
                likes: 0,
                image: 'http://lorempixel.com/100/100/people?2'
            }
        ];
    }
}