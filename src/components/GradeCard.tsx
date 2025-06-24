import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface GradeCardProps {
  subject: string;
  grades: number[];
  average: number;
  trend: "up" | "down" | "stable";
  teacher: string;
}

const GradeCard = ({
  subject,
  grades,
  average,
  trend,
  teacher,
}: GradeCardProps) => {
  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return <Icon name="TrendingUp" className="text-green-500" size={16} />;
      case "down":
        return <Icon name="TrendingDown" className="text-red-500" size={16} />;
      default:
        return <Icon name="Minus" className="text-gray-500" size={16} />;
    }
  };

  const getGradeColor = (grade: number) => {
    if (grade >= 5) return "bg-green-100 text-green-800";
    if (grade >= 4) return "bg-blue-100 text-blue-800";
    if (grade >= 3) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white/70 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              {subject}
            </CardTitle>
            <p className="text-sm text-slate-600">{teacher}</p>
          </div>
          <div className="flex items-center space-x-2 bg-slate-50/50 rounded-full px-3 py-2">
            {getTrendIcon()}
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {average.toFixed(1)}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {grades.map((grade, index) => (
            <Badge
              key={index}
              className={`${getGradeColor(grade)} hover:scale-110 transition-transform cursor-pointer font-semibold`}
              variant="secondary"
            >
              {grade}
            </Badge>
          ))}
        </div>

        <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-700 shadow-sm"
            style={{ width: `${(average / 5) * 100}%` }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default GradeCard;
