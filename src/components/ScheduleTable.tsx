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
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Icon name="Calendar" className="text-primary" />
          <span>Расписание на сегодня</span>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Время</TableHead>
              <TableHead>Предмет</TableHead>
              <TableHead>Преподаватель</TableHead>
              <TableHead>Кабинет</TableHead>
              <TableHead>Статус</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scheduleData.map((item, index) => (
              <TableRow
                key={index}
                className={`${item.type === "break" ? "bg-gray-50" : ""} ${
                  isCurrentLesson(item.time)
                    ? "bg-primary/10 border-l-4 border-primary"
                    : ""
                }`}
              >
                <TableCell className="font-medium">{item.time}</TableCell>
                <TableCell>
                  {item.type === "break" ? (
                    <span className="text-gray-500 italic">{item.subject}</span>
                  ) : (
                    <span className="font-medium">{item.subject}</span>
                  )}
                </TableCell>
                <TableCell>{item.teacher}</TableCell>
                <TableCell>{item.room}</TableCell>
                <TableCell>
                  {item.type === "lesson" && (
                    <Badge
                      variant={
                        isCurrentLesson(item.time) ? "default" : "secondary"
                      }
                      className={isCurrentLesson(item.time) ? "bg-primary" : ""}
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
