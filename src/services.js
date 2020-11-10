export const registerUser = async (url, data) => {
  const resp = await fetch(url, {
    method: "post",
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: JSON.stringify(data)
  });

  if (resp) {
    return resp;
  } else console.log("Error in fetch ", url);
};
