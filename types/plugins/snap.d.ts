export class Snap extends Plugin {
    /**
     * @private
     * @param {Viewport} parent
     * @param {number} x
     * @param {number} y
     * @param {SnapOptions} [options]
     * @event snap-start(Viewport) emitted each time a snap animation starts
     * @event snap-restart(Viewport) emitted each time a snap resets because of a change in viewport size
     * @event snap-end(Viewport) emitted each time snap reaches its target
     * @event snap-remove(Viewport) emitted if snap plugin is removed
     */
    private constructor();
    options: any;
    ease: any;
    x: number;
    y: number;
    snapStart(): void;
    percent: number;
    snapping: {
        time: number;
    };
    deltaX: number;
    deltaY: number;
    startX: any;
    startY: any;
}
export type SnapOptions = {
    /**
     * snap to the top-left of viewport instead of center
     */
    topLeft?: boolean;
    /**
     * friction/frame to apply if decelerate is active
     */
    friction?: number;
    time?: number;
    /**
     * ease function or name (see http://easings.net/ for supported names)
     */
    ease?: string | Function;
    /**
     * pause snapping with any user input on the viewport
     */
    interrupt?: boolean;
    /**
     * removes this plugin after snapping is complete
     */
    removeOnComplete?: boolean;
    /**
     * removes this plugin if interrupted by any user input
     */
    removeOnInterrupt?: boolean;
    /**
     * starts the snap immediately regardless of whether the viewport is at the desired location
     */
    forceStart?: boolean;
};
import { Plugin } from "./plugin";
