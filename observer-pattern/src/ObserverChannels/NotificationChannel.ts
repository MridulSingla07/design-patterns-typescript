import type { ObserverChannels } from "./ObserverChannelsInterface.js";

export abstract class NotificationChannel implements ObserverChannels {

    constructor(protected name: string) { }

    abstract showNotification(video: string, owner: string): void;

    getName(): string {
        return this.name;
    }
}