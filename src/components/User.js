const User = ({name, location}) => {
    // const User = (props) => { with prpos we can use like this 
  return (
    <div className="userDiv">
      <h2>Name: {name}</h2>
      {/* <h4>Name: {props.name}</h4> */}
      <h3>Location: {location}</h3>
      <h4>Twitter: @nandish123</h4>
    </div>
  );
};

export default User;
