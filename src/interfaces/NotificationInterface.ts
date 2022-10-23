import { NotificationTypeEnum } from "@/enums/NotificationTypeEnum";
import { MessageInterface } from "./MessageInterface";
import { UserInterface } from "./UserInterface";

export interface NotificationInterface {
  id: number;
  type: NotificationTypeEnum;
  actor: UserInterface;
  message: MessageInterface;
  time: string;
  isRead: boolean;
}