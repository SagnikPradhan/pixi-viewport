/**
 * @private
 */
export class Drag extends Plugin {
    /**
     * @param {Viewport} parent
     * @param {DragOptions} options
     */
    constructor(parent: any, options?: DragOptions);
    options: {
        direction: string;
        pressDrag: boolean;
        wheel: boolean;
        wheelScroll: number;
        reverse: boolean;
        clampWheel: boolean;
        underflow: string;
        factor: number;
        mouseButtons: string;
        keyToPress: any;
        ignoreKeyToPressOnTouch: boolean;
    } & DragOptions;
    moved: boolean;
    reverse: number;
    xDirection: boolean;
    yDirection: boolean;
    keyIsPressed: boolean;
    /**
     * Handles keypress events and set the keyIsPressed boolean accordingly
     * @param {array} codes - key codes that can be used to trigger drag event
     */
    handleKeyPresses(codes: any[]): void;
    /**
     * initialize mousebuttons array
     * @param {string} buttons
     */
    mouseButtons(buttons: string): void;
    mouse: boolean[];
    parseUnderflow(): void;
    underflowX: number;
    underflowY: number;
    /**
     * @param {PIXI.InteractionEvent} event
     * @returns {boolean}
     */
    checkButtons(event: PIXI.InteractionEvent): boolean;
    /**
     * @param {PIXI.InteractionEvent} event
     * @returns {boolean}
     */
    checkKeyPress(event: PIXI.InteractionEvent): boolean;
    last: {
        x: any;
        y: any;
    };
    current: any;
    get active(): boolean;
    clamp(): void;
}
export type LastDrag = {
    x: number;
    y: number;
    parent: PIXI.Point;
};
export type DragOptions = {
    /**
     * direction to drag
     */
    direction?: string;
    /**
     * whether click to drag is active
     */
    pressDrag?: boolean;
    /**
     * use wheel to scroll in direction (unless wheel plugin is active)
     */
    wheel?: boolean;
    /**
     * number of pixels to scroll with each wheel spin
     */
    wheelScroll?: number;
    /**
     * reverse the direction of the wheel scroll
     */
    reverse?: boolean;
    /**
     * clamp wheel(to avoid weird bounce with mouse wheel)
     */
    clampWheel?: (boolean | string);
    /**
     * where to place world if too small for screen
     */
    underflow?: string;
    /**
     * factor to multiply drag to increase the speed of movement
     */
    factor?: number;
    /**
     * changes which mouse buttons trigger drag, use: 'all', 'left', right' 'middle', or some combination, like, 'middle-right'; you may want to set viewport.options.disableOnContextMenu if you want to use right-click dragging
     */
    mouseButtons?: string;
    /**
     * array containing {@link key|https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code} codes of keys that can be pressed for the drag to be triggered, e.g.: ['ShiftLeft', 'ShiftRight'}.
     */
    keyToPress?: string[];
    /**
     * ignore keyToPress for touch events
     */
    ignoreKeyToPressOnTouch?: boolean;
};
import { Plugin } from "./plugin";
import * as PIXI from "pixi.js";
