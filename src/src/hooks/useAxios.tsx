import { useContext, useEffect } from "react";
import { AxiosResponse } from "axios";
import { AxiosCall } from "src/interfaces";
import { AuthContext, UIContext } from "src/context";
import { CustomStorage } from "src/lib/Storage";
import { useNavigate } from "react-router-dom";

const useAxios = () => {
  const { setToast, setDialog } = useContext(UIContext);
  const { setUserAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  let controller: AbortController;

  const callEndpoint = async (axiosCall: AxiosCall<any>) => {
    if (axiosCall.controller) controller = axiosCall.controller;
    let result = {} as AxiosResponse<any>;
    try {
      result = await axiosCall.call;
    } catch (error: any) {
      const { data } = error.response;
      if ([401, 403].includes(error.response.status)) {
        if (error.response.status === 401) {
          setDialog({
            icon: "warning",
            title: "Please sign in again",
            message:
              "You were signed out of your account. Please press 'Refresh' to sign in to the InspectIA.",
          });
          return null;
        } else {
          CustomStorage.cleanTokens();
          setUserAuth(null);
          navigate("/", { replace: true });
        }
      }

      setToast({
        type: "error",
        title:
          "Error " + (data.error.code ? ` ${data.error.code}` : data.error),
        message: data.error.description
          ? data.error.description
          : "Ha ocurrido un error, contacta al administrador",
        duration: 7000,
      });
      return null;
    }
    return result;
  };

  const cancelEndpoint = () => {
    controller && controller.abort();
  };

  useEffect(() => {
    return () => {
      cancelEndpoint();
    };
  }, []);

  return { callEndpoint };
};

export default useAxios;
