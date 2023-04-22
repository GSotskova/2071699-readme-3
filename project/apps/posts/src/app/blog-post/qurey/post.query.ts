import { IsIn, IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { DEFAULT_POST_COUNT_LIMIT, DEFAULT_SORT_DIRECTION } from '../blog-post.constant';

export class PostQuery {
  @Transform(({ value } ) => +value || DEFAULT_POST_COUNT_LIMIT)
  @IsNumber()
  @IsOptional()
  public limit = DEFAULT_POST_COUNT_LIMIT;

  @IsOptional()
  public user?: string;

  @IsIn(['asc', 'desc'])
  @IsOptional()
  public sortDirection: 'desc' | 'asc' = DEFAULT_SORT_DIRECTION;

  @IsIn(['asc', 'desc'])
  @IsOptional()
  public sortLikes: 'desc' | 'asc' = DEFAULT_SORT_DIRECTION;

  @IsIn(['asc', 'desc'])
  @IsOptional()
  public sortComments: 'desc' | 'asc' = DEFAULT_SORT_DIRECTION;

  @Transform(({ value }) => +value)
  @IsOptional()
  public page: number;
}
