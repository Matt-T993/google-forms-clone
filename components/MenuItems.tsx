import { fetchMenuItems } from "@/lib/data";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import docs from "@/public/icons/docs.png";
import forms from "@/public/icons/forms.png";
import sheets from "@/public/icons/sheets.png";
import slides from "@/public/icons/slides.png";

const iconMap = {
  Docs: docs,
  Forms: forms,
  Sheets: sheets,
  Slides: slides,
};

interface PageItem {
  id: string;
  pageUrl: string;
  localizeInfos: {
    menuTitle: string;
  };
}

const MenuItems = async () => {
  const menuItems = await fetchMenuItems("sidebar");

  if (!Array.isArray(menuItems.pages)) {
    console.error("Expected menuItems.pages to be an array");
    return null;
  }

  return (
    <div className="flex flex-col border-y py-2">
      {menuItems.pages.map((page) => (
        <Button
          key={page.id}
          asChild
          variant={"ghost"}
          className="justify-start px-6 w-[95%] gap-x-3 rounded-r-full"
        >
          <Link href={`/dashboard/${page.pageUrl}`}>
            <a className="flex items-center gap-x-2">
              <Image
                src={iconMap[page.localizeInfos.menuTitle as keyof typeof iconMap]}
                alt={page.localizeInfos.menuTitle}
                width={15}
                height={15}
              />
              <p>{page.localizeInfos.menuTitle}</p>
            </a>
          </Link>
        </Button>
      ))}
    </div>
  );
}
export default MenuItems;