import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/user/dto/user.dto';
import { DataSource, Repository} from 'typeorm';
import { User } from 'src/user/entity/user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(
      User,
      dataSource.createEntityManager(),
      dataSource.createQueryRunner(),
    );
  }

  //유저 생성
  async onCreate(createUserDto: CreateUserDto): Promise<boolean> {
    const { user_id, password, name, age } = createUserDto;

    const user = await this.save({
      user_id,
      password,
      salt: 'rekraker',
      name,
      age,
    });

    return user ? true : false;
  }

  //모든 유저 조회
  async findAll(): Promise<User[]> {
    return await this.find();
  }

  async findAllByName(name: string): Promise<User[]>{
    return await this.createQueryBuilder(`user`)
      .where(`user.name like :name`, { name: `%${name}%` })
      .getMany();
  }

  //단일 유저 조회
  async findById(id: string): Promise<User> {
    const user = await this.findOneBy({ id: id });

    if (!user) {
      throw new NotFoundException('유저를 찾을 수 없습니다.');
    }

    return user;
  }

  //단일 유저 수정
  async onChnageUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<boolean> {
    const { name, age } = updateUserDto;

    const chnageUser = await this.update({ id }, { name, age });

    if (chnageUser.affected !== 1) {
      throw new NotFoundException('유저가 존재하지 않습니다.');
    }

    return true;
  }

  //전체 유저 수정
  async onChnageUsers(updateUserDto: UpdateUserDto[]): Promise<boolean> {
    const user = updateUserDto.map((data) => {
      return this.update(data.id, { name: data.name, age: data.age });
    });

    await Promise.all(user);

    return true;
  }

  //유저 삭제
  async onDelete(id: string): Promise<boolean> {
    /**
     * remove() & delete()
     * - remove: 존재하지 않는 아이템을 삭제하면 404 Error가 발생합니다.
     * - delete: 해당 아이템이 존재 유무를 파악하고 존재하면 삭제하고, 없다면 아무 에러도 발생하지 않는다.
     */
    const deleteUser = await this.delete(id);

    if (deleteUser.affected === 0) {
      throw new NotFoundException('유저가 존재하지 않습니다.');
    }

    return true;
  }
}
