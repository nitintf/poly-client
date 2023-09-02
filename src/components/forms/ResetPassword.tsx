import { resetPasswordSchema } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Link, useSearchParams } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { useResetPasswordMutation } from '@/graphql/generated';
import { cn } from '@/lib/utils/cn';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button, buttonVariants } from '../ui/button';
import { useToast } from '../../hooks/use-toast';
import { Flex } from '../ui/flex';
import { ToastAction } from '../ui/toast';

export const ResetPasswordForm = () => {
  const [searchParameters] = useSearchParams();
  const { toast } = useToast();
  const resetPassowrdForm = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      confirmPassword: '',
      password: '',
    },
  });

  const [resetPasswordMutation, { loading }] = useResetPasswordMutation();

  const handleSubmitMutation = async (values: z.infer<typeof resetPasswordSchema>) => {
    const { data, errors } = await resetPasswordMutation({
      variables: {
        input: {
          password: values.password,
          token: searchParameters.get('token') ?? '',
        },
      },
    });

    if (errors) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: errors[0].message,
      });
    }

    if (data?.resetPassword?.success) {
      toast({
        title: `🎉 Password Successfully Reset!`,
        description:
          "You're all set to leap back into action! Head on over to the login screen and let the adventures continue!",
        action: (
          <ToastAction altText="Login">
            <Link to={ROUTES.LOGIN}>Go to Login</Link>
          </ToastAction>
        ),
      });
    }
    resetPassowrdForm.reset();
  };

  return (
    <Form {...resetPassowrdForm}>
      <form
        className="space-y-4 md:space-y-4 mt-2 mb-4"
        onSubmit={resetPassowrdForm.handleSubmit(handleSubmitMutation)}
      >
        <FormField
          control={resetPassowrdForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="jon@mail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={resetPassowrdForm.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="jon@mail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full !mt-6"
          type="submit"
          isLoading={loading}
          loadingText="Reseting your password"
          disabled={loading}
        >
          Reset Password
        </Button>
        <Flex justify="center">
          <Link
            to={ROUTES.LOGIN}
            className={buttonVariants({
              variant: 'link',
              className: cn({ 'disabled:pointer-events-none disabled:opacity-5': loading }),
            })}
          >
            Go back to login
          </Link>
        </Flex>
      </form>
    </Form>
  );
};
