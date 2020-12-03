export class SnapZoom extends Plugin {
    /**
     * @param {Viewport} parent
     * @param {SnapZoomOptions} options
     * @event snap-zoom-start(Viewport) emitted each time a fit animation starts
     * @event snap-zoom-end(Viewport) emitted each time fit reaches its target
     * @event snap-zoom-end(Viewport) emitted each time fit reaches its target
     */
    constructor(parent: any, options?: SnapZoomOptions);
    options: any;
    ease: any;
    xScale: number;
    yScale: number;
    xIndependent: boolean;
    yIndependent: boolean;
    createSnapping(): void;
    snapping: {
        time: number;
        startX: any;
        startY: any;
        deltaX: number;
        deltaY: number;
    };
}
export type SnapZoomOptions = {
    /**
     * the desired width to snap (to maintain aspect ratio, choose only width or height)
     */
    width?: number;
    /**
     * the desired height to snap (to maintain aspect ratio, choose only width or height)
     */
    height?: number;
    /**
     * time for snapping in ms
     */
    time?: number;
    /**
     * ease function or name (see http://easings.net/ for supported names)
     */
    ease?: (string | Function);
    /**
     * place this point at center during zoom instead of center of the viewport
     */
    center?: any;
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
     * starts the snap immediately regardless of whether the viewport is at the desired zoom
     */
    forceStart?: boolean;
    /**
     * zoom but do not move
     */
    noMove?: boolean;
};
import { Plugin } from "./plugin";
