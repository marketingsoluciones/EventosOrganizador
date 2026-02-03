import { GetStaticPropsContext } from 'next';

export async function getMessagesForLocale(locale: string) {
  return (await import(`../messages/${locale}.json`)).default;
}

export async function getI18nProps(context: GetStaticPropsContext) {
  const locale = context.locale ?? 'es';
  return {
    props: {
      messages: await getMessagesForLocale(locale),
    },
  };
}
