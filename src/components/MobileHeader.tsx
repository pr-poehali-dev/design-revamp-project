import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface MobileHeaderProps {
  onSidebarToggle: () => void;
}

const MobileHeader = ({ onSidebarToggle }: MobileHeaderProps) => {
  return (
    <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200/50 sticky top-0 z-30">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onSidebarToggle}
            className="p-2"
          >
            <Icon name="Menu" size={24} />
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Icon name="GraduationCap" className="text-white" size={18} />
            </div>
            <span className="font-bold text-slate-900">Дневник</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="p-2">
            <Icon name="Search" size={20} />
          </Button>
          <Button variant="ghost" size="sm" className="p-2 relative">
            <Icon name="Bell" size={20} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
