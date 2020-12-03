export class Follow extends Plugin {
    /**
     * @private
     * @param {Viewport} parent
     * @param {PIXI.DisplayObject} target to follow
     * @param {FollowOptions} [options]
     */
    private constructor();
    target: PIXI.DisplayObject;
    options: any;
    velocity: {
        x: number;
        y: number;
    };
}
export type FollowOptions = {
    /**
     * to follow in pixels/frame (0=teleport to location)
     */
    speed?: number;
    /**
     * set acceleration to accelerate and decelerate at this rate; speed cannot be 0 to use acceleration
     */
    acceleration?: number;
    /**
     * radius (in world coordinates) of center circle where movement is allowed without moving the viewport
     */
    radius?: number;
};
import { Plugin } from "./plugin";
