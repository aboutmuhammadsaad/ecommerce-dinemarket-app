export const APP_LINKS=[
    {
        name: "Female",
        href:"/female",
        id:0,
    },
    {
        id:1,
        name: "Male",
        href:"/male"
    },
    {
        id:2,
        name: "Kids",
        href:"/kids"
    },
    {
        id:3,
        name: "All Products",
        href:"/allproducts"
    }
]



import { useDispatch, useSelector, useStore } from 'react-redux'
import type { RootState, AppDispatch, AppStore } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()