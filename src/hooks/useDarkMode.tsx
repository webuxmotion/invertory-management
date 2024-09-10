import { useAppDispatch, useAppSelector } from "@/state/redux";
import { setIsDarkMode } from '@/state';

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