import {configureStore} from "@reduxjs/toolkit"
import logsreducer from "./logsSlice";

const store = configureStore({
    reducer: {
        logs: logsreducer,
    },
});

export default store;