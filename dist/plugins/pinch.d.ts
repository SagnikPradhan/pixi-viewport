export class Pinch extends Plugin {
    private constructor();
    options: {
        noDrag: boolean;
        percent: number;
        center: any;
        factor: number;
    } & PinchOptions;
    active: boolean;
    lastCenter: {
        x: any;
        y: any;
    };
    moved: boolean;
    pinching: boolean;
}
export type PinchOptions = {
    noDrag?: boolean;
    percent?: number;
    factor?: number;
    center?: any;
};
import { Plugin } from "./plugin";
