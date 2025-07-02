import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Alert, AlertType } from '../core/components/Alert/Alert';
import { Button } from '../core/components/Button/Button';
import { Card } from '../core/components/Card/Card';
import { CardHeader } from '../core/components/CardHeader/CardHeader';
import { CardDescription } from '../core/components/CardDescription/CardDescription';
import { Input } from '../core/components/Input/Input';

describe('Integration Tests', () => {
  describe('Card with nested components', () => {
    it('should render Card with Header and Description', () => {
      render(
        <Card>
          <CardHeader>Card Title</CardHeader>
          <CardDescription>Card description text</CardDescription>
        </Card>
      );

      expect(screen.getByText('Card Title')).toBeInTheDocument();
      expect(screen.getByText('Card description text')).toBeInTheDocument();
    });

    it('should render Card with Button and handle interactions', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <Card>
          <CardHeader>Interactive Card</CardHeader>
          <Button onClick={handleClick}>Click me</Button>
        </Card>
      );

      const button = screen.getByRole('button', { name: /click me/i });
      await user.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Form-like composition', () => {
    it('should handle a form with Input and Button', async () => {
      const user = userEvent.setup();
      const handleInputChange = vi.fn();
      const handleSubmit = vi.fn();

      render(
        <Card>
          <CardHeader>Sign Up Form</CardHeader>
          <Input
            label="Email"
            placeholder="Enter your email"
            onChange={handleInputChange}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </Card>
      );

      const input = screen.getByLabelText('Email');
      const button = screen.getByRole('button', { name: /submit/i });

      await user.type(input, 'test@example.com');
      expect(handleInputChange).toHaveBeenCalledWith('test@example.com');

      await user.click(button);
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    it('should handle form with validation feedback', () => {
      render(
        <Card>
          <Input
            label="Email"
            error="Please enter a valid email"
            onChange={() => {}}
          />
          <Alert type={AlertType.Error} message="Form has errors" />
        </Card>
      );

      expect(
        screen.getByText('Please enter a valid email')
      ).toBeInTheDocument();
      expect(screen.getByText('Form has errors')).toBeInTheDocument();
    });
  });

  describe('Alert interactions', () => {
    it('should handle dismissible alert', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();

      render(
        <Alert
          type={AlertType.Info}
          message="This is a dismissible alert"
          onClose={handleClose}
        />
      );

      const closeButton = screen.getByText('x');
      await user.click(closeButton);

      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('Complex compositions', () => {
    it('should render a complete dashboard-like layout', () => {
      render(
        <div>
          <Alert type={AlertType.Info} message="Welcome to your dashboard!" />
          <Card>
            <CardHeader>User Profile</CardHeader>
            <CardDescription>Update your profile information</CardDescription>
            <Input label="Full Name" onChange={() => {}} />
            <Input label="Email" onChange={() => {}} />
            <Button onClick={() => {}}>Save Changes</Button>
          </Card>
        </div>
      );

      expect(
        screen.getByText('Welcome to your dashboard!')
      ).toBeInTheDocument();
      expect(screen.getByText('User Profile')).toBeInTheDocument();
      expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
      expect(screen.getByLabelText('Email')).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /save changes/i })
      ).toBeInTheDocument();
    });
  });
});
