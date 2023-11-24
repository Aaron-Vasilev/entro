import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../../prisma/generated/'
import { RootState } from '..'
import prisma from '@/prisma'

interface TasksState {
  activeTask: Task | undefined
  tasks: Task[]
  relatedTasks: Task[]
  loading: boolean
  error: boolean
}

const initialState: TasksState = {
  activeTask: {
    id: 0,
    title: '',
    status: '',
    creationDate: '',
    description: '',
    assigneeName: '',
    assigneeAvatar: '',
  },
  tasks: [],
  relatedTasks: [],
  loading: false,
  error: false
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks.push(...action.payload)
    },
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload
    },
    setActiveTask: (state, action: PayloadAction<Task>) => {
      state.activeTask = action.payload
    },
    setRelatedTasks: (state, action: PayloadAction<Task[]>) => {
      state.relatedTasks = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTask.pending, (state) => {
        state.loading = true
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload)
        state.loading = false
      })
      .addCase(createTask.rejected, (state, action) => {
        console.log('† line 56 action', action)
        state.loading = false
      })
      .addCase(getTasks.pending, (state) => {
        state.loading = true
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.tasks = action.payload
        state.loading = false
      })
      .addCase(getTask.pending, (state) => {
        state.loading = true
      })
      .addCase(getTask.fulfilled, (state, action) => {
        state.activeTask = action.payload
        state.loading = false
      })
      .addCase(addRelatedTask.pending, (state) => {
        state.loading = true
      })
      .addCase(addRelatedTask.fulfilled, (state, action) => {
        state.relatedTasks.push(action.payload)
        state.loading = false
      })
      .addCase(addRelatedTask.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      .addCase(pushRelatedTask.fulfilled, (state, action) => {
        state.relatedTasks = [action.payload, ...state.relatedTasks]
      })
  },
})

export const { 
  addTasks,
  setTasks, 
  setActiveTask,
  setRelatedTasks
} = taskSlice.actions

export const createTask = createAsyncThunk<Task, Task, { state: RootState }>(
  '/createTask',
  async (newTask) => {
    const res = await fetch(`/api/task`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })

    return await res.json()
  }
)

export const getTasks = createAsyncThunk(
  '/getTasks',
  async () => {
    const res = await fetch('/api/task')

    return await res.json()
  }
)

export const getTask = createAsyncThunk<Task, number, { state: RootState }>(
  '/getTask',
  async (id) => {
    const res = await fetch(`/api/task/${id}`)

    return await res.json()
  }
)

export const addRelatedTask = createAsyncThunk<Task, Task, { state: RootState }>(
  '/addRelatedTask',
  async (newRelatedTask) => {
  }
)

export const pushRelatedTask = createAsyncThunk<Task, Task, { state: RootState }>(
  '/pushRelatedTask',
  async (newRelatedTask, thunkApi) => {
    return newRelatedTask
  }
)
