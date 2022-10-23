import { NotificationTypeEnum } from "./enums/NotificationTypeEnum";
import { NotificationInterface } from "./interfaces/NotificationInterface";

// avatars
import AvatarMarkWebber from "@/assets/images/avatar-mark-webber.webp";
import AvatarAngelaGray from "@/assets/images/avatar-angela-gray.webp";
import AvatarJacobThompson from "@/assets/images/avatar-jacob-thompson.webp";
import AvatarRizkyHasanuddin from "@/assets/images/avatar-rizky-hasanuddin.webp";
import AvatarKimberlySmith from "@/assets/images/avatar-kimberly-smith.webp";
import AvatarNathanPeterson from "@/assets/images/avatar-nathan-peterson.webp";
import AvatarAnnaKim from "@/assets/images/avatar-anna-kim.webp";

// other images
import ImageChess from "@/assets/images/image-chess.webp";

export const notifications: NotificationInterface[] = [
  {
    id: 1,
    type: NotificationTypeEnum.REACTION,
    actor: {
      id: 1,
      name: "Mark Webber",
      avatar: AvatarMarkWebber,
    },
    message: {
      content: "reacted to your recent post",
      link: {
        url: "/",
        text: "My first tournament today!",
      },
    },
    time: "1m ago",
    isRead: false,
  },
  {
    id: 2,
    type: NotificationTypeEnum.FOLLOW,
    actor: {
      id: 2,
      name: "Angela Gray",
      avatar: AvatarAngelaGray,
    },
    message: {
      content: "followed you",
    },
    time: "5m ago",
    isRead: false,
  },
  {
    id: 3,
    type: NotificationTypeEnum.GROUP,
    actor: {
      id: 3,
      name: "Jacob Thompson",
      avatar: AvatarJacobThompson,
    },
    message: {
      content: "has join your group",
      link: {
        url: "/",
        text: "Chess Club",
      },
    },
    time: "1 day ago",
    isRead: false,
  },
  {
    id: 4,
    type: NotificationTypeEnum.DM,
    actor: {
      id: 4,
      name: "Rizky Hasanudin",
      avatar: AvatarRizkyHasanuddin,
    },
    message: {
      content: "sent you a private message",
      link: {
        url: "/",
        text: `
          Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
  I'm already having lots of fun and improving my game.
      `,
      },
    },
    time: "5 day ago",
    isRead: true,
  },
  {
    id: 5,
    type: NotificationTypeEnum.COMMENT,
    actor: {
      id: 5,
      name: "Kimberly Smith",
      avatar: AvatarKimberlySmith,
    },
    message: {
      content: "commented on your picture",
      link: {
        url: "/",
        text: ImageChess,
        isImage: true,
      },
    },
    time: "1 week ago",
    isRead: true,
  },
  {
    id: 6,
    type: NotificationTypeEnum.REACTION,
    actor: {
      id: 6,
      name: "Nathan Peterson",
      avatar: AvatarNathanPeterson,
    },
    message: {
      content: "reacted to your recent post",
      link: {
        url: "/",
        text: "5 end-game strategies to increase your win rate",
      },
    },
    time: "2 weeks ago",
    isRead: true,
  },
  {
    id: 7,
    type: NotificationTypeEnum.GROUP,
    actor: {
      id: 7,
      name: "Anna Kim",
      avatar: AvatarAnnaKim,
    },
    message: {
      content: "has left your group",
      link: {
        url: "/",
        text: "Chess Club",
      },
    },
    time: "2 weeks ago",
    isRead: true,
  },
];
