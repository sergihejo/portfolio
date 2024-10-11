import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProjectsTable1728508719809 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'projects',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'tech_stack',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'github_url',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'demo_url',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'preview_url',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'image_url',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('projects');
  }
}
