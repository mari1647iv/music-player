import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isPlaying: false,
  current: 0,
  maxId: 6
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    next: (state) => {
      let id = Number(state.current) + 1
      if (id > state.maxId) {
        id = 0
      }
      state.current = String(id)
      state.isPlaying = false
    },
    previous: (state) => {
      let id = Number(state.current) - 1
      if (id < 0) {
        id = state.maxId
      }
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
    play: (state) => {
      if (state.current) {
        state.isPlaying = true
      }
    },
    pause: (state) => {
      if (state.current) {
        state.isPlaying = false
      }
    }
  }
})

export const { next, previous, setSong, play, pause } = playerSlice.actions

export default playerSlice.reducer
