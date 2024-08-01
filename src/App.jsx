function App() {
  const myName = "Erwin";
  const multiPly = (a, b) => a + b;
  const specialClass = "simple-class";

  return (
    <>
      <h1>{myName}</h1>
      <p>2 + 2 = {2 + 2} </p>
      <p>My friends list: {["Kenneth", "Michael", "Jimjames"]}</p>
      <p>2 * 2 = {multiPly(2, 2)}</p>
      <p className={specialClass}>This is a special class</p>
    </>
  );
}

export default App;
