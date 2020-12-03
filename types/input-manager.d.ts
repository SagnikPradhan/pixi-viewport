/**
 * @typedef ViewportTouch
 * @property {number} id
 * @property {PIXI.Point} last
*/
/**
 * handles all input for Viewport
 * @private
 */
export class InputManager {
    constructor(viewport: any);
    viewport: any;
    /**
     * list of active touches on viewport
     * @type {ViewportTouch[]}
     */
    touches: ViewportTouch[];
    /**
     * add input listeners
     * @private
     */
    private addListeners;
    wheelFunction: (e: any) => void;
    isMouseDown: boolean;
    /**
     * removes all event listeners from viewport
     * (useful for cleanup of wheel when removing viewport)
     */
    destroy(): void;
    /**
     * handle down events for viewport
     * @param {PIXI.InteractionEvent} event
     */
    down(event: any): void;
    last: any;
    clickedAvailable: boolean;
    /**
     * clears all pointer events
     */
    clear(): void;
    /**
     * @param {number} change
     * @returns whether change exceeds threshold
     */
    checkThreshold(change: number): boolean;
    /**
     * handle move events for viewport
     * @param {PIXI.InteractionEvent} event
     */
    move(event: any): void;
    /**
     * handle up events for viewport
     * @param {PIXI.InteractionEvent} event
     */
    up(event: any): void;
    /**
     * gets pointer position if this.interaction is set
     * @param {WheelEvent} event
     * @return {PIXI.Point}
     */
    getPointerPosition(event: WheelEvent): any;
    /**
     * handle wheel events
     * @param {WheelEvent} event
     */
    handleWheel(event: WheelEvent): void;
    pause(): void;
    /**
     * get touch by id
     * @param {number} id
     * @return {ViewportTouch}
     */
    get(id: number): ViewportTouch;
    /**
     * remove touch by number
     * @param {number} id
     */
    remove(id: number): void;
    /**
     * @returns {number} count of mouse/touch pointers that are down on the viewport
     */
    count(): number;
}
export type ViewportTouch = {
    id: number;
    last: any;
};
