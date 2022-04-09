import { GET_USER_DATA } from "./types/userDataTypes"

const initialState = {
  userName: 'Сергей',
  userSurname: 'Иванов',
  userAge: '22',
  userLogin: 'IvanovSergey22',
  userPassword: '******',
  userEmail: 'IvanovSergey22@mail.ru',
  userPhoneNumber: '8-(999)-999-99-99',
};

export const userData = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};