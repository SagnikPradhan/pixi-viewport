export class Plugin {
    constructor(parent: any);
    parent: any;
    paused: boolean;
    destroy(): void;
    down(): boolean;
    move(): boolean;
    up(): boolean;
    wheel(): boolean;
    update(): void;
    resize(): void;
    reset(): void;
    pause(): void;
    resume(): void;
}
