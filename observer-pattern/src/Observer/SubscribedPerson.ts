import type { ObserverChannels } from "../ObserverChannels/ObserverChannelsInterface.js";
import type { Observer } from "./ObserverInterface.js";

export class SubscribedPerson implements Observer {
    private notificationChannels: ObserverChannels[] = [];
    constructor(private name: string) { }

    public getName(): string {
        return this.name;
    }

    public getNotificationChannels(): string {
        return this.notificationChannels.map(channel => channel.getName()).join(', ')
    }

    public addNotificationChannels(observer: ObserverChannels): void {
        this.notificationChannels.push(observer)
    }

    public notify(video: string): void {
        this.notificationChannels.forEach(channel => channel.showNotification(video, this.getName()))
    }
}