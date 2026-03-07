import { jsx as _jsx } from "react/jsx-runtime";
import { PlasmicMenuPopover } from "./plasmic/werdnerd/PlasmicMenuPopover";
function MenuPopover(props) {
    // Use PlasmicMenuPopover to render this component as it was
    // designed in Plasmic, by activating the appropriate variants,
    // attaching the appropriate event handlers, etc.  You
    // can also install whatever React hooks you need here to manage state or
    // fetch data.
    //
    // Props you can pass into PlasmicMenuPopover are:
    // 1. Variants you want to activate,
    // 2. Contents for slots you want to fill,
    // 3. Overrides for any named node in the component to attach behavior and data,
    // 4. Props to set on the root node.
    //
    // By default, we are just piping all MenuPopoverProps here, but feel free
    // to do whatever works for you.
    return _jsx(PlasmicMenuPopover, { ...props });
}
export default MenuPopover;
