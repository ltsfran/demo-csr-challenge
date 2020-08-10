export class HttpResponseError extends Error {
  public status: number;
  public response: any;

  constructor(error) {
    super(error);
    this.name = 'HttpError';
    this.status = error.response.status;
    this.response = error.response.data;
    this.message = this.response.message;
  }
}