import axios from "axios";
import { atom, selector } from "recoil";

// export const  NotificationAtom = atom({
//     key : 'notificationAtom',
//     default : 9,
// })

// export const  MassegingAtom = atom({
//     key : 'MassegingAtom',
//     default : 12,
// })

// export const JobsAtom = atom({
//     key : 'JobsAtom',
//     default : 0,
// })

// export const  MynetworkAtom = atom({
//     key : 'MynetworkAtom',
//     default : 6,
// })

// TO Write All atom in One Place 

export const NotificationsAtom = atom({
    key : 'notificationAtom',
    default : {
        network : 10 ,
        Jobs : 0 ,
        Masseging : 3 ,
        notifications : 5
    }
})

// another selector 
export const TotalNotification = selector ({
    key : "totalNotification",
    get : ({get}) => {
        const allNotification = get(NotificationsAtom);
        return allNotification.Jobs + 
              allNotification.Masseging + allNotification.network
              + allNotification.notifications
    }
});

// // to call Api  AsynChronusly 
// export const Notifications = atom ({
//     key : "notificationAtom",
//     default : selector ({
//         key : "notificationSelector",
//         get : async () => {
//             const res = await axios.get('https://sum-server.100xdevs.com/notifications')
//             return res.data
//         }
//     })

// })


// // THat is Selector 
// export const TotalMassege = selector({
//     key : 'totalMassege',
//     get : ({get}) => {
//         const Notification = get(NotificationAtom);
//         const  Masseging = get(MassegingAtom);
//         const  Mynetwork = get(MynetworkAtom);
//         const Jobs = get(JobsAtom);
//      return Notification + Masseging + Mynetwork + Jobs

//     }
// })


export const TodosAtom = atom({
  key: "todosAtom",
  default: selector({
    key: "TodosAtomDefault",
    get: async () => {
      try {
        const res = await axios.get("https://dummyjson.com/todos/random/10");
        // Make sure API shape is correct
        if (res.data && res.data.todos) {
          return res.data.todos; 
        }
        return []; // fallback safe empty array
      } catch (error) {
        console.error("Error fetching todos:", error);
        return []; // return safe default
      }
    },
  }),
});