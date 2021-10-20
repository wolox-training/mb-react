import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { QueryClient, QueryClientProvider } from 'react-query';

import Login from '.';

const queryClient = new QueryClient();

describe('Login component', () => {
  beforeEach(() =>
    render(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    )
  );

  describe('With invalid inputs', () => {
    test('Should show error messages when all fields are empty', async () => {
      userEvent.click(screen.getByRole('button', { name: /Login:login/ }));
      expect((await screen.findAllByText(/FormValidations:required/)).length).toBe(2);
    });

    test('Should show error message if email is invalid', async () => {
      userEvent.type(screen.getByLabelText(/Login:email/), 'analopez.gmail.com');
      userEvent.click(screen.getByRole('button', { name: /Login:login/ }));
      expect(await screen.findByText(/FormValidations:invalidEmail/)).toBeVisible();
    });
  });

  describe('With valid inputs', () => {
    const url = 'https://books-training-rails.herokuapp.com/api/v1/users/sign_in';
    const server = setupServer(
      rest.post(url, (req, res, ctx) => res(ctx.status(200), ctx.json({ data: { ok: true } })))
    );
    const user = {
      email: 'analopez@gmail.com',
      password: 'analopez3'
    };
    beforeAll(() => server.listen());
    beforeEach(() => {
      userEvent.type(screen.getByLabelText(/Login:email/), user.email);
      userEvent.type(screen.getByLabelText(/Login:password/), user.password);
    });
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    test('Should submit form', async () => {
      userEvent.click(screen.getByRole('button', { name: /Login:login/ }));
      await waitFor(() => expect(screen.queryByText(/Login:credentialsError/)).not.toBeInTheDocument());
    });

    test('Should submit and show error if credentials are invalid', async () => {
      server.use(
        rest.post(url, (req, res, ctx) =>
          res(ctx.status(401), ctx.json({ data: { errors: 'Invalid login credentials. Please try again.' } }))
        )
      );
      userEvent.click(screen.getByRole('button', { name: /Login:login/ }));
      await waitFor(() => expect(screen.getByText(/Login:credentialsError/)).toBeVisible());
    });
  });
});
