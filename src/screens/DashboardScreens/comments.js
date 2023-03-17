import SMGrid from "../../Components/SMGrid";
import SMSearchBar from "../../Components/SMSearchBar";
import { Get } from "../../config/apiBaseMethods";
import { useEffect, useState } from "react";
function CommentsScreen() {

  const [listData, setListData] = useState([]);

  let cols = [
    {
      displayName: "Id",
      key: "id",
    },
    {
      displayName: "Full Name",
      key: "name",
      searchable: true,
    },
    {
      displayName: "User Email",
      key: "email",
      searchable: true,
    },
    {
      displayName: "Content",
      key: "body",
    },
    {
      displayName: "Post",
      key: "postId",
    },
  ];

  let getData = () => {
    Get("comments")
      .then((res) => {
        if (res.data) {
          setListData([...res.data]);
        }
      })
      .catch((err) => {});
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {/* <div>
        <SMSearchBar
          label="Search Roll #"
          searchList={[
            {
              displayName: "User Name",
              key: "name",
            },
            {
              displayName: "User Email",
              key: "email",
            },
          ]}
          onSearch={(selectVal, inputVal) => {
            console.log(selectVal, inputVal);
          }}
        />
      </div> */}
      <SMGrid title="Comments" datasource={listData} cols={cols} />
    </>
  );
}
export default CommentsScreen;