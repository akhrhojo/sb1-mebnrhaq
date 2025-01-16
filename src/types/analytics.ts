export interface School {
  id: string;
  name: string;
}

export interface AnalyticsData {
  date: string;
  schoolId: string;
  loginCount: number;
  logoutCount: number;
  pageViews: number;
  clicks: number;
  averageTimeSpent: number; // 秒単位
}

export type TimeRange = 'daily' | 'weekly' | 'monthly';

export interface PageAnalytics {
  path: string;
  views: number;
  clicks: number;
  ctr: number;
  averageTimeSpent: number;
}