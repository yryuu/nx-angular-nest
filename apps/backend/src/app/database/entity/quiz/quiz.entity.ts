import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  /** 問題文 */
  @Column({
    unique: true,
    nullable: false,
    type: 'text',
  })
  questionText: string;

  /** 問題文
   * radio 単一選択
   * checkbox 複数選択可能
   * freeInput 選択肢なし、自由入力
   */
  @Column({
    unique: false,
    nullable: false,
    type: 'varchar',
  })
  questionType: 'radio' | 'checkbox' | 'freeInput';

  /** 選択肢1 */
  @Column({
    unique: false,
    nullable: false,
    type: 'varchar',
  })
  selectText1: string;

  /** 選択肢2 */
  @Column({
    unique: false,
    nullable: false,
    type: 'varchar',
  })
  selectText2: string;

  /** 選択肢3 */
  @Column({
    unique: false,
    nullable: false,
    type: 'varchar',
  })
  selectText3: string;

  /** 選択肢4 */
  @Column({
    unique: false,
    nullable: false,
    type: 'varchar',
  })
  selectText4: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt?: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt?: Date;
}
