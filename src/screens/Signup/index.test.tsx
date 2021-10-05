import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import Signup from '.';

describe('Signup component', () => {
  beforeEach(() => render(<Signup />));

  describe('With invalid inputs', () => {
    test('Should show error messages when all fields are empty', async () => {
      userEvent.click(screen.getByRole('button', { name: /Signup:signUp/ }));
      expect((await screen.findAllByText(/FormValidations:required/)).length).toBe(5);
    });

    test('Should show error message if email is invalid', async () => {
      userEvent.type(screen.getByLabelText(/Signup:email/), 'analopez.gmail.com');
      userEvent.click(screen.getByRole('button', { name: /Signup:signUp/ }));
      expect(await screen.findByText(/FormValidations:invalidEmail/)).toBeVisible();
    });

    test('Should show error message if password confimation does not match password', async () => {
      userEvent.type(screen.getByLabelText(/^Signup:password$/), 'password123');
      userEvent.type(screen.getByLabelText(/Signup:passwordConfirmation/), 'password124');
      userEvent.click(screen.getByRole('button', { name: /Signup:signUp/ }));
      expect(await screen.findByText(/FormValidations:confirmPasswordError/)).toBeVisible();
    });
  });

  describe('With valid inputs', () => {
    const url = 'https://books-training-rails.herokuapp.com/api/v1/users';
    const server = setupServer(rest.post(url, (req, res, ctx) => res(ctx.json({ todoOk: true }))));
    const user = {
      firstName: 'Ana',
      lastName: 'Lopez',
      email: 'analopez@gmail.com',
      password: 'analopez3',
      passwordConfirmation: 'analopez3'
    };
    beforeAll(() => server.listen());
    beforeEach(() => {
      userEvent.type(screen.getByLabelText(/Signup:firstName/), user.firstName);
      userEvent.type(screen.getByLabelText(/Signup:lastName/), user.lastName);
      userEvent.type(screen.getByLabelText(/Signup:email/), user.email);
      userEvent.type(screen.getByLabelText(/^Signup:password$/), user.password);
      userEvent.type(screen.getByLabelText(/Signup:passwordConfirmation/), user.passwordConfirmation);
    });
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    test('Should submit form if all fields are valid', async () => {
      userEvent.click(screen.getByRole('button', { name: /Signup:signUp/ }));
      await waitFor(() => expect(screen.queryByText(/Signup:registeredEmailError/)).toBeNull());
    });

    test('Should submit and show error if user is already registered', async () => {
      server.use(
        rest.post(url, (req, res, ctx) =>
          res(ctx.status(422), ctx.json({ errors: { email: 'has already been taken' } }))
        )
      );
      userEvent.click(screen.getByRole('button', { name: /Signup:signUp/ }));
      await waitFor(() => expect(screen.queryByText(/Signup:registeredEmailError/)).toBeVisible());
    });
  });
});
