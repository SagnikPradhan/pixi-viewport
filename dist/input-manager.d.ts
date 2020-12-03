export class InputManager {
    constructor(viewport: any);
    viewport: any;
    touches: ViewportTouch[];
    private addListeners;
    wheelFunction: (e: any) => void;
    isMouseDown: boolean;
    destroy(): void;
    down(event: any): void;
    last: any;
    clickedAvailable: boolean;
    clear(): void;
    checkThreshold(change: number): boolean;
    move(event: any): void;
    up(event: any): void;
    getPointerPosition(event: WheelEvent): any;
    handleWheel(event: WheelEvent): void;
    pause(): void;
    get(id: number): ViewportTouch;
    remove(id: number): void;
    count(): number;
}
export type ViewportTouch = {
    id: number;
    last: any;
};
