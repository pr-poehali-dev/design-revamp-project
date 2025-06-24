import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Icon name="GraduationCap" className="text-primary" size={32} />
              <h1 className="text-xl font-bold text-gray-900">
                Электронный дневник
              </h1>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-primary"
            >
              <Icon name="Home" size={18} />
              Главная
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-primary"
            >
              <Icon name="BookOpen" size={18} />
              Оценки
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-primary"
            >
              <Icon name="Calendar" size={18} />
              Расписание
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-primary"
            >
              <Icon name="BarChart3" size={18} />
              Статистика
            </Button>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Icon name="Bell" size={16} />
              Уведомления
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">И</span>
              </div>
              <span className="text-sm font-medium text-gray-700">
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
