import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from '../Layout/Layout';
import { lazy } from 'react';

const GitHubRepo = lazy(() => import('../page/GitHubRepo'));
const Home = lazy(() => import('../page/Home'));

export const RouterMain = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repo" element={<GitHubRepo />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
