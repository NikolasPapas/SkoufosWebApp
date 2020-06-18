import { NotificationLevel } from "../common/types/notification-level";

export class UiNotification {
    level: NotificationLevel;
    messages: string[];
    active: boolean;
}