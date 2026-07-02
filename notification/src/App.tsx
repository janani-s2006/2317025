import './App.css'
import React,{useState} from 'react';
import NotificationList from './components/NotificationList';
import {Notification} from './types/Notification';
import requestLogger from './LoggingMiddleware/requestLogger';
function App() {
  const[notifications,setNotifications]=useState<Notification[]>([]);
  const[filterType,setFilterType]=useState<'info'|'warning'|'error'|undefined>(undefined);
  const[limit,setLimit]=useState<number|undefined>(undefined);
  const exampleNotifications:Notification[]=[
    {id:1,message:'Info notification 1',type:'info',priority:1,viewed:false},
    {id:2,message:'Warning notification 1',type:'warning',priority:2,viewed:false},
    {id:3,message:'Error notification 1',type:'error',priority:3,viewed:false},
    {id:4,message:'Info notification 2',type:'info',priority:4,viewed:false},
    {id:5,message:'Warning notification 2',type:'warning',priority:5,viewed:false},
  ];
  React.useEffect(()=>{
    setNotifications(exampleNotifications);
  },[]);
  const handleNotificationClick=(id:number)=>{
    setNotifications(prevNotifications=>
      prevNotifications.map(notification=>
        notification.id===id?{...notification,viewed:true}:notification
      )
    );
  };
  return (
    <div className="App">
      <h1>Notification Center</h1>
      <div>
        <label>
          Filter by Type:
          <select onChange={(e)=>setFilterType(e.target.value as 'info'|'warning'|'error'|undefined)}>
            <option value="">All</option>
            <option value="info">Info</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
          </select>
        </label>
        <label>
          Limit:
          <input type="number" onChange={(e)=>setLimit(Number(e.target.value)||undefined)}/>
        </label>
      </div>
      <NotificationList notifications={notifications} filterType={filterType} limit={limit}/>
    </div>
  )
}
export default App;
