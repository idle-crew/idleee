import { Storage } from "../storage/storage";

const authorization = () => {
  return {
    headers: {
      Authorization: `Bearer ${Storage.getItem("access-token")}`,
    },
  };
};

export default authorization;
