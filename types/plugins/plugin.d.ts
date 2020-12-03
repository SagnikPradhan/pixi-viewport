/**
 * derive this class to create user-defined plugins
 */
export class Plugin {
    /**
     * @param {Viewport} parent
     */
    constructor(parent: any);
    parent: any;
    paused: boolean;
    /** called when plugin is removed */
    destroy(): void;
    /**
     * handler for pointerdown PIXI event
     * @param {PIXI.InteractionEvent} event
     * @returns {boolean}
     */
    down(): boolean;
    /**
     * handler for pointermove PIXI event
     * @param {PIXI.InteractionEvent} event
     * @returns {boolean}
     */
    move(): boolean;
    /**
     * handler for pointerup PIXI event
     * @param {PIXI.InteractionEvent} event
     * @returns {boolean}
     */
    up(): boolean;
    /**
     * handler for wheel event on div
     * @param {WheelEvent} event
     * @returns {boolean}
     */
    wheel(): boolean;
    /**
     * called on each tick
     * @param {number} elapsed time in millisecond since last update
     */
    update(): void;
    /** called when the viewport is resized */
    resize(): void;
    /** called when the viewport is manually moved */
    reset(): void;
    /** pause the plugin */
    pause(): void;
    /** un-pause the plugin */
    resume(): void;
}
