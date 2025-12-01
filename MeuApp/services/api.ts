// services/api.ts

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const api = {
  async get<T>(data: T, delay = 150): Promise<T> {
    await sleep(delay);
    return data;
  },
};
