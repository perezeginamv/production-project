
import { lazy } from 'react'

export const MainPageAsync = lazy (()=>new Promise (resolve=>{
    //@ts-ignore
    //Так в реальных проектах не делать!!!
    setTimeout(()=>resolve(import('./MainPage')), 1500)
}))