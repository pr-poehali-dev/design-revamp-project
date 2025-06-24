import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ScheduleItem {
  time: string;
  subject: string;
  teacher: string;
  room: string;
  type: "lesson" | "break";
}

const scheduleData: ScheduleItem[] = [
  {
    time: "8:00-8:45",
    subject: "Математика",
    teacher: "Иванова А.В.",
    room: "201",
    type: "lesson",
  },
  {
    time: "8:45-9:00",
    subject: "Перемена",
    teacher: "",
    room: "",
    type: "break",
  },
  {
    time: "9:00-9:45",
    subject: "Русский язык",
    teacher: "Петрова М.И.",
    room: "105",
    type: "lesson",
  },
  {
    time: "9:45-10:00",
    subject: "Перемена",
    teacher: "",
    room: "",
    type: "break",
  },
  {
    time: "10:00-10:45",
    subject: "Физика",
    teacher: "Сидоров В.П.",
    room: "301",
    type: "lesson",
  },
  {
    time: "10:45-11:00",
    subject: "Перемена",
    teacher: "",
    room: "",
    type: "break",
  },
  {
    time: "11:00-11:45",
    subject: "История",
    teacher: "Козлова Е.А.",
    room: "208",
    type: "lesson",
  },
];

const ScheduleTable = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  const isCurrentLesson = (timeSlot: string) => {
    const [start] = timeSlot.split("-");
    const [startHour, startMinute] = start.split(":").map(Number);
    const lessonStart = startHour * 60 + startMinute;
    const now = currentHour * 60 + currentMinute;

    return now >= lessonStart && now <= lessonStart + 45;
  };

  return (
    <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50/30 rounded-t-lg">
        <CardTitle className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Icon name="Calendar" className="text-white" size={18} />
          </div>
          <span className="text-slate-900 font-bold">
            Расписание на сегодня
          </span>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-slate-200/50">
              <TableHead className="font-semibold text-slate-700">
                Время
              </TableHead>
              <TableHead className="font-semibold text-slate-700">
                Предмет
              </TableHead>
              <TableHead className="font-semibold text-slate-700">
                Преподаватель
              </TableHead>
              <TableHead className="font-semibold text-slate-700">
                Кабинет
              </TableHead>
              <TableHead className="font-semibold text-slate-700">
                Статус
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scheduleData.map((item, index) => (
              <TableRow
                key={index}
                className={`${item.type === "break" ? "bg-slate-50/30" : "hover:bg-slate-50/50"} ${
                  isCurrentLesson(item.time)
                    ? "bg-gradient-to-r from-blue-50 to-purple-50/30 border-l-4 border-gradient-to-b from-blue-500 to-purple-600 shadow-sm"
                    : ""
                } transition-colors border-slate-200/30`}
              >
                <TableCell className="font-medium text-slate-900">
                  {item.time}
                </TableCell>
                <TableCell>
                  {item.type === "break" ? (
                    <span className="text-slate-500 italic">
                      {item.subject}
                    </span>
                  ) : (
                    <span className="font-semibold text-slate-900">
                      {item.subject}
                    </span>
                  )}
                </TableCell>
                <TableCell className="text-slate-700">{item.teacher}</TableCell>
                <TableCell className="text-slate-700">{item.room}</TableCell>
                <TableCell>
                  {item.type === "lesson" && (
                    <Badge
                      variant={
                        isCurrentLesson(item.time) ? "default" : "secondary"
                      }
                      className={
                        isCurrentLesson(item.time)
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-md"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }
                    >
                      {isCurrentLesson(item.time) ? "Сейчас" : "Урок"}
                    </Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ScheduleTable;
