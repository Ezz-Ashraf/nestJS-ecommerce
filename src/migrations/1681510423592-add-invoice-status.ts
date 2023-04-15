import { MigrationInterface, QueryRunner } from "typeorm";

export class AddInvoiceStatus1681510423592 implements MigrationInterface {
    name = 'AddInvoiceStatus1681510423592'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`invoice\` ADD \`status\` enum ('PLACED', 'DELIVERED', 'CANCELLED') NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`invoice\` DROP COLUMN \`status\``);
    }

}
