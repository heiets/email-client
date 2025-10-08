import { SIDEBAR_ITEMS } from "./constants";
import { Folder } from "../../types";

interface SidebarProps {
  selectedFolder: Folder;
  setSelectedFolder: (folder: Folder) => void;
}

export const Sidebar = ({
  selectedFolder,
  setSelectedFolder,
}: SidebarProps) => {
  return (
    <div className="flex flex-col space-y-3 py-5 px-4  bg-gray-900 text-white">
      {SIDEBAR_ITEMS.map((item) => {
        const isSelected = selectedFolder === item.type;
        return (
          <div
            key={item.name}
            onClick={() => setSelectedFolder(item.type)}
            className={`text-lg font-medium flex items-center gap-2 cursor-pointer py-2 px-3 rounded-md ${isSelected ? "bg-blue-500" : "hover:bg-gray-800"}`}
          >
            <div className="text-2xl">{item.icon}</div>
            <div>{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};
