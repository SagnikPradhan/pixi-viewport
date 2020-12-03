export class InputManager {
    constructor(viewport: any);
    viewport: any;
    touches: ViewportTouch[];
    private addListeners;
    wheelFunction: (e: any) => void;
    isMouseDown: boolean;
    destroy(): void;
    down(event: PIXI.InteractionEvent): void;
    last: PIXI.Point;
    clickedAvailable: boolean;
    clear(): void;
    checkThreshold(change: number): boolean;
    move(event: PIXI.InteractionEvent): void;
    up(event: PIXI.InteractionEvent): void;
    getPointerPosition(event: WheelEvent): PIXI.Point;
    handleWheel(event: WheelEvent): void;
    pause(): void;
    get(id: number): ViewportTouch;
    remove(id: number): void;
    count(): number;
}
export type ViewportTouch = {
    id: number;
    last: PIXI.Point;
};
import * as PIXI from "pixi.js";
