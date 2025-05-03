import ContentMarkdown from "@/components/general/content-markdown";
import { H2Element, TitleElement } from "@/components/ui/h2-element";

import { getAllDocumentByTitle } from "@/data/doc-api";
import { DownloadIcon } from "lucide-react";

export default async function PrivacyPage() {
  const policy = await getAllDocumentByTitle(
    "СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ"
  );
  const fileLink = policy?.document?.file?.node?.link || "";

  return (
    <div className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-28">
          <H2Element text="Документы" />
          <TitleElement
            text="СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ"
            className="mt-2"
          />
          <ContentMarkdown content={policy?.document?.content} />
          {fileLink && (
            <div className="mt-4 text-accent-600">
              <a target="_blank" href={fileLink}>
                Скачать фаил <DownloadIcon size={16} className="inline ml-2" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
