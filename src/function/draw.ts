import {
  Provide,
  Inject,
  ServerlessTrigger,
  ServerlessTriggerType,
} from '@midwayjs/core';
import { Context } from '@midwayjs/faas';
import IDrawService from '../interface/draw.interface';

@Provide()
export class DrawHTTPService {
  @Inject()
  ctx: Context;

  @Inject('drawService')
  draw: IDrawService;

  @ServerlessTrigger(ServerlessTriggerType.HTTP, {
    path: '/',
    method: 'get',
  })
  async handleXXX() {
  }
}
