'use client'
import { Provider } from "react-redux"

import ReduxStore from "./store"

const Providers = ({ children }) => {

    return <Provider store={ReduxStore}>
        {children}
    </Provider>

}

export default Providers