export class SnapZoom extends Plugin {
    constructor(parent: any, options?: SnapZoomOptions);
    options: {
        width: number;
        height: number;
        time: number;
        ease: string;
        center: any;
        interrupt: boolean;
        removeOnComplete: boolean;
        removeOnInterrupts: boolean;
        forceStart: boolean;
        noMove: boolean;
    } & SnapZoomOptions;
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
    width?: number;
    height?: number;
    time?: number;
    ease?: (string | Function);
    center?: PIXI.Point;
    interrupt?: boolean;
    removeOnComplete?: boolean;
    removeOnInterrupt?: boolean;
    forceStart?: boolean;
    noMove?: boolean;
};
import { Plugin } from "./plugin";
