import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';

export default function Home() {
  return (
    <>
      <h1 className="title">
        Go to <Link href="/about">About</Link>
        {/* Go to <a href="/about">About</a> */}
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.js</code>
      </p>
    </>
  )
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  );
};
