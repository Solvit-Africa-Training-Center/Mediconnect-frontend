export type ActivityStatus = "success" | "warning" | "error";

export interface Activity {
  id: number;
  user: string;
  action: string;
  timeAgo: string; // e.g., "5 minutes ago"
  status: ActivityStatus;
}
