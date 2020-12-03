export class Snap extends Plugin {
    private constructor();
    options: {
        topLeft: boolean;
        friction: number;
        time: number;
        ease: string;
        interrupt: boolean;
        removeOnComplete: boolean;
        removeOnInterrupt: boolean;
        forceStart: boolean;
    } & SnapOptions;
    ease: any;
    x: number;
    y: number;
    snapStart(): void;
    percent: number;
    snapping: {
        time: number;
    };
    deltaX: number;
    deltaY: number;
    startX: any;
    startY: any;
}
export type SnapOptions = {
    topLeft?: boolean;
    friction?: number;
    time?: number;
    ease?: string | Function;
    interrupt?: boolean;
    removeOnComplete?: boolean;
    removeOnInterrupt?: boolean;
    forceStart?: boolean;
};
import { Plugin } from "./plugin";
