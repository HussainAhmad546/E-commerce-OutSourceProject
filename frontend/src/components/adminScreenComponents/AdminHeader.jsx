import { AlignJustify, LogOut } from "lucide-react";
import { Button } from "../smallCommonComponents/ButtonVariants";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/authScreenSlice";
// import LanguageSwitcher from "../common/Languageswitcher";
import { useTranslation } from "react-i18next";

function AdminHeader({ setOpen }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function handleLogout() {
    dispatch(logoutUser());
  }

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
      <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
        <AlignJustify />
        <span className="sr-only">{t('toggleMenu')}</span>
      </Button>
      {/* <LanguageSwitcher /> */}
      <div className="flex flex-1 justify-end">
        <Button
          onClick={handleLogout}
          className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow"
        >
          <LogOut />
          {t('logout')} {/* Use the translation key for logout */}
        </Button>
      </div>
    </header>
  );
}

export default AdminHeader;
