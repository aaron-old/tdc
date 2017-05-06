module.exports = function (source) {
    this.cacheable && this.cacheable();
    let newSource;

    if (/reflux-core.*index.js$/.test(this.resourcePath)) {
        newSource = ";import RefluxPromise from 'reflux-promise';\n";
        newSource += source;
        newSource += ";\nReflux.use(RefluxPromise(Promise));";
    }
    return newSource || source;
};
