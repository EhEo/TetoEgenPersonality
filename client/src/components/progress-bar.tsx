interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-600">진행률</span>
        <span className="text-sm font-medium text-primary">{current} / {total}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-500" 
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
