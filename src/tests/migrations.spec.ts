// mutations.spec.js
import { describe, expect, test } from '@jest/globals'
import { NotificationTypeEnum } from '../enums/NotificationTypeEnum'
import { NotificationInterface } from '../interfaces/NotificationInterface'
import { store } from '../store'

describe('mutations', () => {
  it('INCREMENT', () => {
    // mock state
    let notification: NotificationInterface = {
      id: 7,
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
    }
    // apply mutation
    store.commit('ADD_NOTIFICATION', notification)
    // assert result
    expect(store.state.notifications).toHaveLength(8)
  })
})
