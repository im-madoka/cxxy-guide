import { DocsLayout, DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";

const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  links: [],
  sidebar: {
    tabs: {
      transform(option, node) {
        const meta = source.getNodeMeta(node);
        if (!meta) return option;
        return {
          ...option,
          // icon: <Icon icon={meta.data.icon} />,
        };
      },
    },
  },
};

export default function Layout({ children }: LayoutProps<"/docs">) {
  return <DocsLayout {...docsOptions}>{children}</DocsLayout>;
}
