import type { Observer } from "../Observer/ObserverInterface.js";

export interface Observable {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    uploadVideo(video: string): void;
    getAllVideos(): string[];
    getLatestVideo(): string | null;
    getChannelName(): string;
}