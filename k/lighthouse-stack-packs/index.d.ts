export = stackPacks;
declare const stackPacks: ({
    id: string;
    title: string;
    icon: string;
    UIStrings: {
        'modern-image-formats': string;
        'offscreen-images': string;
        'render-blocking-resources': string;
        'unminified-css': string;
        'efficient-animated-content': string;
        'uses-responsive-images': string;
    };
} | {
    id: string;
    title: string;
    icon: string;
    UIStrings: {
        'total-byte-weight': string;
        'unminified-warning': string;
        'unused-javascript': string;
        'uses-responsive-images': string;
        'uses-rel-preload': string;
        'dom-size': string;
    };
} | {
    id: string;
    title: string;
    icon: string;
    UIStrings: {
        'unused-css-rules': string;
        'modern-image-formats': string;
        'offscreen-images': string;
        'render-blocking-resources': string;
        'unminified-css': string;
        'unminified-javascript': string;
        'uses-long-cache-ttl': string;
        'uses-optimized-images': string;
        'uses-responsive-images': string;
        'server-response-time': string;
        'uses-rel-preconnect': string;
        'uses-rel-preload': string;
        'font-display': string;
    };
} | {
    id: string;
    title: string;
    icon: string;
    UIStrings: {
        'modern-image-formats': string;
        'offscreen-images': string;
        'disable-bundling': string;
        'unminified-css': string;
        'unminified-javascript': string;
        'unused-javascript': string;
        'uses-optimized-images': string;
        'server-response-time': string;
        'uses-rel-preconnect': string;
        'uses-rel-preload': string;
        'critical-request-chains': string;
        'font-display': string;
    };
} | {
    id: string;
    title: string;
    icon: string;
    UIStrings: {
        'modern-image-formats': string;
        'offscreen-images': string;
        'uses-optimized-images': string;
        'uses-responsive-images': string;
        'preload-lcp-image': string;
        'unsized-images': string;
    };
} | {
    id: string;
    title: string;
    icon: string;
    UIStrings: {
        'unminified-css': string;
        'unminified-javascript': string;
        'unused-javascript': string;
        'server-response-time': string;
        redirects: string;
        'user-timings': string;
        'dom-size': string;
    };
})[];
