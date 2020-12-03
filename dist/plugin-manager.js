const PLUGIN_ORDER = [
    "drag",
    "pinch",
    "wheel",
    "follow",
    "mouse-edges",
    "decelerate",
    "aniamte",
    "bounce",
    "snap-zoom",
    "clamp-zoom",
    "snap",
    "clamp",
];
export class PluginManager {
    constructor(viewport) {
        this.viewport = viewport;
        this.list = [];
        this.plugins = {};
    }
    add(name, plugin, index = PLUGIN_ORDER.length) {
        this.plugins[name] = plugin;
        const current = PLUGIN_ORDER.indexOf(name);
        if (current !== -1) {
            PLUGIN_ORDER.splice(current, 1);
        }
        PLUGIN_ORDER.splice(index, 0, name);
        this.sort();
    }
    get(name, ignorePaused) {
        if (ignorePaused) {
            if (typeof this.plugins[name] !== "undefined" &&
                this.plugins[name].paused) {
                return null;
            }
        }
        return this.plugins[name];
    }
    update(elapsed) {
        for (let plugin of this.list) {
            plugin.update(elapsed);
        }
    }
    resize() {
        for (let plugin of this.list) {
            plugin.resize();
        }
    }
    reset() {
        for (let plugin of this.list) {
            plugin.reset();
        }
    }
    remove(name) {
        if (this.plugins[name]) {
            this.plugins[name] = null;
            this.viewport.emit(name + "-remove");
            this.sort();
        }
    }
    pause(name) {
        if (this.plugins[name]) {
            this.plugins[name].pause();
        }
    }
    resume(name) {
        if (this.plugins[name]) {
            this.plugins[name].resume();
        }
    }
    sort() {
        this.list = [];
        for (let plugin of PLUGIN_ORDER) {
            if (this.plugins[plugin]) {
                this.list.push(this.plugins[plugin]);
            }
        }
    }
    down(event) {
        let stop = false;
        for (let plugin of this.list) {
            if (plugin.down(event)) {
                stop = true;
            }
        }
        return stop;
    }
    move(event) {
        let stop = false;
        for (let plugin of this.viewport.plugins.list) {
            if (plugin.move(event)) {
                stop = true;
            }
        }
        return stop;
    }
    up(event) {
        let stop = false;
        for (let plugin of this.list) {
            if (plugin.up(event)) {
                stop = true;
            }
        }
        return stop;
    }
    wheel(e) {
        let result = false;
        for (let plugin of this.list) {
            if (plugin.wheel(e)) {
                result = true;
            }
        }
        return result;
    }
}
