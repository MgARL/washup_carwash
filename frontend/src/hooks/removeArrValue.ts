const removeArrValue = (array: [], value: string | number) => {
  return array.filter((ele: string | number) => {
    return ele !== value;
  });
};

export default removeArrValue;
