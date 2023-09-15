import { ReactComponent as GoogleLogo } from '@/assets/svgs/google.svg';
import { ReactComponent as GithubLogo } from '@/assets/svgs/github.svg';
import { GITHUB_AUTH_URL, GOOGLE_AUTH_URL } from '@/constants/auth';
import { useMediaQuery } from '@/hooks';
import { useSearchParams } from 'react-router-dom';
import { Button } from '../../ui/button';
import { Flex } from '../../ui/flex';

type Properties = {
  loading: boolean;
  alignment: 'column' | 'row';
};

export const SocialAuth = ({ loading, alignment }: Properties) => {
  const sm = useMediaQuery('(max-width: 600px)');
  const [searchParameters] = useSearchParams();
  const continueTo = searchParameters.get('continue');

  const getUrl = (url: string): string => {
    return url + (continueTo ? `?continue=${continueTo}` : '');
  };

  return (
    <Flex direction={sm ? 'column' : alignment} align="center" className="gap-y-0">
      <a className="w-full" href={getUrl(GOOGLE_AUTH_URL)}>
        <Button variant="outline" className="w-full" disabled={loading}>
          <GoogleLogo className="h-4 mr-4" />
          Continue with Google
        </Button>
      </a>
      <a className="w-full" href={getUrl(GITHUB_AUTH_URL)}>
        <Button variant="outline" className="w-full my-4" disabled={loading}>
          <GithubLogo className="h-5 mr-4 dark:fill-white" />
          Continue with Github
        </Button>
      </a>
    </Flex>
  );
};
