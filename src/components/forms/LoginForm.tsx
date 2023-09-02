import { loginFormSchema } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useLoginMutation } from '@/graphql/generated';
import { useUser } from '@/store';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button, buttonVariants } from '../ui/button';
import { Separator } from '../ui/separator';
import { useToast } from '../../hooks/use-toast';
import { SocialAuth } from '../atoms/SocialAuth';
import { Flex } from '../ui/flex';
import { Checkbox } from '../ui/checkbox';

export const LoginForm = () => {
  const { toast } = useToast();
  const { setToken } = useUser();
  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [rememberMe, setRememberMe] = useState(false);

  const [loginMutation, { loading: loginLoading }] = useLoginMutation();

  const handleSubmitLoginMutation = async (values: z.infer<typeof loginFormSchema>) => {
    const { data, errors } = await loginMutation({
      variables: { loginInput: { ...values, rememberMe } },
    });
    if (errors) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: errors[0].message,
      });
    }

    if (data) {
      setToken(data.login.token);
    }
  };

  return (
    <Form {...loginForm}>
      <form
        className="space-y-4 md:space-y-4 mt-2 mb-4"
        onSubmit={loginForm.handleSubmit(handleSubmitLoginMutation)}
      >
        <FormField
          control={loginForm.control}
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
        <FormField
          control={loginForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your password" type="password" {...field} />
              </FormControl>
              <FormMessage />
              <Flex align="center" justify="between" className="text-sm !mt-0">
                <Flex align="center" className="gap-2">
                  <Checkbox
                    id="remberMe"
                    checked={rememberMe}
                    onCheckedChange={() => setRememberMe(!rememberMe)}
                  />
                  <label htmlFor="remberMe">Rember Me</label>
                </Flex>
                <Link
                  to={ROUTES.FORGOT_PASSWORD}
                  className={buttonVariants({ variant: 'link', className: '!px-0' })}
                >
                  Forgot Password?
                </Link>
              </Flex>
            </FormItem>
          )}
        />
        <Button className="w-full !mt-6" type="submit" isLoading={loginLoading}>
          Login
        </Button>
        <div className="flex items-center">
          <Separator />
          <p className="text-center px-5">or</p>
          <Separator />
        </div>
      </form>
      <SocialAuth loading={loginLoading} alignment="column" />
    </Form>
  );
};
