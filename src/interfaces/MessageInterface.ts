import { MessageLinkInterface } from "./MessageLinkInterface";

export interface MessageInterface {
  content: string;
  link?: MessageLinkInterface;
}