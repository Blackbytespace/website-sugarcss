function i(t){var n;return!((n=navigator?.clipboard)===null||n===void 0)&&n.writeText?navigator.clipboard.writeText(t):Promise.reject("The Clipboard API is not available.")}export{i as c};
