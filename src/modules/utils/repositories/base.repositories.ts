export interface BaseRepository<T> {
  getAll(options?: { onlyActives?: boolean }): Promise<T[]>;
  getById(id: number): Promise<T>;
  create(body: any): Promise<T>;
  delete(id: number): Promise<boolean>;
  update(id: number, body: any): Promise<T>;
}
