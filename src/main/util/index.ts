export function traversePath(obj: any, path: string): any | undefined {
    const parts = path.split(".")
    
    let current = obj
    for (let part of parts) {
        current = current[part]
        if (current == null) {
            return
        }
    }

    return current
}