import React, { useState } from 'react';
import { TimeRangeSelector } from './components/TimeRangeSelector';
import { MetricsCard } from './components/MetricsCard';
import { AnalyticsChart } from './components/AnalyticsChart';
import { PageAnalyticsTable } from './components/PageAnalyticsTable';
import { TimeRange } from './types/analytics';

// 仮データ - 実際のDBからのデータに置き換える
const mockSchools = [
  { id: '1', name: '第一学校' },
  { id: '2', name: '第二学校' },
  { id: '3', name: '第三学校' },
];

function App() {
  const [selectedSchool, setSelectedSchool] = useState(mockSchools[0].id);
  const [timeRange, setTimeRange] = useState<TimeRange>('daily');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">学校利用状況ダッシュボード</h1>
            <select
              value={selectedSchool}
              onChange={(e) => setSelectedSchool(e.target.value)}
              className="block w-48 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              {mockSchools.map((school) => (
                <option key={school.id} value={school.id}>
                  {school.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <TimeRangeSelector value={timeRange} onChange={setTimeRange} />
        </div>

        {/* メトリクスカード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricsCard
            title="アクティブユーザー"
            value="847"
            change={5.4}
            icon="users"
          />
          <MetricsCard
            title="平均滞在時間"
            value="12分"
            change={-2.1}
            icon="time"
          />
          <MetricsCard
            title="総クリック数"
            value="23,456"
            change={12.3}
            icon="clicks"
          />
          <MetricsCard
            title="総ページビュー"
            value="98,765"
            change={8.7}
            icon="views"
          />
        </div>

        {/* グラフ */}
        <div className="mb-8">
          <AnalyticsChart data={[]} />
        </div>

        {/* ページ分析テーブル */}
        <div>
          <PageAnalyticsTable
            data={[
              {
                path: '/dashboard',
                views: 12345,
                clicks: 4567,
                ctr: 0.37,
                averageTimeSpent: 180,
              },
              {
                path: '/courses',
                views: 9876,
                clicks: 3456,
                ctr: 0.35,
                averageTimeSpent: 240,
              },
              // 実際のデータに置き換える
            ]}
          />
        </div>
      </main>
    </div>
  );
}

export default App;