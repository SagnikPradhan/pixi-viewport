export class Plugin {
    constructor(parent) {
        this.parent = parent;
        this.paused = false;
    }
    destroy() { }
    down() {
        return false;
    }
    move() {
        return false;
    }
    up() {
        return false;
    }
    wheel() {
        return false;
    }
    update() { }
    resize() { }
    reset() { }
    pause() {
        this.paused = true;
    }
    resume() {
        this.paused = false;
    }
}
