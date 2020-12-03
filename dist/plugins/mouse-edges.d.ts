export class MouseEdges extends Plugin {
    /**
     * Scroll viewport when mouse hovers near one of the edges.
     * @private
     * @param {Viewport} parent
     * @param {MouseEdgeOptions} [options]
     * @event mouse-edge-start(Viewport) emitted when mouse-edge starts
     * @event mouse-edge-end(Viewport) emitted when mouse-edge ends
     */
    private constructor();
    options: any;
    reverse: number;
    radiusSquared: number;
    left: any;
    top: any;
    right: number;
    bottom: number;
    horizontal: number;
    vertical: number;
    decelerateHorizontal(): void;
    decelerateVertical(): void;
}
export type MouseEdgesOptions = {
    /**
     * distance from center of screen in screen pixels
     */
    radius?: number;
    /**
     * distance from all sides in screen pixels
     */
    distance?: number;
    /**
     * alternatively, set top distance (leave unset for no top scroll)
     */
    top?: number;
    /**
     * alternatively, set bottom distance (leave unset for no top scroll)
     */
    bottom?: number;
    /**
     * alternatively, set left distance (leave unset for no top scroll)
     */
    left?: number;
    /**
     * alternatively, set right distance (leave unset for no top scroll)
     */
    right?: number;
    /**
     * speed in pixels/frame to scroll viewport
     */
    speed?: number;
    /**
     * reverse direction of scroll
     */
    reverse?: boolean;
    /**
     * don't use decelerate plugin even if it's installed
     */
    noDecelerate?: boolean;
    /**
     * if using radius, use linear movement (+/- 1, +/- 1) instead of angled movement (Math.cos(angle from center), Math.sin(angle from center))
     */
    linear?: boolean;
    /**
     * allows plugin to continue working even when there's a mousedown event
     */
    allowButtons?: boolean;
};
import { Plugin } from "./plugin";
