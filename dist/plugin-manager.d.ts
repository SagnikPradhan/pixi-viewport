export class PluginManager {
    constructor(viewport: any);
    viewport: any;
    list: any[];
    plugins: {};
    add(name: string, plugin: Plugin, index?: number): void;
    get(name: string, ignorePaused?: boolean): Plugin;
    update(elapsed: number): void;
    resize(): void;
    reset(): void;
    remove(name: string): void;
    pause(name: string): void;
    resume(name: string): void;
    sort(): void;
    down(event: import("pixi.js").InteractionEvent): boolean;
    move(event: import("pixi.js").InteractionEvent): boolean;
    up(event: import("pixi.js").InteractionEvent): boolean;
    wheel(e: any): boolean;
}
