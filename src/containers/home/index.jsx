import LocaleSwitcher from 'src/components/TopBar/components/LocaleSwitcher';
import { getDictionary } from 'src/get-dictionary';

export default async function Home({ lang }) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="flex flex-col min-h-screen">
      <LocaleSwitcher />

      <div>{dictionary['server-component'].welcome}</div>
    </main>
  );
}
