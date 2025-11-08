import { Provider } from 'react-redux'
import { store } from './config/store'
import type {ReactNode} from "react";

export const withStore = (component: () => ReactNode) => () =>
    <Provider store={store}>{component()}</Provider>
