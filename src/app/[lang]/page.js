import Home from 'src/containers/home';

export default async function Page({ params: { lang } }) {
  return <Home lang={lang} />;
}
