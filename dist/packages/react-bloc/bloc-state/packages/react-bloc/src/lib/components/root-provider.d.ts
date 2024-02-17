import { PropsWithChildren } from 'react';
import { ProviderContextMap } from '../context';
/**
 * Global map to hold provider contexts, keyed by a string identifier.
 */
export declare const clientContextMap: ProviderContextMap;
/**
 * A root provider component that sets up the context for accessing provider instances.
 *
 * @param {PropsWithChildren} props The props that include children components.
 * @returns A component that provides a context map to its children.
 */
export declare const RootProvider: ({ children }: PropsWithChildren) => import("react").FunctionComponentElement<import("react").ProviderProps<ProviderContextMap | undefined>>;
