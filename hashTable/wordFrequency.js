function wordFrequency(paragraph) {
  const frequency = {};

  const array = paragraph.split(" ");
  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        count++;
        // console.log(j,count)
      }
    }
    frequency[array[i]] = count;
  }
  return frequency;
}

console.log(
  wordFrequency(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
  )
);
