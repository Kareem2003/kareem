import { $axios } from "../axios";

export const sendEmail = (payload, onSuccess, onError, onFinally) => {
  $axios
    .post(`/send-email`, payload)
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      console.log("API Service: ", error);
      if (error.response) {
        onError(error.response.data);
      } else {
        onError(error.message);
      }
    })
    .finally(() => {
      onFinally();
    });
};
