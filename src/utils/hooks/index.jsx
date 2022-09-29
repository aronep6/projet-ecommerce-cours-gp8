import { useContext } from "react";
import ServiceContext from "../Service/context";

const useService = () => {
    const service = useContext(ServiceContext);
    return service;
};

export { useService };