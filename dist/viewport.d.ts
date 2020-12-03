export { Plugin } from "./plugins/plugin";
export class Viewport {
    constructor(options?: ViewportOptions);
    options: {
        screenWidth: number;
        screenHeight: number;
        worldWidth: any;
        worldHeight: any;
        threshold: number;
        passiveWheel: boolean;
        stopPropagation: boolean;
        forceHitArea: any;
        noTicker: boolean;
        interaction: any;
        disableOnContextMenu: boolean;
    } & ViewportOptions;
    screenWidth: number;
    screenHeight: number;
    _worldWidth: any;
    _worldHeight: any;
    set forceHitArea(arg: any);
    get forceHitArea(): any;
    threshold: number;
    tickerFunction: () => void;
    input: InputManager;
    plugins: PluginManager;
    destroy(options?: (object | boolean)): void;
    update(elapsed: number): void;
    moving: boolean;
    zooming: boolean;
    _hitAreaDefault: any;
    hitArea: any;
    _dirty: any;
    lastViewport: any;
    resize(screenWidth?: number, screenHeight?: number, worldWidth?: number, worldHeight?: number): void;
    set dirty(arg: boolean);
    get dirty(): boolean;
    set worldWidth(arg: number);
    get worldWidth(): number;
    set worldHeight(arg: number);
    get worldHeight(): number;
    getVisibleBounds(): any;
    toWorld(x: (number | any), y?: number, ...args: any[]): any;
    toScreen(x: (number | any), y?: number, ...args: any[]): any;
    get worldScreenWidth(): number;
    get worldScreenHeight(): number;
    get screenWorldWidth(): number;
    get screenWorldHeight(): number;
    set center(arg: any);
    get center(): any;
    moveCenter(...args: any[]): Viewport;
    set corner(arg: any);
    get corner(): any;
    moveCorner(x: (number | any), y?: number, ...args: any[]): Viewport;
    get screenWidthInWorldPixels(): number;
    get screenHeightInWorldPixels(): number;
    findFitWidth(width: number): number;
    findFitHeight(height: number): number;
    findFit(width: number, height: number): number;
    findCover(width: number, height: number): number;
    fitWidth(width?: number, center?: boolean, scaleY?: boolean, noClamp?: boolean): Viewport;
    fitHeight(height?: number, center?: boolean, scaleX?: boolean, noClamp?: boolean): Viewport;
    fitWorld(center: boolean): Viewport;
    fit(center?: boolean, width?: number, height?: number): Viewport;
    set visible(arg: any);
    setZoom(scale: number, center?: boolean): Viewport;
    zoomPercent(percent: number, center?: boolean): Viewport;
    zoom(change: number, center?: boolean): Viewport;
    set scaled(arg: any);
    get scaled(): any;
    snapZoom(options: any): Viewport;
    OOB(): OutOfBounds;
    set right(arg: number);
    get right(): number;
    x: number;
    set left(arg: number);
    get left(): number;
    set top(arg: number);
    get top(): number;
    y: number;
    set bottom(arg: number);
    get bottom(): number;
    _forceHitArea: any;
    drag(options?: any): Viewport;
    clamp(options?: any): Viewport;
    decelerate(options?: any): Viewport;
    bounce(options?: {
        sides: string;
        friction: number;
        time: number;
        bounceBox: {
            x: number;
            y: number;
            width: number;
            height: number;
        };
        ease: string | Function;
        underflow: string;
    }): Viewport;
    pinch(options?: any): Viewport;
    snap(x: number, y: number, options?: any): Viewport;
    follow(target: any, options?: any): Viewport;
    wheel(options?: any): Viewport;
    animate(options: any): Viewport;
    clampZoom(options?: any): Viewport;
    mouseEdges(options?: any): Viewport;
    set pause(arg: boolean);
    get pause(): boolean;
    _pause: boolean;
    ensureVisible(x: number, y: number, width: number, height: number, resizeToFit?: boolean): void;
}
export type ViewportOptions = {
    screenWidth?: number;
    screenHeight?: number;
    worldWidth?: number;
    worldHeight?: number;
    threshold?: number;
    passiveWheel?: boolean;
    stopPropagation?: boolean;
    forceHitArea?: any;
    noTicker?: boolean;
    ticker?: any;
    interaction?: any;
    divWheel?: HTMLElement;
    disableOnContextMenu?: boolean;
};
export type HitArea = any;
export type OutOfBounds = any;
export type LastViewport = any;
import { InputManager } from "./input-manager";
import { PluginManager } from "./plugin-manager";