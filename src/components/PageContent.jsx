"use client";

import { useApp } from "@/contexts/AppContext";
import { getComponentKey } from "@/lib/components/registry";
import dynamic from "next/dynamic";

// Dynamic component map for section types - swatigupta* only
const SECTION_MAP = {
  swatiguptaheader: dynamic(() => import("@/components/sections/swatiguptaheader")),
  swatiguptahero: dynamic(() => import("@/components/sections/swatiguptahero")),
  swatiguptaabout: dynamic(() => import("@/components/sections/swatiguptaabout")),
  swatiguptaservices: dynamic(() => import("@/components/sections/swatiguptaservices")),
  swatiguptatestimonials: dynamic(() => import("@/components/sections/swatiguptatestimonials")),
  swatiguptaappointment: dynamic(() => import("@/components/sections/swatiguptaappointment")),
  swatiguptablog: dynamic(() => import("@/components/sections/swatiguptablog")),
  swatiguptacontact: dynamic(() => import("@/components/sections/swatiguptacontact")),
  swatiguptafooter: dynamic(() => import("@/components/sections/swatiguptafooter")),
  swatiguptalogoslider: dynamic(() => import("@/components/sections/swatiguptalogoslider")),
};

export default function PageContent({ page, sections, theme, config }) {
  // Use the app context to get theme values
  const { theme: contextTheme } = useApp();

  // Merge provided theme with context theme, with context taking precedence
  const themeToUse = { ...theme, ...(contextTheme || {}) };

  return (
    <main>
      <h1 className="sr-only">{page.title}</h1>
      {sections.map((section, idx) => {
        const DynamicSection = SECTION_MAP[section.type];

        if (!DynamicSection) {
          console.warn(`No component found for section type: ${section.type}`);
          return null;
        }

        return (
          <section key={section.id || `${section.type}-${idx}`} className="section-wrapper">
            <DynamicSection
              content={section.content}
              items={section.items}
              theme={themeToUse}
              config={config}
            />
          </section>
        );
      })}
    </main>
  );
}
