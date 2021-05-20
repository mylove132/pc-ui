export interface IUseLocalStorage {
    setLocalStorage: (localKey: string, localValue: string) => void;
    delLocalStorage: (localKey: string) => void;
    getLocalStorage: (localKey: string) => string;
}

/**
 * 操作localstorage
 */
function userLocalStorage(): IUseLocalStorage {

    function setLocalStorage(localKey: string, localValue: string): void {
        localStorage.setItem(localKey, localValue);
    }

    function delLocalStorage(localKey: string): void {
        localStorage.removeItem(localKey);
    }

    function getLocalStorage(localKey: string): string {
        return localStorage.getItem(localKey)!;
    }
    return {
        setLocalStorage,
        delLocalStorage,
        getLocalStorage
    }
}

export default userLocalStorage;
