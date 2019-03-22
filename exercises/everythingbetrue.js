function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre]);
}

console.log(
  truthCheck(
    [
      { user: "Frank Zappa", sex: "male" },
      { user: "Jack White", sex: "male" },
      { user: "Lupita Nyong'o", sex: "female" },
      { user: "Sister Rosetta Tharpe", sex: "female" }
    ],
    "sex"
  )
);

console.log(
  truthCheck(
    [
      { user: "Frank Zappa" },
      { user: "Jack White", sex: "male" },
      { user: "Lupita Nyong'o", sex: "female" },
      { user: "Sister Rosetta Tharpe", sex: "female" }
    ],
    "sex"
  )
);
