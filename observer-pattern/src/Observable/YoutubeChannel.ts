import type { Observer } from "../Observer/ObserverInterface.js";
import type { Observable } from "./ObservableInterface.js";

export class YoutubeChannel implements Observable {

    private subscribers: Observer[] = [];
    private videos: string[] = [];

    constructor(private channelName: string) { }

    subscribe(observer: Observer): void {
        if (this.subscribers.includes(observer)) return
        this.subscribers.push(observer)
    }
    unsubscribe(observer: Observer): void {
        this.subscribers = this.subscribers.filter(sub => sub != observer)
    }
    private notify(video: string): void {
        this.subscribers.forEach(sub => sub.notify(video))
    }
    uploadVideo(video: string): void {
        this.videos.push(video)
        this.notify(video)
    }
    getAllVideos(): string[] {
        return this.videos
    }
    getLatestVideo(): string | null {
        return this.videos[this.videos.length - 1] ?? null;
    }
    getChannelName(): string {
        return this.channelName;
    }
}