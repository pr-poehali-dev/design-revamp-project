import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const navigationItems = [
    {
      id: "dashboard",
      label: "Главная",
      icon: "Home",
      badge: null,
    },
    {
      id: "grades",
      label: "Оценки",
      icon: "BookOpen",
      badge: "12",
    },
    {
      id: "schedule",
      label: "Расписание",
      icon: "Calendar",
      badge: null,
    },
    {
      id: "homework",
      label: "Домашние задания",
      icon: "CheckSquare",
      badge: "3",
    },
    {
      id: "attendance",
      label: "Посещаемость",
      icon: "Clock",
      badge: null,
    },
    {
      id: "messages",
      label: "Сообщения",
      icon: "MessageCircle",
      badge: "2",
    },
  ];

  const quickStats = [
    { label: "Средний балл", value: "4.2", color: "text-green-600" },
    { label: "Активных ДЗ", value: "3", color: "text-orange-600" },
    { label: "До экзаменов", value: "45 дней", color: "text-blue-600" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed top-0 left-0 h-full w-80 bg-white/95 backdrop-blur-xl border-r border-slate-200/50 
        shadow-2xl transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:shadow-none
      `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-slate-200/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Icon name="GraduationCap" className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900">Дневник</h2>
                  <p className="text-sm text-slate-600">11А класс</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggle}
                className="lg:hidden"
              >
                <Icon name="X" size={20} />
              </Button>
            </div>
          </div>

          {/* User Profile */}
          <div className="p-6 border-b border-slate-200/50">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-semibold">ИП</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Иван Петров</h3>
                <p className="text-sm text-slate-600">Ученик</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="p-6 border-b border-slate-200/50">
            <h4 className="text-sm font-semibold text-slate-700 mb-4">
              Быстрая статистика
            </h4>
            <div className="space-y-3">
              {quickStats.map((stat, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">{stat.label}</span>
                  <span className={`text-sm font-semibold ${stat.color}`}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeItem === item.id ? "default" : "ghost"}
                  className={`w-full justify-start h-12 ${
                    activeItem === item.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "text-slate-700 hover:bg-slate-100/50"
                  }`}
                  onClick={() => setActiveItem(item.id)}
                >
                  <Icon name={item.icon as any} size={20} className="mr-3" />
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge && (
                    <Badge
                      variant="secondary"
                      className={`ml-2 ${
                        activeItem === item.id
                          ? "bg-white/20 text-white"
                          : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {item.badge}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>
          </nav>

          {/* Settings */}
          <div className="p-6 border-t border-slate-200/50">
            <Button
              variant="ghost"
              className="w-full justify-start h-12 text-slate-700 hover:bg-slate-100/50"
            >
              <Icon name="Settings" size={20} className="mr-3" />
              Настройки
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
