import * as React from 'react';
import { NavigationState, PartialState } from '@react-navigation/routers';
import { NavigationContainerRef, NavigationContainerProps } from './types';
export declare const NavigationStateContext: React.Context<{
    isDefault?: true | undefined;
    state?: NavigationState | PartialState<NavigationState> | undefined;
    getKey: () => string | undefined;
    setKey: (key: string) => void;
    getState: () => NavigationState | PartialState<NavigationState> | undefined;
    setState: (state: NavigationState | PartialState<NavigationState> | undefined) => void;
}>;
/**
 * Container component which holds the navigation state.
 * This should be rendered at the root wrapping the whole app.
 *
 * @param props.initialState Initial state object for the navigation tree.
 * @param props.onStateChange Callback which is called with the latest navigation state when it changes.
 * @param props.children Child elements to render the content.
 * @param props.ref Ref object which refers to the navigation object containing helper methods.
 */
declare const BaseNavigationContainer: React.ForwardRefExoticComponent<NavigationContainerProps & React.RefAttributes<NavigationContainerRef>>;
export default BaseNavigationContainer;
