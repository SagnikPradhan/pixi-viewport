import { Plugin } from './plugin';
const mouseEdgesOptions = {
    radius: null,
    distance: null,
    top: null,
    bottom: null,
    left: null,
    right: null,
    speed: 8,
    reverse: false,
    noDecelerate: false,
    linear: false,
    allowButtons: false
};
export class MouseEdges extends Plugin {
    constructor(parent, options = {}) {
        super(parent);
        this.options = Object.assign({}, mouseEdgesOptions, options);
        this.reverse = this.options.reverse ? 1 : -1;
        this.radiusSquared = Math.pow(this.options.radius, 2);
        this.resize();
    }
    resize() {
        const distance = this.options.distance;
        if (distance !== null) {
            this.left = distance;
            this.top = distance;
            this.right = this.parent.worldScreenWidth - distance;
            this.bottom = this.parent.worldScreenHeight - distance;
        }
        else if (!this.radius) {
            this.left = this.options.left;
            this.top = this.options.top;
            this.right = this.options.right === null ? null : this.parent.worldScreenWidth - this.options.right;
            this.bottom = this.options.bottom === null ? null : this.parent.worldScreenHeight - this.options.bottom;
        }
    }
    down() {
        if (this.paused) {
            return;
        }
        if (!this.options.allowButtons) {
            this.horizontal = this.vertical = null;
        }
    }
    move(event) {
        if (this.paused) {
            return;
        }
        if ((event.data.pointerType !== 'mouse' && event.data.identifier !== 1) || (!this.options.allowButtons && event.data.buttons !== 0)) {
            return;
        }
        const x = event.data.global.x;
        const y = event.data.global.y;
        if (this.radiusSquared) {
            const center = this.parent.toScreen(this.parent.center);
            const distance = Math.pow(center.x - x, 2) + Math.pow(center.y - y, 2);
            if (distance >= this.radiusSquared) {
                const angle = Math.atan2(center.y - y, center.x - x);
                if (this.options.linear) {
                    this.horizontal = Math.round(Math.cos(angle)) * this.options.speed * this.reverse * (60 / 1000);
                    this.vertical = Math.round(Math.sin(angle)) * this.options.speed * this.reverse * (60 / 1000);
                }
                else {
                    this.horizontal = Math.cos(angle) * this.options.speed * this.reverse * (60 / 1000);
                    this.vertical = Math.sin(angle) * this.options.speed * this.reverse * (60 / 1000);
                }
            }
            else {
                if (this.horizontal) {
                    this.decelerateHorizontal();
                }
                if (this.vertical) {
                    this.decelerateVertical();
                }
                this.horizontal = this.vertical = 0;
            }
        }
        else {
            if (this.left !== null && x < this.left) {
                this.horizontal = 1 * this.reverse * this.options.speed * (60 / 1000);
            }
            else if (this.right !== null && x > this.right) {
                this.horizontal = -1 * this.reverse * this.options.speed * (60 / 1000);
            }
            else {
                this.decelerateHorizontal();
                this.horizontal = 0;
            }
            if (this.top !== null && y < this.top) {
                this.vertical = 1 * this.reverse * this.options.speed * (60 / 1000);
            }
            else if (this.bottom !== null && y > this.bottom) {
                this.vertical = -1 * this.reverse * this.options.speed * (60 / 1000);
            }
            else {
                this.decelerateVertical();
                this.vertical = 0;
            }
        }
    }
    decelerateHorizontal() {
        const decelerate = this.parent.plugins.get('decelerate', true);
        if (this.horizontal && decelerate && !this.options.noDecelerate) {
            decelerate.activate({ x: (this.horizontal * this.options.speed * this.reverse) / (1000 / 60) });
        }
    }
    decelerateVertical() {
        const decelerate = this.parent.plugins.get('decelerate', true);
        if (this.vertical && decelerate && !this.options.noDecelerate) {
            decelerate.activate({ y: (this.vertical * this.options.speed * this.reverse) / (1000 / 60) });
        }
    }
    up() {
        if (this.paused) {
            return;
        }
        if (this.horizontal) {
            this.decelerateHorizontal();
        }
        if (this.vertical) {
            this.decelerateVertical();
        }
        this.horizontal = this.vertical = null;
    }
    update() {
        if (this.paused) {
            return;
        }
        if (this.horizontal || this.vertical) {
            const center = this.parent.center;
            if (this.horizontal) {
                center.x += this.horizontal * this.options.speed;
            }
            if (this.vertical) {
                center.y += this.vertical * this.options.speed;
            }
            this.parent.moveCenter(center);
            this.parent.emit('moved', { viewport: this.parent, type: 'mouse-edges' });
        }
    }
}
