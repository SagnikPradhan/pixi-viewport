export class Wheel extends Plugin {
    private constructor();
    options: never;
    smoothing: any;
    smoothingCount: number;
    smoothingCenter: any;
}
export type WheelOptions = {
    percent?: number;
    smooth?: number;
    interrupt?: boolean;
    reverse?: boolean;
    center?: any;
    lineHeight?: number;
};
import { Plugin } from "./plugin";
