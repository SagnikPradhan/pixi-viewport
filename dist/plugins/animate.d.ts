export class Animate extends Plugin {
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
export type AnimateOptions = any;
import { Plugin } from "./plugin";
