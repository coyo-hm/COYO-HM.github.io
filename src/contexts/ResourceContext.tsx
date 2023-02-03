import { createContext } from "react";

interface ResourceContextType {
  prefix: string;
}

const ResourceContext = createContext<ResourceContextType>({ prefix: "" });

export const ResourceProvider = ResourceContext.Provider;
export const ResourceConsumer = ResourceContext.Consumer;

export default ResourceContext;
