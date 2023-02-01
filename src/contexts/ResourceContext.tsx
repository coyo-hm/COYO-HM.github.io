import { createContext } from "react";

interface IResourceContext {
  prefix: string;
}

const ResourceContext = createContext<IResourceContext>({ prefix: "" });

export const ResourceProvider = ResourceContext.Provider;
export const ResourceConsumer = ResourceContext.Consumer;

export default ResourceContext;
