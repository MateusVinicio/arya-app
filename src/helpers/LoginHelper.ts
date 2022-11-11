import AsyncStorageHelper from "../helpers/AsyncStorageHelper";

type SessionData = {
  token: string;
  userInfo: object;
};

const storeData = async (data: SessionData) => {
  try {
    await AsyncStorageHelper.setObject<SessionData>("session", data);
  } catch (error) {
    console.error(error);
  }
};

const getData = async () => {
  const objResult = await AsyncStorageHelper.getObject<SessionData>("session");

  return objResult;
};

const LoginHelper = {
  storeData,
  getData,
};

export default LoginHelper;
