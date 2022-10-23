import { NotificationInterface } from '@/interfaces/NotificationInterface'
import { notifications } from '@/notifications'

export default class NotificationRepository {
  private notifications: NotificationInterface[] = []

  constructor() {
    this.notifications = notifications
  }

  async getNotifications(): Promise<NotificationInterface[]> {
    // TODO: this should be ajax call
    return new Promise<NotificationInterface[]>((resolve, reject) => {
      resolve(this.notifications)
    })
  }

  async markAsRead(id: number): Promise<void> {
    this.notifications = this.notifications.map((notification) => {
      if (notification.id === id) {
        notification.isRead = true
      }
      return notification
    })
  }

  async markAllAsReads(): Promise<void> {
    this.notifications = this.notifications.map((notification) => {
      notification.isRead = true
      return notification
    })
  }

  async getCount(): Promise<number> {
    return this.notifications.length;
  }
}
