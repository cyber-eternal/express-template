export class HealthService {
  public health() {
    return { status: 'ok', timestamp: new Date() };
  }
}
