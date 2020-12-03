/**
 * Use this to access current plugins or add user-defined plugins
 */
export class PluginManager {
    /**
     * instantiated by Viewport
     * @param {Viewport} viewport
     */
    constructor(viewport: any);
    viewport: any;
    list: any[];
    plugins: {};
    /**
     * Inserts a named plugin or a user plugin into the viewport
     * default plugin order: 'drag', 'pinch', 'wheel', 'follow', 'mouse-edges', 'decelerate', 'bounce', 'snap-zoom', 'clamp-zoom', 'snap', 'clamp'
     * @param {string} name of plugin
     * @param {Plugin} plugin - instantiated Plugin class
     * @param {number} index to insert userPlugin (otherwise inserts it at the end)
     */
    add(name: string, plugin: Plugin, index?: number): void;
    /**
     * get plugin
     * @param {string} name of plugin
     * @param {boolean} [ignorePaused] return null if plugin is paused
     * @return {Plugin}
     */
    get(name: string, ignorePaused?: boolean): Plugin;
    /**
     * update all active plugins
     * @ignore
     * @param {number} elapsed type in milliseconds since last update
     */
    update(elapsed: number): void;
    /**
     * resize all active plugins
     * @ignore
     */
    resize(): void;
    /**
     * clamps and resets bounce and decelerate (as needed) after manually moving viewport
     */
    reset(): void;
    /**
     * removes installed plugin
     * @param {string} name of plugin (e.g., 'drag', 'pinch')
     */
    remove(name: string): void;
    /**
     * pause plugin
     * @param {string} name of plugin (e.g., 'drag', 'pinch')
     */
    pause(name: string): void;
    /**
     * resume plugin
     * @param {string} name of plugin (e.g., 'drag', 'pinch')
     */
    resume(name: string): void;
    /**
     * sort plugins according to PLUGIN_ORDER
     * @ignore
     */
    sort(): void;
    /**
     * handle down for all plugins
     * @ignore
     * @param {import("pixi.js").InteractionEvent} event
     * @returns {boolean}
     */
    down(event: import("pixi.js").InteractionEvent): boolean;
    /**
     * handle move for all plugins
     * @ignore
     * @param {import("pixi.js").InteractionEvent} event
     * @returns {boolean}
     */
    move(event: import("pixi.js").InteractionEvent): boolean;
    /**
     * handle up for all plugins
     * @ignore
     * @param {import("pixi.js").InteractionEvent} event
     * @returns {boolean}
     */
    up(event: import("pixi.js").InteractionEvent): boolean;
    /**
     * handle wheel event for all plugins
     * @ignore
     * @param {WheelEvent} event
     * @returns {boolean}
     */
    wheel(e: any): boolean;
}
