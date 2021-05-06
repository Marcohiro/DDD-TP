import { IRentRepository } from "../src/use_case/RentRepository";
import { RoomRent } from "../src/use_case/RoomRent";
import { mock } from 'jest-mock-extended';
import { IClientRepository } from "../src/use_case/ClientRepository";
import { IRoomRepository } from "../src/use_case/RoomRepository";
import Client from "../src/model/Client";
import Room from "../src/model/Room";
import Rent from "../src/model/Rent";


// RoomRent_Test_rentWithoutEquipments
describe('Test rentWithoutEquipments for RoomRent', () => {
  test('gets client and room then saves rent', () => {
    //1. mock repositories
     const mockClientRepo = mock<IClientRepository>();
     const mockRoomRepo = mock<IRoomRepository>();
     const mockRentRepo = mock<IRentRepository>();
     
     //2. inject mocks in RoomRent constructor
     const roomRent = new RoomRent(mockClientRepo, mockRoomRepo, mockRentRepo);

     //3. mock models
     const client = new Client();
     client.id = 1;
     client.firstName = "amine";
     client.lastName = "elbaraka";

     const room = new Room(); 
     room.id = 1;
     room.capacity = 2;
     room.area = 12.5;
     room.location = "paris";
     room.name = "appart";
     room.price = 123;

     const expectedRent = new Rent();
     expectedRent.client = client;
     expectedRent.room = room;
     const now = Date.now().toString();
     expectedRent.date = now;

     //4. call RoomRent feature
     roomRent.rentWithoutEquipments(client, room, now);   
     
     //5. Assert and verify that .save() was called with rent parameter
     expect(mockRentRepo.save).toHaveBeenCalled();
     expect(mockRentRepo.save).toHaveBeenCalledWith(expectedRent);

     //6. Assert and verify that created rent exists
     const createdRent = mockRentRepo.getByRent(expectedRent);
     expect(createdRent === expectedRent);
  });
});


// export type MockType<T> = {
//     [P in keyof T]?: jest.Mock<{}>;
// };


// rentWithoutEquipments(client:Client, room:Room):void{
//   const rent:Rent = new Rent();
//   rent.client = client;
//   rent.room = room;
//   rent.date = Date.now().toString();
//   this.rents.save(rent);
// }

// describe('RoomRent', () => {
//     let service: RoomRent;
//     let repositoryMock: MockType<RentRepository>;
  
//     beforeEach(async () => {
//       const module: TestingModule = await Test.createTestingModule({
//         providers: [
//           UserService,
//           // Provide your mock instead of the actual repository
//           { provide: getRepositoryToken(UserEntity), useFactory: repositoryMockFactory },
//         ],
//       }).compile();
//       service = module.get<UserService>(UserService);
//       repositoryMock = module.get(getRepositoryToken(UserEntity));
//     });
  
//     it('should find a user', async () => {
//       const user = {name: 'Alni', id: '123'};
//       // Now you can control the return value of your mock's methods
//       repositoryMock.findOne.mockReturnValue(user);
//       expect(service.findUser(user.id)).toEqual(user);
//       // And make assertions on how often and with what params your mock's methods are called
//       expect(repositoryMock.findOne).toHaveBeenCalledWith(user.id);
//     });
//   });
