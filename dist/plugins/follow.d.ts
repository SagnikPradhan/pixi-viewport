export class Follow extends Plugin {
    private constructor();
    target: PIXI.DisplayObject;
    options: {
        speed: number;
        acceleration: any;
        radius: any;
    } & FollowOptions;
    velocity: {
        x: number;
        y: number;
    };
}
export type FollowOptions = {
    speed?: number;
    acceleration?: number;
    radius?: number;
};
import { Plugin } from "./plugin";
