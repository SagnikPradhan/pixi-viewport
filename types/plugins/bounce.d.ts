export class Bounce extends Plugin {
    /**
     * @private
     * @param {Viewport} parent
     * @param {BounceOptions} [options]
     * @fires bounce-start-x
     * @fires bounce.end-x
     * @fires bounce-start-y
     * @fires bounce-end-y
     */
    private constructor();
    options: any;
    ease: any;
    top: boolean;
    bottom: boolean;
    left: boolean;
    right: boolean;
    last: {};
    parseUnderflow(): void;
    underflowX: number;
    underflowY: number;
    isActive(): boolean;
    toX: {
        time: number;
        start: any;
        delta: number;
        end: number;
    };
    toY: {
        time: number;
        start: any;
        delta: number;
        end: number;
    };
    calcUnderflowX(): number;
    calcUnderflowY(): number;
    oob(): {
        left: boolean;
        right: boolean;
        top: boolean;
        bottom: boolean;
        topLeft: PIXI.Point;
        bottomRight: PIXI.Point;
    };
    bounce(): void;
}
export type BounceOptions = any;
import { Plugin } from "./plugin";
import * as PIXI from "pixi.js";
