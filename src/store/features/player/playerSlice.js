import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isPlaying: false,
  current: 0,
  currentInterval: undefined,
  maxId: 6
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    next: (state) => {
      let id = state.current < state.maxId ? Number(state.current) + 1 : 0
      state.current = String(id)
      state.isPlaying = false
    },
    previous: (state) => {
      let id = state.current > 0 ? Number(state.current) - 1 : state.maxId
      state.current = String(id)
      state.isPlaying = false
    },
    setSong: (state, action) => {
      let id = action.payload
      if (id > state.maxId) {
        id = state.maxId
      } else if (id < 0) {
        id = 0
      }
      state.current = String(id)
      state.isPlaying = false
    },
    play: (state, action) => {
      if (state.current) {
        state.isPlaying = true
        state.currentInterval = action.payload
      }
    },
    pause: (state) => {
      if (state.current) {
        state.isPlaying = false
        state.currentInterval = undefined
      }
    }
  }
})

export const { next, previous, setSong, play, pause } = playerSlice.actions

export default playerSlice.reducer
