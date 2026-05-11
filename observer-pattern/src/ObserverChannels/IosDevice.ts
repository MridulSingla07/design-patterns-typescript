import { NotificationChannel } from "./NotificationChannel.js";

export class IoSDevice extends NotificationChannel {
    constructor() {
        super('Iphone');
    }

    showNotification(video: string, owner: string): void {
        console.log('IPHONE CHANNEL')
        console.log(`${video} uploaded : Notification received on ${owner}'s ${this.name}`)
    }
}