import { configureStore} from "@reduxjs/toolkit";

import userSlice from '../features/userSlice';
 import movieSlice from "../features/movieSlice"

export default configureStore ({
    reducer:{
        user:userSlice,
        movie:movieSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    })
})