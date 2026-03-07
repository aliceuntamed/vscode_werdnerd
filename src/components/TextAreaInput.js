import { jsx as _jsx } from "react/jsx-runtime";
import { PlasmicTextAreaInput } from "./plasmic/werdnerd/PlasmicTextAreaInput";
function TextAreaInput(props) {
    // Use PlasmicTextAreaInput to render this component as it was
    // designed in Plasmic, by activating the appropriate variants,
    // attaching the appropriate event handlers, etc.  You
    // can also install whatever React hooks you need here to manage state or
    // fetch data.
    //
    // Props you can pass into PlasmicTextAreaInput are:
    // 1. Variants you want to activate,
    // 2. Contents for slots you want to fill,
    // 3. Overrides for any named node in the component to attach behavior and data,
    // 4. Props to set on the root node.
    //
    // By default, we are just piping all TextAreaInputProps here, but feel free
    // to do whatever works for you.
    return _jsx(PlasmicTextAreaInput, { ...props });
}
export default TextAreaInput;
