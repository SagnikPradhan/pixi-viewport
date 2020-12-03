import { Plugin } from './plugin';
import ease from '../ease';
const snapZoomOptions = {
    width: 0,
    height: 0,
    time: 1000,
    ease: 'easeInOutSine',
    center: null,
    interrupt: true,
    removeOnComplete: false,
    removeOnInterrupts: false,
    forceStart: false,
    noMove: false
};
export class SnapZoom extends Plugin {
    constructor(parent, options = {}) {
        super(parent);
        this.options = Object.assign({}, snapZoomOptions, options);
        this.ease = ease(this.options.ease);
        if (this.options.width > 0) {
            this.xScale = parent.screenWidth / this.options.width;
        }
        if (this.options.height > 0) {
            this.yScale = parent.screenHeight / this.options.height;
        }
        this.xIndependent = this.xScale ? true : false;
        this.yIndependent = this.yScale ? true : false;
        this.xScale = this.xIndependent ? this.xScale : this.yScale;
        this.yScale = this.yIndependent ? this.yScale : this.xScale;
        if (this.options.time === 0) {
            parent.container.scale.x = this.xScale;
            parent.container.scale.y = this.yScale;
            if (this.options.removeOnComplete) {
                this.parent.plugins.remove('snap-zoom');
            }
        }
        else if (options.forceStart) {
            this.createSnapping();
        }
    }
    createSnapping() {
        const scale = this.parent.scale;
        const startWorldScreenWidth = this.parent.worldScreenWidth;
        const startWorldScreenHeight = this.parent.worldScreenHeight;
        const endWorldScreenWidth = this.parent.screenWidth / this.xScale;
        const endWorldScreenHeight = this.parent.screenHeight / this.yScale;
        this.snapping = {
            time: 0,
            startX: startWorldScreenWidth,
            startY: startWorldScreenHeight,
            deltaX: endWorldScreenWidth - startWorldScreenWidth,
            deltaY: endWorldScreenHeight - startWorldScreenHeight
        };
        this.parent.emit('snap-zoom-start', this.parent);
    }
    resize() {
        this.snapping = null;
        if (this.options.width > 0) {
            this.xScale = this.parent.screenWidth / this.options.width;
        }
        if (this.options.height > 0) {
            this.yScale = this.parent.screenHeight / this.options.height;
        }
        this.xScale = this.xIndependent ? this.xScale : this.yScale;
        this.yScale = this.yIndependent ? this.yScale : this.xScale;
    }
    wheel() {
        if (this.options.removeOnInterrupt) {
            this.parent.plugins.remove('snap-zoom');
        }
    }
    down() {
        if (this.options.removeOnInterrupt) {
            this.parent.plugins.remove('snap-zoom');
        }
        else if (this.options.interrupt) {
            this.snapping = null;
        }
    }
    update(elapsed) {
        if (this.paused) {
            return;
        }
        if (this.options.interrupt && this.parent.input.count() !== 0) {
            return;
        }
        let oldCenter;
        if (!this.options.center && !this.options.noMove) {
            oldCenter = this.parent.center;
        }
        if (!this.snapping) {
            if (this.parent.scale.x !== this.xScale || this.parent.scale.y !== this.yScale) {
                this.createSnapping();
            }
        }
        else if (this.snapping) {
            const snapping = this.snapping;
            snapping.time += elapsed;
            if (snapping.time >= this.options.time) {
                this.parent.scale.set(this.xScale, this.yScale);
                if (this.options.removeOnComplete) {
                    this.parent.plugins.remove('snap-zoom');
                }
                this.parent.emit('snap-zoom-end', this.parent);
                this.snapping = null;
            }
            else {
                const snapping = this.snapping;
                const worldScreenWidth = this.ease(snapping.time, snapping.startX, snapping.deltaX, this.options.time);
                const worldScreenHeight = this.ease(snapping.time, snapping.startY, snapping.deltaY, this.options.time);
                this.parent.scale.x = this.parent.screenWidth / worldScreenWidth;
                this.parent.scale.y = this.parent.screenHeight / worldScreenHeight;
            }
            const clamp = this.parent.plugins.get('clamp-zoom', true);
            if (clamp) {
                clamp.clamp();
            }
            if (!this.options.noMove) {
                if (!this.options.center) {
                    this.parent.moveCenter(oldCenter);
                }
                else {
                    this.parent.moveCenter(this.options.center);
                }
            }
        }
    }
    resume() {
        this.snapping = null;
        super.resume();
    }
}
