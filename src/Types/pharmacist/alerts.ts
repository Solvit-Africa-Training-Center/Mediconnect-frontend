export type AlertType = "low-stock" | "system" | "performance";

export interface Alert {
  id: number;
  type: AlertType;
  message: string; // short title (e.g. "Low Stock Alert")
  details?: string; // extra info (e.g. "Paracetamol 500mg running low")
}
