import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../page/Home';
import { Layout } from '../Layout/Layout';

export const RouterMain = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
