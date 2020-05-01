import { Router, CommonNavigationAction, NavigationState, DefaultRouterOptions } from '@react-navigation/routers';
export declare type MockActions = CommonNavigationAction | {
    type: 'NOOP' | 'UPDATE';
};
export declare const MockRouterKey: {
    current: number;
};
export default function MockRouter(options: DefaultRouterOptions): Router<NavigationState, MockActions>;
