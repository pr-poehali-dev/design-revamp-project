import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                Электронный дневник
              </h1>
            </div>
          </div>

          <nav className="hidden md:flex space-x-2">
            <Button
              variant="ghost"
              className="text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 transition-all duration-200"
            >
              <Icon name="Home" size={18} className="mr-2" />
              Главная
            </Button>
            <Button
              variant="ghost"
              className="text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 transition-all duration-200"
            >
              <Icon name="BookOpen" size={18} className="mr-2" />
              Оценки
            </Button>
            <Button
              variant="ghost"
              className="text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 transition-all duration-200"
            >
              <Icon name="Calendar" size={18} className="mr-2" />
              Расписание
            </Button>
            <Button
              variant="ghost"
              className="text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 transition-all duration-200"
            >
              <Icon name="BarChart3" size={18} className="mr-2" />
              Статистика
            </Button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="hover:bg-slate-50 border-slate-200"
            >
              <Icon name="Bell" size={16} className="mr-2" />
              Уведомления
            </Button>
            <div className="flex items-center space-x-3 bg-slate-50/50 rounded-full px-3 py-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white text-sm font-medium">И</span>
              </div>
              <span className="text-sm font-medium text-slate-700">
                Иван Петров
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
