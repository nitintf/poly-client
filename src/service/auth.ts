import axios from 'axios';

const AuthClient = axios.create({
  baseURL: `/auth`,
});

export const githubAuth = () => {
  try {
    return AuthClient.get('/github/login');
  } catch (error) {
    return error;
  }
};
export const googleAuth = () => {
  try {
    return AuthClient.get('/google/login');
  } catch (error) {
    return error;
  }
};
