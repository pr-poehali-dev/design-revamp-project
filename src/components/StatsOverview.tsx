import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "stable";
  icon: string;
  color: string;
}

const StatCard = ({
  title,
  value,
  change,
  trend,
  icon,
  color,
}: StatCardProps) => {
  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-green-600";
      case "down":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return "TrendingUp";
      case "down":
        return "TrendingDown";
      default:
        return "Minus";
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white/70 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-600">{title}</p>
            <p className="text-3xl font-bold text-slate-900">{value}</p>
            <div className={`flex items-center space-x-1 ${getTrendColor()}`}>
              <Icon name={getTrendIcon() as any} size={16} />
              <span className="text-sm font-medium">{change}</span>
            </div>
          </div>
          <div
            className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon name={icon as any} className="text-white" size={26} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const StatsOverview = () => {
  const stats = [
    {
      title: "Средний балл",
      value: "4.2",
      change: "+0.3 за месяц",
      trend: "up" as const,
      icon: "Trophy",
      color: "bg-primary",
    },
    {
      title: "Всего оценок",
      value: "47",
      change: "+12 за неделю",
      trend: "up" as const,
      icon: "BookOpen",
      color: "bg-blue-500",
    },
    {
      title: "Пропуски",
      value: "3",
      change: "+1 за неделю",
      trend: "down" as const,
      icon: "AlertTriangle",
      color: "bg-orange-500",
    },
    {
      title: "Домашние задания",
      value: "12",
      change: "активных",
      trend: "stable" as const,
      icon: "CheckSquare",
      color: "bg-green-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsOverview;
