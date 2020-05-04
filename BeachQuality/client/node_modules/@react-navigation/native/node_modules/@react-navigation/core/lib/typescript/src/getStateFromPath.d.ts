import { NavigationState, PartialState } from '@react-navigation/routers';
declare type ParseConfig = Record<string, (value: string) => any>;
declare type Options = {
    [routeName: string]: string | {
        path?: string;
        parse?: ParseConfig;
        screens?: Options;
        initialRouteName?: string;
    };
};
declare type ResultState = PartialState<NavigationState> & {
    state?: ResultState;
};
/**
 * Utility to parse a path string to initial state object accepted by the container.
 * This is useful for deep linking when we need to handle the incoming URL.
 *
 * Example:
 * ```js
 * getStateFromPath(
 *   '/chat/jane/42',
 *   {
 *     Chat: {
 *       path: 'chat/:author/:id',
 *       parse: { id: Number }
 *     }
 *   }
 * )
 * ```
 * @param path Path string to parse and convert, e.g. /foo/bar?count=42.
 * @param options Extra options to fine-tune how to parse the path.
 */
export default function getStateFromPath(path: string, options?: Options): ResultState | undefined;
export {};
