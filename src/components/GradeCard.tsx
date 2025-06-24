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
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">{subject}</CardTitle>
          <div className="flex items-center space-x-1">
            {getTrendIcon()}
            <span className="text-2xl font-bold text-primary">
              {average.toFixed(1)}
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-600">{teacher}</p>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2 mb-3">
          {grades.map((grade, index) => (
            <Badge
              key={index}
              className={getGradeColor(grade)}
              variant="secondary"
            >
              {grade}
            </Badge>
          ))}
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all"
            style={{ width: `${(average / 5) * 100}%` }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default GradeCard;
