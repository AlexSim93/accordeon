import { useEffect, useState } from 'react';
import { CMS_PATH } from '../../constants';

export const useContent = (path: string) => {
  const [content, setContent] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    fetch(`${CMS_PATH}/${path}`)
      .then((response) => response.json())
      .then((data) => setContent(data))
      .catch((err) => setError(err));
  }, [path]);
  return { content, error };
};
