export { Plugin } from "./plugins/plugin";
/**
 * Main class to use when creating a Viewport
 */
export class Viewport extends PIXI.Container {
    /**
     * @param {ViewportOptions} [options]
     * @fires clicked
     * @fires drag-start
     * @fires drag-end
     * @fires drag-remove
     * @fires pinch-start
     * @fires pinch-end
     * @fires pinch-remove
     * @fires snap-start
     * @fires snap-end
     * @fires snap-remove
     * @fires snap-zoom-start
     * @fires snap-zoom-end
     * @fires snap-zoom-remove
     * @fires bounce-x-start
     * @fires bounce-x-end
     * @fires bounce-y-start
     * @fires bounce-y-end
     * @fires bounce-remove
     * @fires wheel
     * @fires wheel-remove
     * @fires wheel-scroll
     * @fires wheel-scroll-remove
     * @fires mouse-edge-start
     * @fires mouse-edge-end
     * @fires mouse-edge-remove
     * @fires moved
     * @fires moved-end
     * @fires zoomed
     * @fires zoomed-end
     * @fires frame-end
     */
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
    /** @type {number} */
    screenWidth: number;
    /** @type {number} */
    screenHeight: number;
    _worldWidth: any;
    _worldHeight: any;
    set forceHitArea(arg: any);
    /**
     * permanently changes the Viewport's hitArea
     * NOTE: if not set then hitArea = PIXI.Rectangle(Viewport.left, Viewport.top, Viewport.worldScreenWidth, Viewport.worldScreenHeight)
     * @returns {HitArea}
     */
    get forceHitArea(): any;
    /**
     * number of pixels to move to trigger an input event (e.g., drag, pinch) or disable a clicked event
     * @type {number}
     */
    threshold: number;
    tickerFunction: () => void;
    input: InputManager;
    /**
     * Use this to add user plugins or access existing plugins (e.g., to pause, resume, or remove them)
     * @type {PluginManager}
     */
    plugins: PluginManager;
    /**
     * update viewport on each frame
     * by default, you do not need to call this unless you set options.noTicker=true
     * @param {number} elapsed time in milliseconds since last update
     */
    update(elapsed: number): void;
    moving: boolean;
    zooming: boolean;
    _hitAreaDefault: PIXI.Rectangle;
    _dirty: any;
    lastViewport: any;
    /**
     * use this to set screen and world sizes--needed for pinch/wheel/clamp/bounce
     * @param {number} [screenWidth=window.innerWidth]
     * @param {number} [screenHeight=window.innerHeight]
     * @param {number} [worldWidth]
     * @param {number} [worldHeight]
     */
    resize(screenWidth?: number, screenHeight?: number, worldWidth?: number, worldHeight?: number): void;
    set dirty(arg: boolean);
    /**
     * determines whether the viewport is dirty (i.e., needs to be renderered to the screen because of a change)
     * @type {boolean}
     */
    get dirty(): boolean;
    set worldWidth(arg: number);
    /**
     * world width in pixels
     * @type {number}
     */
    get worldWidth(): number;
    set worldHeight(arg: number);
    /**
     * world height in pixels
     * @type {number}
     */
    get worldHeight(): number;
    /**
     * get visible bounds of viewport
     * @returns {PIXI.Rectangle}
     */
    getVisibleBounds(): PIXI.Rectangle;
    /**
     * change coordinates from screen to world
     * @param {(number|PIXI.Point)} x or point
     * @param {number} [y]
     * @return {PIXI.Point}
     */
    toWorld(x: (number | PIXI.Point), y?: number, ...args: any[]): PIXI.Point;
    /**
     * change coordinates from world to screen
     * @param {(number|PIXI.Point)} x or point
     * @param {number} [y]
     * @return {PIXI.Point}
     */
    toScreen(x: (number | PIXI.Point), y?: number, ...args: any[]): PIXI.Point;
    /**
     * screen width in world coordinates
     * @type {number}
     */
    get worldScreenWidth(): number;
    /**
     * screen height in world coordinates
     * @type {number}
     */
    get worldScreenHeight(): number;
    /**
     * world width in screen coordinates
     * @type {number}
     */
    get screenWorldWidth(): number;
    /**
     * world height in screen coordinates
     * @type {number}
     */
    get screenWorldHeight(): number;
    set center(arg: PIXI.Point);
    /**
     * center of screen in world coordinates
     * @type {PIXI.Point}
     */
    get center(): PIXI.Point;
    /**
     * move center of viewport to point
     * @param {(number|PIXI.Point)} x or point
     * @param {number} [y]
     * @return {Viewport} this
     */
    moveCenter(...args: any[]): Viewport;
    set corner(arg: PIXI.Point);
    /**
     * top-left corner of Viewport
     * @type {PIXI.Point}
     */
    get corner(): PIXI.Point;
    /**
     * move viewport's top-left corner; also clamps and resets decelerate and bounce (as needed)
     * @param {(number|PIXI.Point)} x or point
     * @param {number} [y]
     * @return {Viewport} this
     */
    moveCorner(x: (number | PIXI.Point), y?: number, ...args: any[]): Viewport;
    /**
     * get how many world pixels fit in screen's width
     * @type {number}
     */
    get screenWidthInWorldPixels(): number;
    /**
     * get how many world pixels fit on screen's height
     * @type {number}
     */
    get screenHeightInWorldPixels(): number;
    /**
     * find the scale value that fits a world width on the screen
     * does not change the viewport (use fit... to change)
     * @param {number} width in world pixels
     * @returns {number} scale
     */
    findFitWidth(width: number): number;
    /**
     * finds the scale value that fits a world height on the screens
     * does not change the viewport (use fit... to change)
     * @param {number} height in world pixels
     * @returns {number} scale
     */
    findFitHeight(height: number): number;
    /**
     * finds the scale value that fits the smaller of a world width and world height on the screen
     * does not change the viewport (use fit... to change)
     * @param {number} width in world pixels
     * @param {number} height in world pixels
     * @returns {number} scale
     */
    findFit(width: number, height: number): number;
    /**
     * finds the scale value that fits the larger of a world width and world height on the screen
     * does not change the viewport (use fit... to change)
     * @param {number} width in world pixels
     * @param {number} height in world pixels
     * @returns {number} scale
     */
    findCover(width: number, height: number): number;
    /**
     * change zoom so the width fits in the viewport
     * @param {number} [width=this.worldWidth] in world coordinates
     * @param {boolean} [center] maintain the same center
     * @param {boolean} [scaleY=true] whether to set scaleY=scaleX
     * @param {boolean} [noClamp] whether to disable clamp-zoom
     * @returns {Viewport} this
     */
    fitWidth(width?: number, center?: boolean, scaleY?: boolean, noClamp?: boolean): Viewport;
    /**
     * change zoom so the height fits in the viewport
     * @param {number} [height=this.worldHeight] in world coordinates
     * @param {boolean} [center] maintain the same center of the screen after zoom
     * @param {boolean} [scaleX=true] whether to set scaleX = scaleY
     * @param {boolean} [noClamp] whether to disable clamp-zoom
     * @returns {Viewport} this
     */
    fitHeight(height?: number, center?: boolean, scaleX?: boolean, noClamp?: boolean): Viewport;
    /**
     * change zoom so it fits the entire world in the viewport
     * @param {boolean} center maintain the same center of the screen after zoom
     * @returns {Viewport} this
     */
    fitWorld(center: boolean): Viewport;
    /**
     * change zoom so it fits the size or the entire world in the viewport
     * @param {boolean} [center] maintain the same center of the screen after zoom
     * @param {number} [width=this.worldWidth] desired width
     * @param {number} [height=this.worldHeight] desired height
     * @returns {Viewport} this
     */
    fit(center?: boolean, width?: number, height?: number): Viewport;
    /**
     * zoom viewport to specific value
     * @param {number} scale value (e.g., 1 would be 100%, 0.25 would be 25%)
     * @param {boolean} [center] maintain the same center of the screen after zoom
     * @return {Viewport} this
     */
    setZoom(scale: number, center?: boolean): Viewport;
    /**
     * zoom viewport by a certain percent (in both x and y direction)
     * @param {number} percent change (e.g., 0.25 would increase a starting scale of 1.0 to 1.25)
     * @param {boolean} [center] maintain the same center of the screen after zoom
     * @return {Viewport} this
     */
    zoomPercent(percent: number, center?: boolean): Viewport;
    /**
     * zoom viewport by increasing/decreasing width by a certain number of pixels
     * @param {number} change in pixels
     * @param {boolean} [center] maintain the same center of the screen after zoom
     * @return {Viewport} this
     */
    zoom(change: number, center?: boolean): Viewport;
    /**
     * changes scale of viewport and maintains center of viewport
     * @type {number}
     */
    set scaled(arg: number);
    get scaled(): number;
    /**
     * @param {SnapZoomOptions} options
     */
    snapZoom(options: any): Viewport;
    /**
     * is container out of world bounds
     * @returns {OutOfBounds}
     */
    OOB(): OutOfBounds;
    set right(arg: number);
    /**
     * world coordinates of the right edge of the screen
     * @type {number}
     */
    get right(): number;
    set left(arg: number);
    /**
     * world coordinates of the left edge of the screen
     * @type { number }
     */
    get left(): number;
    set top(arg: number);
    /**
     * world coordinates of the top edge of the screen
     * @type {number}
     */
    get top(): number;
    set bottom(arg: number);
    /**
     * world coordinates of the bottom edge of the screen
     * @type {number}
     */
    get bottom(): number;
    _forceHitArea: any;
    /**
     * enable one-finger touch to drag
     * NOTE: if you expect users to use right-click dragging, you should enable viewport.options.disableOnContextMenu to avoid the context menu popping up on each right-click drag
     * @param {DragOptions} [options]
     * @returns {Viewport} this
     */
    drag(options?: any): Viewport;
    /**
     * clamp to world boundaries or other provided boundaries
     * NOTES:
     *   clamp is disabled if called with no options; use { direction: 'all' } for all edge clamping
     *   screenWidth, screenHeight, worldWidth, and worldHeight needs to be set for this to work properly
     * @param {ClampOptions} [options]
     * @returns {Viewport} this
     */
    clamp(options?: any): Viewport;
    /**
     * decelerate after a move
     * NOTE: this fires 'moved' event during deceleration
     * @param {DecelerateOptions} [options]
     * @return {Viewport} this
     */
    decelerate(options?: any): Viewport;
    /**
     * bounce on borders
     * NOTES:
     *    screenWidth, screenHeight, worldWidth, and worldHeight needs to be set for this to work properly
     *    fires 'moved', 'bounce-x-start', 'bounce-y-start', 'bounce-x-end', and 'bounce-y-end' events
     * @param {object} [options]
     * @param {string} [options.sides=all] all, horizontal, vertical, or combination of top, bottom, right, left (e.g., 'top-bottom-right')
     * @param {number} [options.friction=0.5] friction to apply to decelerate if active
     * @param {number} [options.time=150] time in ms to finish bounce
     * @param {object} [options.bounceBox] use this bounceBox instead of (0, 0, viewport.worldWidth, viewport.worldHeight)
     * @param {number} [options.bounceBox.x=0]
     * @param {number} [options.bounceBox.y=0]
     * @param {number} [options.bounceBox.width=viewport.worldWidth]
     * @param {number} [options.bounceBox.height=viewport.worldHeight]
     * @param {string|function} [options.ease=easeInOutSine] ease function or name (see http://easings.net/ for supported names)
     * @param {string} [options.underflow=center] (top/bottom/center and left/right/center, or center) where to place world if too small for screen
     * @return {Viewport} this
     */
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
    /**
     * enable pinch to zoom and two-finger touch to drag
     * @param {PinchOptions} [options]
     * @return {Viewport} this
     */
    pinch(options?: any): Viewport;
    /**
     * snap to a point
     * @param {number} x
     * @param {number} y
     * @param {SnapOptions} [options]
     * @return {Viewport} this
     */
    snap(x: number, y: number, options?: any): Viewport;
    /**
     * follow a target
     * NOTES:
     *    uses the (x, y) as the center to follow; for PIXI.Sprite to work properly, use sprite.anchor.set(0.5)
     *    options.acceleration is not perfect as it doesn't know the velocity of the target
     *    it adds acceleration to the start of movement and deceleration to the end of movement when the target is stopped
     *    fires 'moved' event
     * @param {PIXI.DisplayObject} target to follow
     * @param {FollowOptions} [options]
     * @returns {Viewport} this
     */
    follow(target: PIXI.DisplayObject, options?: any): Viewport;
    /**
     * zoom using mouse wheel
     * @param {WheelOptions} [options]
     * @return {Viewport} this
     */
    wheel(options?: any): Viewport;
    /**
     * animate the position and/or scale of the viewport
     * @param {AnimateOptions} options
     * @returns {Viewport} this
     */
    animate(options: any): Viewport;
    /**
     * enable clamping of zoom to constraints
     * @description
     * The minWidth/Height settings are how small the world can get (as it would appear on the screen)
     * before clamping. The maxWidth/maxHeight is how larger the world can scale (as it would appear on
     * the screen) before clamping.
     *
     * For example, if you have a world size of 1000 x 1000 and a screen size of 100 x 100, if you set
     * minWidth/Height = 100 then the world will not be able to zoom smaller than the screen size (ie,
     * zooming out so it appears smaller than the screen). Similarly, if you set maxWidth/Height = 100
     * the world will not be able to zoom larger than the screen size (ie, zooming in so it appears
     * larger than the screen).
     * @param {ClampZoomOptions} [options]
     * @return {Viewport} this
     */
    clampZoom(options?: any): Viewport;
    /**
     * Scroll viewport when mouse hovers near one of the edges or radius-distance from center of screen.
     * NOTE: fires 'moved' event
     * @param {MouseEdgesOptions} [options]
     */
    mouseEdges(options?: any): Viewport;
    set pause(arg: boolean);
    /**
     * pause viewport (including animation updates such as decelerate)
     * @type {boolean}
     */
    get pause(): boolean;
    _pause: boolean;
    /**
     * move the viewport so the bounding box is visible
     * @param {number} x - left
     * @param {number} y - top
     * @param {number} width
     * @param {number} height
     * @param {boolean} [resizeToFit] resize the viewport so the box fits within the viewport
     */
    ensureVisible(x: number, y: number, width: number, height: number, resizeToFit?: boolean): void;
}
export type ViewportOptions = {
    screenWidth?: number;
    screenHeight?: number;
    worldWidth?: number;
    worldHeight?: number;
    /**
     * number of pixels to move to trigger an input event (e.g., drag, pinch) or disable a clicked event
     */
    threshold?: number;
    /**
     * whether the 'wheel' event is set to passive (note: if false, e.preventDefault() will be called when wheel is used over the viewport)
     */
    passiveWheel?: boolean;
    /**
     * whether to stopPropagation of events that impact the viewport (except wheel events, see options.passiveWheel)
     */
    stopPropagation?: boolean;
    /**
     * change the default hitArea from world size to a new value
     */
    forceHitArea?: any;
    /**
     * set this if you want to manually call update() function on each frame
     */
    noTicker?: boolean;
    /**
     * use this PIXI.ticker for updates
     */
    ticker?: PIXI.Ticker;
    /**
     * InteractionManager, available from instantiated WebGLRenderer/CanvasRenderer.plugins.interaction - used to calculate pointer postion relative to canvas location on screen
     */
    interaction?: PIXI.InteractionManager;
    /**
     * div to attach the wheel event
     */
    divWheel?: HTMLElement;
    /**
     * remove oncontextmenu=() => {} from the divWheel element
     */
    disableOnContextMenu?: boolean;
};
/**
 * {(PIXI.Rectangle | PIXI.Circle | PIXI.Ellipse | PIXI.Polygon | PIXI.RoundedRectangle)}
 */
export type HitArea = any;
export type OutOfBounds = any;
export type LastViewport = any;
import * as PIXI from "pixi.js";
import { InputManager } from "./input-manager";
import { PluginManager } from "./plugin-manager";
