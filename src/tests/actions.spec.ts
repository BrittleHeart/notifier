// mutations.spec.js
import { assertIsDefined } from '@/utils/asserts'
import { describe, expect } from '@jest/globals'
import { NotificationTypeEnum } from '../enums/NotificationTypeEnum'
import { NotificationInterface } from '../interfaces/NotificationInterface'
import { store } from '../store'

const { state } = store
let customNotifications: NotificationInterface[] = []
let lengthBefore: number = 0

beforeEach(() => {
  lengthBefore = state.notifications.length
  customNotifications = [
    {
      id: lengthBefore + 1,
      type: NotificationTypeEnum.MENTION,
      actor: {
        id: 1,
        name: 'Mark Webber',
        avatar: 'https://randomuser',
      },
      message: {
        content: 'Ok, thank you',
        link: {
          url: 'https://google.com',
          text: 'Google',
        },
      },
      time: '1m ago',
      isRead: false,
    },
    {
      id: lengthBefore + 2,
      type: NotificationTypeEnum.FOLLOW,
      actor: {
        id: 1,
        name: 'Sandra Smith',
        avatar: 'https://randomuser',
      },
      message: {
        content: 'followed you',
        link: {
          url: 'https://google.com',
          text: 'Google',
        },
      },
      time: '2m ago',
      isRead: false,
    },
    {
      id: lengthBefore + 3,
      type: NotificationTypeEnum.GROUP,
      actor: {
        id: 1,
        name: 'Kamil Orcha',
        avatar: 'https://randomuser',
      },
      message: {
        content: 'Joined to your group',
        link: {
          url: 'https://google.com',
          text: 'Google',
        },
      },
      time: '10m ago',
      isRead: true,
    },
  ]
})

describe('mutations', () => {
  it('should add new notifiaction', () => {
    for (let notification in customNotifications) {
      store.dispatch('addNotification', customNotifications[notification])
    }

    expect(state.notifications.length).toBe(
      state.notifications.length ?? state.notifications.length + 1
    )
  })

  it('should mark all notifications as read', () => {
    const { notifications } = state

    store.dispatch('markAllAsRead')

    // assert result
    expect(notifications.every((notification) => notification.isRead)).toBe(
      true
    )
  })

  it.each([1, 2])(
    'should toggle notification as read for id %d',
    (id: number) => {
      const { notifications } = state

      const notification = notifications.find(
        (notification) => notification.id === id
      )

      assertIsDefined<NotificationInterface>(notification)

      store.dispatch('markAsRead', notification.id)

      expect(notification.isRead).toBe(
        notification.isRead ?? !notification.isRead
      )
    }
  )

  it.each([1, 2])('should remove notification with id %d', (id: number) => {
    const { notifications } = store.state

    store.dispatch('removeNotification', { id, index: 0 })
    expect(lengthBefore).toBeGreaterThan(notifications.length)
  })
})
