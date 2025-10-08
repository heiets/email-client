import { Folder } from "../../types";

export const SIDEBAR_ITEMS: { name: string; type: Folder; icon: string }[] = [
  {
    name: "Inbox",
    type: "inbox",
    icon: "💌",
  },
  {
    name: "Read",
    type: "read",
    icon: "📨",
  },
  {
    name: "Deleted",
    type: "deleted",
    icon: "🗑️",
  },
];
