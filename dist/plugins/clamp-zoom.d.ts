export class ClampZoom extends Plugin {
    private constructor();
    options: {
        minWidth: any;
        minHeight: any;
        maxWidth: any;
        maxHeight: any;
        minScale: any;
        maxScale: any;
    } & ClampZoomOptions;
    clamp(): void;
}
export type ClampZoomOptions = {
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
    minScale?: number;
    maxScale?: number;
};
import { Plugin } from "./plugin";
