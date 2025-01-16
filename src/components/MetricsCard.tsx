import React from 'react';
import { Clock, Users, MousePointer, Eye } from 'lucide-react';

interface MetricsCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: 'users' | 'time' | 'clicks' | 'views';
}

const icons = {
  users: Users,
  time: Clock,
  clicks: MousePointer,
  views: Eye,
};

export function MetricsCard({ title, value, change, icon }: MetricsCardProps) {
  const Icon = icons[icon];
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
      </div>
      {change !== undefined && (
        <div className="mt-4">
          <span className={`text-sm ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {change >= 0 ? '+' : ''}{change}%
          </span>
          <span className="text-sm text-gray-500 ml-2">vs 前期間</span>
        </div>
      )}
    </div>
  );
}