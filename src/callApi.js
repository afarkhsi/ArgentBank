export const callApi = async () => {
  try {
    const resp = await fetch('http://localhost:3001/api/v1/user');
    const json = await resp.json();
    console.log(json.string);
  } catch (err) {
    console.log(err);
  }
};
