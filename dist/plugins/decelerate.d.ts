export class Decelerate extends Plugin {
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
    activate(options: {
        x: number;
        y: number;
    }): void;
}
export type DecelerateOptions = {
    friction?: number;
    bounce?: number;
    minSpeed?: number;
};
import { Plugin } from "./plugin";
