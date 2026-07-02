import React from 'react';
import {Notification} from '../types/Notification';
interface NotificationListProps {
  notifications:Notification[];
  filterType?:'info'|'warning'|'error';
  limit?:number;
}
const NotificationList:React.FC<NotificationListProps>=({notifications,filterType,limit})=>{
  const filteredNotifications=filterType ? notifications.filter(notification=>notification.type===filterType) : notifications;
  const sortedNotifications=filteredNotifications.sort((a, b)=>b.priority-a.priority);
  const limitedNotifications=limit?sortedNotifications.slice(0,limit) : sortedNotifications;
  return (
    <div>
      {limitedNotifications.map(notification=>(
        <div key={notification.id}className={`notification ${notification.type}`}>
          <p>{notification.message}</p>
          <span>Priority: {notification.priority}</span>
        </div>
      ))}
    </div>
  );
};
export default NotificationList;