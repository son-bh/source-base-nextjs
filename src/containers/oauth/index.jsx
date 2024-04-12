'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { StorageKeys } from 'src/constants/storage-keys';
import { useGoogleLoginMutation } from 'src/services/user';
import useUserState from 'src/stores/user';
import { CookieStorage } from 'src/utils/cookie-storage';

export default function Oauth() {
  const route = useRouter();
  const { type } = useParams();
  const { setUserInfo } = useUserState();
  const googleLoginMutation = useGoogleLoginMutation();

  useEffect(() => {
    const hash = window.location.hash;
    const search = new URLSearchParams(hash.slice(1));
    const accessToken = search.get('access_token');
    const pathname = decodeURIComponent(search.get('state') || '/');

    if (type === 'facebook') {
      responseFacebook(accessToken, pathname);
      return;
    }
    if (type === 'google') {
      responseGoogle(accessToken, pathname);
      return;
    }
  }, [type]);

  const handleSuccess = (res, pathname) => {
    if (res?.code === 0) {
      CookieStorage.setCookieData(StorageKeys.AccessToken, res?.token);
      CookieStorage.setCookieData(StorageKeys.UserInfo, JSON.stringify(res?.data));
      setUserInfo(res?.data);
      route.replace(pathname);
    }
  };

  const responseGoogle = async (code, pathname) => {
    if (code) {
      googleLoginMutation.mutate(
        { token: code },
        {
          onSuccess: response => {
            handleSuccess(response, pathname);
          },
        }
      );
    }
  };

  const responseFacebook = async (code, pathname) => {};

  return <></>;
}
