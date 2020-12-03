export class Clamp extends Plugin {
    private constructor();
    options: {
        left: boolean;
        right: boolean;
        top: boolean;
        bottom: boolean;
        direction: any;
        underflow: string;
    } & ClampOptions;
    last: {
        x: any;
        y: any;
        scaleX: any;
        scaleY: any;
    };
    parseUnderflow(): void;
    noUnderflow: boolean;
    underflowX: number;
    underflowY: number;
}
export type ClampOptions = {
    left?: (number | boolean);
    right?: (number | boolean);
    top?: (number | boolean);
    bottom?: (number | boolean);
    direction?: string;
    underflow?: string;
};
import { Plugin } from "./plugin";
