const MyButton = (props) => {
  return (
    <div>
      <button onClick={() => props.clicked()}>Click Me Bro!</button>
    </div>
  );
};

export default MyButton;
