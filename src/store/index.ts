import { createStore } from 'vuex'
import { NotificationInterface } from '@/interfaces/NotificationInterface'
import { notifications } from '@/notifications'
import NotFoundError from '@/errors/NotFoundError'

/**
 * Store has been created with one idea in mind
 * for now, I don't want to expand this application as much
 * so, to keep it simple, I'm using a single store with no modules within it
 *
 * In the future, there is a possibility to expand this application
 * then I'll add modules with proper name.
 */
export const store = createStore<{
  notifications: NotificationInterface[]
  /* ... */
}>({
  state: {
    notifications,
  },
  getters: {
    /**
     * Gets count of all unread notifications
     * @param state notifications
     * @return number
     */
    getCountUnread({ notifications }): number {
      // optimization: do not start counting unread notifications if there is no notification
      if (!notifications || undefined === notifications) return 0

      let unreadNotifications = notifications.filter(
        (notification) => !notification.isRead
      )

      return unreadNotifications.length
    },

    /**
     * Gets call notifications
     *
     * @return NotificationInterface[]
     */
    get(): NotificationInterface[] {
      return notifications
    },
  },
  mutations: {
    /**
     * Adds new notification to list
     *
     * @param state notifications
     * @param { NotificationInterface } notification
     * @return void
     */
    ADD_NOTIFICATION({ notifications }, notification: NotificationInterface) {
      notifications.push(notification)
    },

    /**
     * Marks all notifications as read
     *
     * @param state notifications
     * @return void
     */
    MARK_ALL_AS_READ({ notifications }) {
      notifications = notifications.map((notification) => {
        notification.isRead = true
        return notification
      })
    },

    /**
     * Toggles notification as read or unread
     *
     * @param state notifications
     * @param { number } id
     * @return void
     */
    TOGGLE_IS_READ({ notifications }, id: number) {
      let notification = notifications.find(
        (notification) => notification.id === id
      )

      if (undefined === notification)
        throw new NotFoundError(`Notification with id ${id} not found`)

      notification.isRead = !notification.isRead
    },

    /**
     * Removes notification from list
     *
     * @param state notifications
     * @param { number } id
     * @return void
     */
    REMOVE_NOTIFICATION({ notifications }, id: number) {
      let notification = notifications.find(
        (notification) => notification.id === id
      )
      if (undefined === notification)
        throw new NotFoundError(`Notification with id ${id} not found`)

      notifications.splice(notification.id, 1)
    },
  },
  actions: {
    /**
     * Adds new notification to list
     *
     * @param state notifications
     * @param { NotificationInterface } notification
     * @return void
     */
    async addNotification({ commit }, notification: NotificationInterface) {
      commit('ADD_NOTIFICATION', notification)
    },

    /**
     * Gets call notifications
     *
     * @return NotificationInterface[]
     */
    async markAsRead({ commit }, id: number) {
      commit('MARK_AS_READ', id)
    },

    /**
     * Toggles notification as read or unread
     *
     * @param state notifications
     * @param { number } id
     * @return void
     */
    async markAllAsRead({ commit }) {
      commit('MARK_ALL_AS_READ')
    },

    /**
     * Removes notification from list
     *
     * @param state notifications
     * @param { number } id
     * @return void
     */
    async removeNotification({ commit }, id: number) {
      commit('REMOVE_NOTIFICATION', id)
    },
  },
})
