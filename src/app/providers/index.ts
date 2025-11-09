import { withStore } from './store'
import type {ReactNode} from "react";

export const withProviders = (component: () => ReactNode) =>
    withStore(component)
