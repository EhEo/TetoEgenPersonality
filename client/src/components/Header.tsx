import { Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; name: string }[] = [
    { code: 'ko', name: t('language.korean') },
    { code: 'en', name: t('language.english') },
    { code: 'zh', name: t('language.chinese') },
    { code: 'vi', name: t('language.vietnamese') }
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="text-center flex-1">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {t('app.title')}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              {t('app.subtitle')}
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-9 w-9 px-0">
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">Select language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={language === lang.code ? "bg-blue-50 dark:bg-blue-900" : ""}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="h-9 w-9 px-0"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}