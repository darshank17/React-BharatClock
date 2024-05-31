function ClockTime() {
  let time = new Date();

  return (
    <h4>
      This is the current time: {time.toLocaleDateString()} -
      {time.toLocaleTimeString()} AM
    </h4>
  );
}
export default ClockTime;
