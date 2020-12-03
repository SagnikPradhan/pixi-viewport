export class Bounce extends Plugin {
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
