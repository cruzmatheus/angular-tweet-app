import { Component } from 'angular2/core'

@Component({
    selector: 'like',
    template: 
            `
            <i class="glyphicon glyphicon-heart heart-button" 
            [style.color]="isLiked ? 'red' : '#ccc'" (click)="onClick()"></i>
            <span class="number-of-likes">{{ likes }}</span>
            `,
    styles: [`
            .heart-button {
                cursor: pointer;
                font-size: 1.5em;
            }
            .number-of-likes {
                font-size: 1.5em;
            }
            `]
})
export class LikeComponent {
    isLiked = false;
    likes = 0;

    onClick() {
        this.isLiked = !this.isLiked;
        this.likes += this.isLiked ? 1 : -1;
    }
}