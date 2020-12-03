export class Wheel extends Plugin {
    /**
     * @private
     * @param {Viewport} parent
     * @param {WheelOptions} [options]
     * @event wheel({wheel: {dx, dy, dz}, event, viewport})
     */
    private constructor();
    options: any;
    smoothing: any;
    smoothingCount: number;
    smoothingCenter: any;
}
/**
 * the default event listener for 'wheel' event is document.body. Use `Viewport.options.divWheel` to change this default
 */
export type WheelOptions = {
    /**
     * percent to scroll with each spin
     */
    percent?: number;
    /**
     * smooth the zooming by providing the number of frames to zoom between wheel spins
     */
    smooth?: number;
    /**
     * stop smoothing with any user input on the viewport
     */
    interrupt?: boolean;
    /**
     * reverse the direction of the scroll
     */
    reverse?: boolean;
    /**
     * place this point at center during zoom instead of current mouse position
     */
    center?: PIXI.Point;
    /**
     * scaling factor for non-DOM_DELTA_PIXEL scrolling events
     */
    lineHeight?: number;
};
import { Plugin } from "./plugin";
