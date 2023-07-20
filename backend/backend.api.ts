import { withPermission } from "wix-web-methods";

export const myFunc = withPermission(() => {
    return "Hello World";
})