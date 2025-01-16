import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { AnalyticsData } from '../types/analytics';

interface AnalyticsChartProps {
  data: AnalyticsData[];
}

export function AnalyticsChart({ data }: AnalyticsChartProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4">利用状況の推移</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="loginCount"
              name="ログイン数"
              stroke="#2563eb"
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="pageViews"
              name="ページビュー"
              stroke="#16a34a"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="averageTimeSpent"
              name="平均滞在時間（分）"
              stroke="#dc2626"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}