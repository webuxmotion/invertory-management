import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode } from '@/app/state';

export default function useDarkMode() {
    const dispatch = useAppDispatch();
    const { isDarkMode } = useAppSelector((state) => state.global);

    const toggleDarkMode = () => {
        dispatch(setIsDarkMode(!isDarkMode));
    }
  
    return {
        isDarkMode,
        toggleDarkMode
    };
  }