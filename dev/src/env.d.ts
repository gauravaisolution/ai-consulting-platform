/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_NAME: string;
  readonly PUBLIC_SITE_TAGLINE: string;
  readonly PUBLIC_SITE_DESCRIPTION: string;
  readonly PUBLIC_SITE_EMAIL: string;
  readonly PUBLIC_TALLY_FORM_ID: string;
  readonly PUBLIC_CALCOM_LINK: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
