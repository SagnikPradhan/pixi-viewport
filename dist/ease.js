import Penner from 'penner';
export default function ease(ease, defaults) {
    if (!ease) {
        return Penner[defaults];
    }
    else if (typeof ease === 'function') {
        return ease;
    }
    else if (typeof ease === 'string') {
        return Penner[ease];
    }
}
