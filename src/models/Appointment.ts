import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

//Estamos informando que esse model vai ser armazenado dentro da tabela de appointments
@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider: string;

  @Column('timestamp with time zone')
  date: Date;
}

export default Appointment;
