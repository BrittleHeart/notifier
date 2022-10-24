import { describe, expect } from '@jest/globals'
import { store } from '@/store'
import { NotificationInterface } from '@/interfaces/NotificationInterface'

describe('getters', () => {
  it('should get all notifications', () => {
    let notifications = store.getters['get']

    expect(notifications).toBeInstanceOf(Array<NotificationInterface>)
  })

  it('should get count of uread notifications', () => {
    let countUnreadNotifications = store.getters['getCountUnread']

    expect(countUnreadNotifications).toBeGreaterThanOrEqual(0)
  })
})