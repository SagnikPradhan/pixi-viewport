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
    down(event: any): boolean;
    move(event: any): boolean;
    up(event: any): boolean;
    wheel(e: any): boolean;
}
