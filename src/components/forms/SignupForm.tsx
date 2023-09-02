import { useState } from 'react';
import { signupFormSchema } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { useSignUpMutation } from '@/graphql/generated';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Flex } from '../ui/flex';
import { Separator } from '../ui/separator';
import { useToast } from '../../hooks/use-toast';
import { SocialAuth } from '../atoms/SocialAuth';

export const SignupForm = () => {
  const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false);

  const { toast } = useToast();
  const loginForm = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      confirmPassword: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    },
  });

  const [signupMutation, { loading }] = useSignUpMutation();

  const handleSubmitMutation = async (values: z.infer<typeof signupFormSchema>) => {
    const { confirmPassword, ...variables } = values;
    const { data, errors } = await signupMutation({ variables: { signupInput: variables } });

    if (errors) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: errors[0].message,
      });
    }

    if (data?.signup.verificaitonLinkSent) {
      toast({
        title: 'Verification link Sent!',
        description: 'Please check you email for verification instructions',
      });
      loginForm.reset();
    }
  };

  return (
    <Form {...loginForm}>
      <SocialAuth loading={loading} alignment="row" />
      <Flex align="center">
        <Separator />
        <p className="text-center px-3">or</p>
        <Separator />
      </Flex>
      <form className="space-y-3" onSubmit={loginForm.handleSubmit(handleSubmitMutation)}>
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
        <Flex>
          <FormField
            control={loginForm.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-2/4">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={loginForm.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-2/4">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Flex>
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
            </FormItem>
          )}
        />
        <FormField
          control={loginForm.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="Confirm your password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Flex align="center" className="!my-5">
          <Checkbox
            id="terms"
            checked={privacyPolicyChecked}
            onCheckedChange={() => setPrivacyPolicyChecked(!privacyPolicyChecked)}
          />
          <label
            htmlFor="terms"
            className="text-sm font-normal leading-5 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            By signing up, you are creating a Poly account, and you agree to Poly Terms of Use and
            Privacy Policy.
          </label>
        </Flex>
        <Button
          className="w-full"
          type="submit"
          isLoading={loading}
          loadingText="Creating your account"
          disabled={!privacyPolicyChecked}
        >
          Create an account
        </Button>
      </form>
    </Form>
  );
};
