import { NotificationChannel } from "./NotificationChannel.js";

export class Email extends NotificationChannel {
    constructor() {
        super('E-mail');
    }

    showNotification(video: string, owner: string): void {
        console.log('MAILING CHANNEL')
        console.log(`${video} uploaded : Notification received on ${owner}'s ${this.name}`)
    }
}