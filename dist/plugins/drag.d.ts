export class Drag extends Plugin {
    constructor(parent: any, options?: DragOptions);
    options: {
        direction: string;
        pressDrag: boolean;
        wheel: boolean;
        wheelScroll: number;
        reverse: boolean;
        clampWheel: boolean;
        underflow: string;
        factor: number;
        mouseButtons: string;
        keyToPress: any;
        ignoreKeyToPressOnTouch: boolean;
    } & DragOptions;
    moved: boolean;
    reverse: number;
    xDirection: boolean;
    yDirection: boolean;
    keyIsPressed: boolean;
    handleKeyPresses(codes: any[]): void;
    mouseButtons(buttons: string): void;
    mouse: boolean[];
    parseUnderflow(): void;
    underflowX: number;
    underflowY: number;
    checkButtons(event: any): boolean;
    checkKeyPress(event: any): boolean;
    last: {
        x: any;
        y: any;
    };
    current: any;
    get active(): boolean;
    clamp(): void;
}
export type LastDrag = {
    x: number;
    y: number;
    parent: any;
};
export type DragOptions = {
    direction?: string;
    pressDrag?: boolean;
    wheel?: boolean;
    wheelScroll?: number;
    reverse?: boolean;
    clampWheel?: (boolean | string);
    underflow?: string;
    factor?: number;
    mouseButtons?: string;
    keyToPress?: string[];
    ignoreKeyToPressOnTouch?: boolean;
};
import { Plugin } from "./plugin";
