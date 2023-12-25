import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../services/apiSlice';
import './style.css';

//HEADER USER INFORMATION
const UserInfo = () => {
  const user = useSelector((state) => state.user);
  const { firstName, lastName } = useSelector((state) => state.user);
  const [updatedFirstName, setFirstName] = useState('');
  const [updatedLastName, setLastName] = useState('');
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  // console.log(firstName);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateUser(updatedFirstName, updatedLastName));
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {edit === false ? firstName + ' ' + lastName : ''}
      </h1>
      {edit === false ? (
        <button
          className="edit-button"
          onClick={() => {
            setEdit(true);
          }}
        >
          Edit Name
        </button>
      ) : (
        <form className="edit-inputs-buttons" onSubmit={handleOnSubmit}>
          <div className="edit-inputs">
            <input
              type="text"
              className="edit-input"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder={user.firstName}
              required
            />
            <input
              type="text"
              className="edit-input"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder={user.lastName}
              required
            />
          </div>
          <div className="edit-buttons">
            <button className="edit-button-option" type="submit">
              Save
            </button>
            <button
              className="edit-button-option"
              onClick={() => {
                setEdit(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UserInfo;
