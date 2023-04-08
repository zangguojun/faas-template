import {
  Inject,
  Provide,
  Init,
  Scope,
  ScopeEnum,
} from '@midwayjs/decorator';
import { Context } from '@midwayjs/faas';
import IDrawService from '../interface/draw.interface';

@Provide()
@Scope(ScopeEnum.Singleton)
export class drawService implements IDrawService {
  @Inject()
  ctx: Context;

  @Inject('lodash')
  lodash;

  @Inject('cache')
  cache;

  @Init()
  async initMethod() {
  }

}
