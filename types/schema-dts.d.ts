declare module "schema-dts" {
  export type WebSite = {
    "@type": "WebSite";
    name: string;
    url: string;
    description?: string;
  };

  export type WithContext<T> = T & {
    "@context": "https://schema.org";
  };
}
