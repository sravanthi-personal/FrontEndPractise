type SubmitRequest = {
  personal: {
    previousAliases: {
      firstName: string;
      middleName: string;
      lastName: string;
    }[];
  };
  payment: {
    creditCardToken: string;
  };
};

type PaymentRequests = SubmitRequest["payment"];
type PreviousAliasRequest = SubmitRequest["personal"]["previousAliases"][0];

function getPayment(): PaymentRequests {
  return {
    creditCardToken: "aldfkjsldfjldk",
  };
}
