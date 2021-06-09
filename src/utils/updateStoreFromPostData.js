const updateStoreFromPostData = ({ postData, setDataField }) => {
  Object.entries(postData).forEach(([dataKey, data]) =>
    setDataField(dataKey, data)
  );
};

export default updateStoreFromPostData;
