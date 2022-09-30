import { useContext } from "react";
import ServiceContext from "../Service/context";
import LocalbaseContext from "../Localbase/context";

const useService = () => {
    const _s = useContext(ServiceContext);
    return _s;
};

const useLocalbase = () => {
    const _l = useContext(LocalbaseContext);
    return _l;
};

export { useService, useLocalbase };