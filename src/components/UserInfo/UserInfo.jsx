import { useSelector } from 'react-redux';

const UserInfo = () => {
  // const user= useSelector((state)=> state.user);
  const { firstName, lastName } = useSelector((state) => state.user);
  console.log(firstName);
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstName + '' + lastName}
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
};

export default UserInfo;
