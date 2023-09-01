import { forgotPasswordSchema } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { useForgotPasswordMutation } from '@/graphql/generated';
import { cn } from '@/lib/utils';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button, buttonVariants } from '../ui/button';
import { useToast } from '../../hooks/use-toast';
import { Flex } from '../ui/flex';

export const ForgotPasswordForm = () => {
  const { toast } = useToast();
  const forgotPassowrdForm = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const [forgotPasswordMutation, { loading }] = useForgotPasswordMutation();

  const handleSubmitMutation = async (values: z.infer<typeof forgotPasswordSchema>) => {
    const { data, errors } = await forgotPasswordMutation({
      variables: {
        input: values,
      },
    });

    if (errors) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: errors[0].message,
      });
    }

    if (data?.forgotPassword?.success) {
      toast({
        title: `An email has been sent to ${values.email}.`,
        description: "You'll receive an email if the provided email exists. Check your inbox!",
      });
    }
    forgotPassowrdForm.reset();
  };

  return (
    <Form {...forgotPassowrdForm}>
      <form
        className="space-y-4 md:space-y-4 mt-2 mb-4"
        onSubmit={forgotPassowrdForm.handleSubmit(handleSubmitMutation)}
      >
        <FormField
          control={forgotPassowrdForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="jon@mail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full !mt-6"
          type="submit"
          isLoading={loading}
          loadingText="Sending Reset link"
          disabled={loading}
        >
          Send Reset Link
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
