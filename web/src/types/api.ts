// src/types/api.ts
// API response envelope and pagination types.

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface Paginated<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}
