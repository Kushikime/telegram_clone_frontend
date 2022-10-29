
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
    nightmode: boolean,
    drawer: boolean,
    chatSelectorWidth: number
}

const initialState: AppState = {
    nightmode: false,
    drawer: false,
    chatSelectorWidth: 300
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleNightMode: (state) => {
            state.nightmode = !state.nightmode
        },
        toggleDrawer: (state) => {
            state.drawer = !state.drawer
        },
        updateChatSelectorWidth: (state, data: PayloadAction<number>) => {
            console.log(data)
            state.chatSelectorWidth = data.payload
        }
    },
})

export const { toggleNightMode, toggleDrawer, updateChatSelectorWidth } = appSlice.actions;
export default appSlice.reducer;