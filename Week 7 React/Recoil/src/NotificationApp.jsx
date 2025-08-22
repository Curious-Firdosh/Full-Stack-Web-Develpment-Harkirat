
import { useRecoilState, useRecoilValue } from 'recoil'

// import { JobsAtom, MassegingAtom, MynetworkAtom, NotificationAtom, TotalMassege } from './Store/Atom/Notification'
import { NotificationsAtom , TodosAtom, TotalNotification } from './Store/Atom/Notification'


const NotificationApp = () => {

    const notificationCount = useRecoilValue(NotificationsAtom)
    // * const MassegeCount = useRecoilValue(MassegingAtom)
    // *const JobCount = useRecoilValue(JobsAtom)
    // *const NetworkCount = useRecoilValue(MynetworkAtom)
    const totalMassegeCount = useRecoilValue(TotalNotification)

    const todoData = useRecoilValue(TodosAtom)
  
  

    // Also We Can Use UseMemo From Dependency Array 
  return (
    <div>
      <button>Home</button>
      <button>My Network ({notificationCount.network})</button>
      <button>Jobs ({notificationCount.Jobs}) </button>
      <button>Masseging ({notificationCount.Masseging})</button>
      <button>Notification ({(notificationCount.notifications >= 100) ?"99+" : notificationCount.notifications }) </button>
      <button>Me({totalMassegeCount})</button>
      <div>
            <h2>Todos</h2>
            <ul>
              {todoData?.map((item) => (
                <li key={item.id}>
                  {item.todo} — {item.completed ? "✅ Done" : "❌ Not done"}
                </li>
              ))}
            </ul>
      </div>
    </div>
  )
}

export default NotificationApp
