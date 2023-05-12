import { configureStore } from "@reduxjs/toolkit";
import addSlice from "./actions/add-slice";
import viewcarSlice from "./actions/view-car-slice";
import authAdminSlice from "./actions/admin-auth-slice"
import editSlice from "./actions/edit-slice";



export const Store = configureStore({
    reducer:{
        authAdminStore: authAdminSlice.reducer,
        // dashboardStore : dashboardSlice.reducer,
        // tableStore : tableSlice.reducer,
        addStore :addSlice.reducer,
        viewcarStore :viewcarSlice.reducer,
        editcarStore : editSlice.reducer
        
    }
})