import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import GradeCard from "@/components/GradeCard";
import ScheduleTable from "@/components/ScheduleTable";
import StatsOverview from "@/components/StatsOverview";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      <MobileHeader onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className="lg:ml-80 min-h-screen">
        <main className="px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent mb-2">
                  Добро пожаловать, Иван! 👋
                </h1>
                <p className="text-slate-600 text-lg">
                  Обзор учебной деятельности на сегодня
                </p>
              </div>
              <div className="hidden lg:flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm text-slate-600">Сегодня</p>
                  <p className="font-semibold text-slate-900">
                    {new Date().toLocaleDateString("ru-RU", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <StatsOverview />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <div className="xl:col-span-2">
                <ScheduleTable />
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Последние оценки
                  </h3>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Все оценки →
                  </button>
                </div>
                <div className="space-y-4">
                  {subjects.slice(0, 3).map((subject, index) => (
                    <GradeCard key={index} {...subject} />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Все предметы
                </h3>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors">
                    Фильтр
                  </button>
                  <button className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-full hover:bg-slate-200 transition-colors">
                    Сортировка
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subjects.map((subject, index) => (
                  <GradeCard key={index} {...subject} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
