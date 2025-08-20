import { atom } from "recoil";

export const countAtom = atom({
     key: 'counterState',   // unique ID
     default: 0,            // initial value
})

/* 
    useRecoilState = useState
    useRecoilValue  = just [count , setcount]
    useSetRecoilValue = likse Setcount of setting the value
*/