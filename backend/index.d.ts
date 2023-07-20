
type AnyFunction<T extends (...param: Parameters<T>) => ReturnType<T>> = (...param: Parameters<T>) => ReturnType<T>

declare module "wix-web-methods" {
    export function withPermission<T extends AnyFunction<T>>(anyFunc: T): (...param: Parameters<T>) => 
        ReturnType<T> extends Promise<any> 
        ? ReturnType<T>
        : Promise<ReturnType<T>>;
}