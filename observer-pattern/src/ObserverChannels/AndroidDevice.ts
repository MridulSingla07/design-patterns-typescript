import { NotificationChannel } from "./NotificationChannel.js";

export class AndroidDevice extends NotificationChannel {
    constructor() {
        super('Android');
    }

    showNotification(video: string, owner: string): void {
        console.log('ANDROID CHANNEL')
        console.log(`${video} uploaded : Notification received on ${owner}'s ${this.name}`)
    }
}