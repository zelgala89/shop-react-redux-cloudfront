import { screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import DummyComponent from '~/components/DummyComponent/DummyComponent';
import { renderWithProviders } from '~/testUtils';

test('Renders test component', () => {
  renderWithProviders(<DummyComponent />);

  expect(screen.getByText('Dummy Component')).toBeInTheDocument();
});
