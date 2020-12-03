export class Clamp extends Plugin {
    /**
     * @private
     * @param {Viewport} parent
     * @param {ClampOptions} [options]
     */
    private constructor();
    options: any;
    last: {
        x: any;
        y: any;
        scaleX: any;
        scaleY: any;
    };
    parseUnderflow(): void;
    noUnderflow: boolean;
    underflowX: number;
    underflowY: number;
}
export type ClampOptions = {
    /**
     * clamp left; true = 0
     */
    left?: (number | boolean);
    /**
     * clamp right; true = viewport.worldWidth
     */
    right?: (number | boolean);
    /**
     * clamp top; true = 0
     */
    top?: (number | boolean);
    /**
     * clamp bottom; true = viewport.worldHeight
     */
    bottom?: (number | boolean);
    /**
     * (all, x, or y) using clamps of [0, viewport.worldWidth/viewport.worldHeight]; replaces left/right/top/bottom if set
     */
    direction?: string;
    /**
     * where to place world if too small for screen (e.g., top-right, center, none, bottomleft)
     */
    underflow?: string;
};
import { Plugin } from "./plugin";
