import { useTranslations } from "next-intl";
import { Accordion } from "@/components/ui/accordion";

export default function Home() {
  const t = useTranslations("IndexPage");
  console.log(t("title"));

  return (
    <div>
      <h1 className="text-4xl mb-4 font-semibold">{t("title")}</h1>
      <p>{t("description")}</p>
      <div></div>
    </div>
  );
}
