import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitDB1603714921495 implements MigrationInterface {
  name = 'InitDB1603714921495';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `recommendations` (`id` varchar(255) NOT NULL, `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `user_id` varchar(255) NOT NULL, `product_id` text NULL, `meta_product` json NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `recommendations`', undefined);
  }
}
