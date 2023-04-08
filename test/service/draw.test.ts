import { createApp, close } from '@midwayjs/mock';
import * as ServerlessApp from '@midwayjs/serverless-app';
import { drawService } from "../../src/service/draw.service";

describe('test/yueque.test.ts', () => {

  let app: ServerlessApp.Application, service: drawService;

  beforeAll(async () => {
    app = await createApp<ServerlessApp.Framework>();
    service = await app.getApplicationContext().getAsync<drawService>(drawService);
  });

  afterAll(async () => {
    await close(app);
  });

  it('should demo', async () => {
    const rst = await service.Demo()
    expect(rst.type).toEqual('User');
  });
});
