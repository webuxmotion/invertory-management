import { useAppDispatch, useAppSelector } from "@/state/redux";
import { setIsSidebarCollapsed } from '@/state';

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