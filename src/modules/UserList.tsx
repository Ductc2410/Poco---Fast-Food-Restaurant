import { useEffect } from "react";

const UserList = () => {
  useEffect(() => {
    console.log("render1");
  });

  return (
    <>
      {console.log("render")}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quo itaque alias saepe
        sunt voluptas facilis quis fugit sequi aspernatur, nulla veritatis molestiae mollitia
        nostrum, repellendus id atque consequuntur doloremque?
      </p>
    </>
  );
};

export default UserList;
