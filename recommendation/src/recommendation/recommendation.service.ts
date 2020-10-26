import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Recommendation } from './recommendation.entity';
import { transactions } from '../mockupData/transactions';

@Injectable()
export class RecommendationService extends TypeOrmCrudService<Recommendation> {
  constructor(@InjectRepository(Recommendation) repo) {
    super(repo);
  }

  getSuggestedRecommendation() {
    try {
      const listTransaction = transactions;

      let listProduct = [];
      let listTags = [];

      for (const trx of listTransaction) {
        for (const product of trx.products) {
          const findProduct = listProduct.find(
            (item) => item.id === product.id,
          );
          if (findProduct) {
            listProduct = listProduct.map((item) => {
              if (item.id === product.id) {
                item.poin_of_product++;
              }
              delete item.qty;
              delete item.total_price;
              return item;
            });
          } else {
            listProduct.push({ ...product, poin_of_product: 1 });
          }

          for (const tag of product.tags) {
            const findTag = listTags.find((item) => item.tag === tag);
            if (findTag) {
              listTags = listTags.map((item) => {
                if (item.tag === tag) {
                  item.poin_of_tag++;
                }
                return item;
              });
            } else {
              listTags.push({ tag, poin_of_tag: 1 });
            }
          }
        }
      }

      listProduct.sort((a, b) => b.poin_of_product - a.poin_of_product);
      listTags.sort((a, b) => b.poin_of_tag - a.poin_of_tag);

      return {
        listProduct,
        listTags,
      };
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
