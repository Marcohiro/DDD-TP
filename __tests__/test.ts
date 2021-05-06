import RentRepository from "../src/use_case/RentRepository";
import { RoomRent } from "../src/use_case/RoomRent";


export type MockType<T> = {
    [P in keyof T]?: jest.Mock<{}>;
};


describe('RoomRent', () => {
    let service: RoomRent;
    let repositoryMock: MockType<RentRepository<UserEntity>>;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [
          UserService,
          // Provide your mock instead of the actual repository
          { provide: getRepositoryToken(UserEntity), useFactory: repositoryMockFactory },
        ],
      }).compile();
      service = module.get<UserService>(UserService);
      repositoryMock = module.get(getRepositoryToken(UserEntity));
    });
  
    it('should find a user', async () => {
      const user = {name: 'Alni', id: '123'};
      // Now you can control the return value of your mock's methods
      repositoryMock.findOne.mockReturnValue(user);
      expect(service.findUser(user.id)).toEqual(user);
      // And make assertions on how often and with what params your mock's methods are called
      expect(repositoryMock.findOne).toHaveBeenCalledWith(user.id);
    });
  });