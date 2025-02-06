export const parseJwt = (token: string) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      window
        ?.atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(''),
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    return undefined;
  }
};

/*{
  "dat": {
    "appname": "podpiski",
    "country": "tj",
    "crmClientID": "692091",
    "data": {
      "country": "tj",
      "crmClientID": "692091",
      "name": "Камолҷон Х.",
      "phone": "+992990994202",
      "userId": "50000237"
    },
    "id": "449f6daf-ab7c-0276-8339-c62fb1f3243a",
    "name": "Камолҷон Х.",
    "phone": "+992990994202",
    "userId": "50000237"
  },
  "exp": 1742301122,
  "iat": 1710765122,
  "iss": "Mobi",
  "nbf": 1710765122
}
*/
