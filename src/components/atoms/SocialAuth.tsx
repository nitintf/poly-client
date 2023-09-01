import { ReactComponent as GoogleLogo } from '@/assets/svgs/google.svg';
import { ReactComponent as GithubLogo } from '@/assets/svgs/github.svg';
import { GITHUB_AUTH_URl, GOOGLE_AUTH_URl } from '@/constants/auth';
import { useMediaQuery } from '@/hooks';
import { Button } from '../ui/button';
import { Flex } from '../ui/flex';

type Properties = {
  loading: boolean;
  alignment: 'column' | 'row';
};

export const SocialAuth = ({ loading, alignment }: Properties) => {
  const sm = useMediaQuery('(max-width: 600px)');

  return (
    <Flex direction={sm ? 'column' : alignment} align="center" className="gap-y-0">
      <a className="w-full" href={GOOGLE_AUTH_URl}>
        <Button variant="outline" className="w-full" disabled={loading}>
          <GoogleLogo className="h-4 mr-4" />
          Login with Google
        </Button>
      </a>
      <a className="w-full" href={GITHUB_AUTH_URl}>
        <Button variant="outline" className="w-full my-4" disabled={loading}>
          <GithubLogo className="h-5 mr-4 dark:fill-white" />
          Login with Github
        </Button>
      </a>
    </Flex>
  );
};
