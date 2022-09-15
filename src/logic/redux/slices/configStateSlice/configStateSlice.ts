import { createSlice } from "@reduxjs/toolkit"

const configStateSlice = createSlice({
  name: "configState",
  initialState: {
    frameDuration: 6000 as number | undefined,
    cellSize: 6,
  },
  reducers: {
    setFrameDuration: (state, { payload }) => {
      const inputValue = payload.match(/\d+/)
      if (!inputValue) {
        state.frameDuration = undefined
        return
      }

      state.frameDuration = +inputValue
    },
    incrementCellSize: (state) => {
      if (state.cellSize > 30) {
        return
      }

      state.cellSize++
    },
    decrementCellSize: (state) => {
      if (state.cellSize <= 1) {
        return
      }

      state.cellSize--
    },
  }
})

export const { setFrameDuration, incrementCellSize, decrementCellSize } = configStateSlice.actions
export default configStateSlice.reducer