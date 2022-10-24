import { NotificationTypeEnum } from "./enums/NotificationTypeEnum";
import { NotificationInterface } from "./interfaces/NotificationInterface";

export const notifications: NotificationInterface[] = [
  {
    id: 1,
    type: NotificationTypeEnum.REACTION,
    actor: {
      id: 1,
      name: 'Mark Webber',
      avatar: 'images/avatar-mark-webber.webp',
    },
    message: {
      content: 'reacted to your recent post',
      link: {
        url: '/',
        text: 'My first tournament today!',
      },
    },
    time: '1m ago',
    isRead: false,
  },
  {
    id: 2,
    type: NotificationTypeEnum.FOLLOW,
    actor: {
      id: 2,
      name: 'Angela Gray',
      avatar: 'images/avatar-angela-gray.webp',
    },
    message: {
      content: 'followed you',
    },
    time: '5m ago',
    isRead: false,
  },
  {
    id: 3,
    type: NotificationTypeEnum.GROUP,
    actor: {
      id: 3,
      name: 'Jacob Thompson',
      avatar: 'images/avatar-jacob-thompson.webp',
    },
    message: {
      content: 'has join your group',
      link: {
        url: '/',
        text: 'Chess Club',
      },
    },
    time: '1 day ago',
    isRead: false,
  },
  {
    id: 4,
    type: NotificationTypeEnum.DM,
    actor: {
      id: 4,
      name: 'Rizky Hasanudin',
      avatar: 'images/avatar-rizky-hasanuddin.webp',
    },
    message: {
      content: 'sent you a private message',
      link: {
        url: '/',
        text: `
          Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and
  I'm already having lots of fun and improving my game.
      `,
      },
    },
    time: '5 day ago',
    isRead: true,
  },
  {
    id: 5,
    type: NotificationTypeEnum.COMMENT,
    actor: {
      id: 5,
      name: 'Kimberly Smith',
      avatar: 'images/avatar-kimberly-smith.webp',
    },
    message: {
      content: 'commented on your picture',
      link: {
        url: '/',
        text: 'images/image-chess.webp',
        isImage: true,
      },
    },
    time: '1 week ago',
    isRead: true,
  },
  {
    id: 6,
    type: NotificationTypeEnum.REACTION,
    actor: {
      id: 6,
      name: 'Nathan Peterson',
      avatar: 'images/avatar-nathan-peterson.webp',
    },
    message: {
      content: 'reacted to your recent post',
      link: {
        url: '/',
        text: '5 end-game strategies to increase your win rate',
      },
    },
    time: '2 weeks ago',
    isRead: true,
  },
  {
    id: 7,
    type: NotificationTypeEnum.GROUP,
    actor: {
      id: 7,
      name: 'Anna Kim',
      avatar: 'images/avatar-anna-kim.webp',
    },
    message: {
      content: 'has left your group',
      link: {
        url: '/',
        text: 'Chess Club',
      },
    },
    time: '2 weeks ago',
    isRead: true,
  },
]
