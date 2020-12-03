export class Pinch extends Plugin {
    /**
     * @private
     * @param {Viewport} parent
     * @param {PinchOptions} [options]
     */
    private constructor();
    options: {
        noDrag: boolean;
        percent: number;
        center: any;
        factor: number;
    } & PinchOptions;
    active: boolean;
    lastCenter: {
        x: any;
        y: any;
    };
    moved: boolean;
    pinching: boolean;
}
export type PinchOptions = {
    /**
     * disable two-finger dragging
     */
    noDrag?: boolean;
    /**
     * percent to modify pinch speed
     */
    percent?: number;
    /**
     * factor to multiply two-finger drag to increase the speed of movement
     */
    factor?: number;
    /**
     * place this point at center during zoom instead of center of two fingers
     */
    center?: PIXI.Point;
};
import { Plugin } from "./plugin";
