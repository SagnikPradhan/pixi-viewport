export class ClampZoom extends Plugin {
    /**
     * @private
     * @param {Viewport} parent
     * @param {ClampZoomOptions} [options]
     */
    private constructor();
    options: {
        minWidth: any;
        minHeight: any;
        maxWidth: any;
        maxHeight: any;
        minScale: any;
        maxScale: any;
    } & ClampZoomOptions;
    clamp(): void;
}
/**
 * use either minimum width/height or minimum scale
 */
export type ClampZoomOptions = {
    /**
     * minimum width
     */
    minWidth?: number;
    /**
     * minimum height
     */
    minHeight?: number;
    /**
     * maximum width
     */
    maxWidth?: number;
    /**
     * maximum height
     */
    maxHeight?: number;
    /**
     * minimum scale
     */
    minScale?: number;
    /**
     * minimum scale
     */
    maxScale?: number;
};
import { Plugin } from "./plugin";
