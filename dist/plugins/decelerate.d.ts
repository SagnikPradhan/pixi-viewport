export class Decelerate extends Plugin {
    /**
     * @private
     * @param {Viewport} parent
     * @param {DecelerateOptions} [options]
     */
    private constructor();
    options: {
        friction: number;
        bounce: number;
        minSpeed: number;
    } & DecelerateOptions;
    saved: any[];
    timeSinceRelease: number;
    x: number | boolean;
    y: number | boolean;
    isActive(): number | boolean;
    moved(data: any): void;
    percentChangeX: number;
    percentChangeY: number;
    /**
     * manually activate plugin
     * @param {object} options
     * @param {number} [options.x]
     * @param {number} [options.y]
     */
    activate(options: {
        x: number;
        y: number;
    }): void;
}
export type DecelerateOptions = {
    /**
     * percent to decelerate after movement
     */
    friction?: number;
    /**
     * percent to decelerate when past boundaries (only applicable when viewport.bounce() is active)
     */
    bounce?: number;
    /**
     * minimum velocity before stopping/reversing acceleration
     */
    minSpeed?: number;
};
import { Plugin } from "./plugin";
