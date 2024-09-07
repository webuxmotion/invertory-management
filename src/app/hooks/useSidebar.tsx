import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from '@/app/state';

export default function useSidebar() {
    const dispatch = useAppDispatch();
    const { 
        isSidebarCollapsed,
    } = useAppSelector((state) => state.global);

    const toggleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
    }
  
    return {
        isSidebarCollapsed,
        toggleSidebar
    };
  }