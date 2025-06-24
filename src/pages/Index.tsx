import Header from "@/components/Header";
import GradeCard from "@/components/GradeCard";
import ScheduleTable from "@/components/ScheduleTable";
import StatsOverview from "@/components/StatsOverview";

const Index = () => {
  const subjects = [
    {
      subject: "Математика",
      grades: [5, 4, 5, 3, 4, 5],
      average: 4.3,
      trend: "up" as const,
      teacher: "Иванова А.В.",
    },
    {
      subject: "Русский язык",
      grades: [4, 4, 5, 4, 3, 4],
      average: 4.0,
      trend: "stable" as const,
      teacher: "Петрова М.И.",
    },
    {
      subject: "Физика",
      grades: [5, 5, 4, 5, 5],
      average: 4.8,
      trend: "up" as const,
      teacher: "Сидоров В.П.",
    },
    {
      subject: "История",
      grades: [3, 4, 3, 4, 3],
      average: 3.4,
      trend: "down" as const,
      teacher: "Козлова Е.А.",
    },
    {
      subject: "Биология",
      grades: [4, 5, 4, 4, 5],
      average: 4.4,
      trend: "up" as const,
      teacher: "Морозова О.С.",
    },
    {
      subject: "Английский язык",
      grades: [5, 5, 5, 4, 5],
      average: 4.8,
      trend: "stable" as const,
      teacher: "Смирнова Л.К.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Добро пожаловать, Иван!
          </h2>
          <p className="text-gray-600">Вот обзор вашей учебной деятельности</p>
        </div>

        <div className="space-y-8">
          <StatsOverview />

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2">
              <ScheduleTable />
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Последние оценки
              </h3>
              <div className="space-y-4">
                {subjects.slice(0, 3).map((subject, index) => (
                  <GradeCard key={index} {...subject} />
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Все предметы
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((subject, index) => (
                <GradeCard key={index} {...subject} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
