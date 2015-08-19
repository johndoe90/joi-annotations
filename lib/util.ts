///<reference path="references.ts" />

export function params(...args) {
    return Array.prototype.filter.call(args, function(param) {
        return param != null;
    });
}