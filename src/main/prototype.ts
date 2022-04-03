export { }

declare global {
    interface Array<T> {
        remove(item: T): number;
    }
}

Array.prototype.remove = function(item){
    const index = this.indexOf(item)
    if (index === -1)
        return index
    this.splice(index, 1)
    return index
};