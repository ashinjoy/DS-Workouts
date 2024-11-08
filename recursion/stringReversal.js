function stringReversal(string) {
    if (string.length === 1) return string[0];
    let reversedString = "";
    return (
      reversedString +
      stringReversal(string.substring(1, string.length)) + string[0]
    );
  }
  const data = stringReversal("ashin is the best engineer");
  console.log(data)
