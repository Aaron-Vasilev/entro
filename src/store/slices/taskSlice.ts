import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../../prisma/generated/'
import { RootState } from '..'

interface TasksState {
  activeTask: Task
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
        if (state.activeTask.id !== action.payload.id)
          state.activeTask = action.payload
        state.loading = false
      })
      .addCase(addRelation.pending, (state) => {
        state.loading = true
      })
      .addCase(addRelation.fulfilled, (state, action) => {
        state.relatedTasks = action.payload
        state.loading = false
      })
      .addCase(getRelatedTasks.pending, (state) => {
        state.loading = true
      })
      .addCase(getRelatedTasks.fulfilled, (state, action) => {
        state.relatedTasks = action.payload
        state.loading = false
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

export const getRelatedTasks = createAsyncThunk<Task[], undefined, { state: RootState }>(
  '/getRelatedTasks',
  async (_, thunkApi) => {
    const activeTaskId = thunkApi.getState().tasks.activeTask.id
    const res = await fetch(`/api/relation/${activeTaskId}`)

    return await res.json()
  }
)


export const addRelation = createAsyncThunk<Task[], number, { state: RootState }>(
  '/addRelation',
  async (relation, thunkApi) => {
    const task = thunkApi.getState().tasks.activeTask.id
    const res = await fetch(`/api/relation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ task, relation })
    })

    return await res.json()
  }
)

export const changeStatus = createAsyncThunk<void, { id: number, status: string }>(
  '/changeStatus',
  async (data) => {
    await fetch(`/api/task`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }
)
