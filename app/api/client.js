import { create } from 'apisauce';
import UrlContstants from '../contstants/UrlContstant';

const apiClient = create({
  baseURL: UrlContstants.HOSTING + '/api',
});

export default apiClient;

