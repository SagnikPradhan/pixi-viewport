export class MouseEdges extends Plugin {
    private constructor();
    options: any;
    reverse: number;
    radiusSquared: number;
    left: any;
    top: any;
    right: number;
    bottom: number;
    horizontal: number;
    vertical: number;
    decelerateHorizontal(): void;
    decelerateVertical(): void;
}
export type MouseEdgesOptions = {
    radius?: number;
    distance?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    speed?: number;
    reverse?: boolean;
    noDecelerate?: boolean;
    linear?: boolean;
    allowButtons?: boolean;
};
import { Plugin } from "./plugin";
