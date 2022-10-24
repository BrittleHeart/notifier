import { createStore } from 'vuex'
import { NotificationInterface } from '@/interfaces/NotificationInterface'
import { notifications } from '@/notifications'
import { assertIsDefined } from '@/utils/asserts'

/**
 * Store has been created with one idea in mind.
 * For now, I don't want to expand this application as much (i.e handling users, creating messages etc.)
 * so, to keep it simple, I'm using a single store with no modules within it.
 *
 * In the future, there is a possibility of expanding this application,
 * If it happens, I will add all required modules.
 * 
 * What could also suprise you, there's no point, to write mutations
 * for handling possible updates for notification model
 * 
 * Why? We don't want to allow users, to possibly change notification's message, type or 
 * any other property of the notification. We want them, to be able to
 * change it's isRead property, nothing more
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

      assertIsDefined(notification)

      notification.isRead = !notification.isRead
    },

    /**
     * Removes notification from list
     *
     * @param state notifications
     * @param { id: number, index: number } params
     * @return void
     */
    REMOVE_NOTIFICATION(
      { notifications },
      params: { id: number; index: number }
    ) {
      const { id, index } = params

      let notification = notifications.find(
        (notification) => notification.id === id
      )

      assertIsDefined(notification)

      notifications.splice(index, 1)
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
      commit('TOGGLE_IS_READ', id)
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
     * @param { id: number, index: number } params
     * @return void
     */
    async removeNotification({ commit }, params: { id: number, index: number }) {
      commit('REMOVE_NOTIFICATION', params)
    },
  },
})
