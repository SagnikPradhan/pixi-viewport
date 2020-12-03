export class Animate extends Plugin {
    /**
     * @private
     * @param {Viewport} parent
     * @param {AnimateOptions} [options]
     * @fires animate-end
     */
    private constructor();
    options: any;
    setupPosition(): void;
    startX: any;
    startY: any;
    deltaX: number;
    deltaY: number;
    keepCenter: boolean;
    setupZoom(): void;
    width: any;
    height: any;
    startWidth: any;
    deltaWidth: number;
    startHeight: any;
    deltaHeight: number;
    time: number;
    complete(): void;
}
/**
 * To set the zoom level, use: (1) scale, (2) scaleX and scaleY, or (3) width and/or height
 */
export type AnimateOptions = any;
import { Plugin } from "./plugin";
