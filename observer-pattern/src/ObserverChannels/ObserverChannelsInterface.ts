export interface ObserverChannels {
    showNotification(video: string, owner: string): void;
    getName(): string;
}