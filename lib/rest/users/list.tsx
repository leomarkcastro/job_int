import { User } from "@/types/users/user.types";

export interface LoadUsersParams {
  page: number;
}

export interface LoadUsersResponse {
  data: User[];
  total: number;
  total_pages: number;
  page: number;
  per_page: number;
}

export const loadUsers = async (params: LoadUsersParams) => {
  const resp = await fetch(
    `https://reqres.in/api/users?page=${params.page}`
  ).then((res) => res.json());

  if (resp.error) {
    throw new Error(resp.error);
  }

  const data = resp.data as User[];

  return {
    data,
    total: resp.total,
    total_pages: resp.total_pages,
    page: resp.page,
    per_page: resp.per_page,
  } as LoadUsersResponse;
};
