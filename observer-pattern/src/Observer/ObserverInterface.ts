export interface Observer {
    getName(): string;
    notify(video: string): void;
}