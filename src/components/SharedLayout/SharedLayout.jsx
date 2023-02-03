import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../Loader';
import { AppBar } from 'components/AppBar';
import { Box } from 'components/Box';
import { useAuth } from 'hooks';

export const SharedLayout = () => {
  const { isLoading } = useAuth();

  return (
    <Box ml="auto" mr="auto">
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {isLoading && <Loader />}
    </Box>
  );
};
