import { FilterType } from "../Components/menu/type";
import axiosClient from "./axiosClient";
import queryString from 'query-string';

const productApi = {
  getAll: (params: FilterType) => {
    const url = '/products/getProducts?';
    const paramString = url + queryString.stringify(params);

    return axiosClient.get(paramString);
    // return axiosClient.get(url, { params });
  },

  get: (id: string) => {
    const url = `/products/${id}`;   
      return axiosClient.get(url);
  },
}

export default productApi;