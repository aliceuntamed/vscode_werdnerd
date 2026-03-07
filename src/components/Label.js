import { jsx as _jsx } from "react/jsx-runtime";
import { PlasmicLabel } from "./plasmic/werdnerd/PlasmicLabel";
function Label(props) {
    // Use PlasmicLabel to render this component as it was
    // designed in Plasmic, by activating the appropriate variants,
    // attaching the appropriate event handlers, etc.  You
    // can also install whatever React hooks you need here to manage state or
    // fetch data.
    //
    // Props you can pass into PlasmicLabel are:
    // 1. Variants you want to activate,
    // 2. Contents for slots you want to fill,
    // 3. Overrides for any named node in the component to attach behavior and data,
    // 4. Props to set on the root node.
    //
    // By default, we are just piping all LabelProps here, but feel free
    // to do whatever works for you.
    return _jsx(PlasmicLabel, { ...props });
}
export default Label;
