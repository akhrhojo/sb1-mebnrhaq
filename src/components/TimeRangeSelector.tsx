import React from 'react';
import { TimeRange } from '../types/analytics';

interface TimeRangeSelectorProps {
  value: TimeRange;
  onChange: (range: TimeRange) => void;
}

export function TimeRangeSelector({ value, onChange }: TimeRangeSelectorProps) {
  return (
    <div className="flex gap-2 p-2 bg-white rounded-lg shadow">
      <button
        onClick={() => onChange('daily')}
        className={`px-4 py-2 rounded ${
          value === 'daily'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 hover:bg-gray-200'
        }`}
      >
        日別
      </button>
      <button
        onClick={() => onChange('weekly')}
        className={`px-4 py-2 rounded ${
          value === 'weekly'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 hover:bg-gray-200'
        }`}
      >
        週別
      </button>
      <button
        onClick={() => onChange('monthly')}
        className={`px-4 py-2 rounded ${
          value === 'monthly'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 hover:bg-gray-200'
        }`}
      >
        月別
      </button>
    </div>
  );
}