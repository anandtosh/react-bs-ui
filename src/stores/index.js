import create from 'zustand'
import {persist} from 'zustand/middleware'
import storage from './storage'

let useStore = (set) =>({
    leftSidebar: storage.get('leftSidebar') || false,
    setLeftSidebar: (leftSidebar) => set((state) => ({...state, leftSidebar}))
})

useStore = persist(useStore,{name: "settings"})

export default create(useStore)