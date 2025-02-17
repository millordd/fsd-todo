import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import { router } from 'pages';
import { queryClient } from 'shared/utils';

import { buildProvidersTree } from './build-providers-tree';
import { ConfigurationProvider } from './configuration-provider';
import { NotInternetProvider } from './not-internet-provider';

export const Providers = buildProvidersTree([
  [QueryClientProvider, { client: queryClient }],
  [ConfigurationProvider, { switcher: false }],
  [NotInternetProvider],
  [RouterProvider, { router }],
]);
