import React from "react";
import { FollowerCtx } from "./context/FollowerContext";

const FollowerList = () => {
  const { list } = FollowerCtx();

  return (
    <div className="FollowerList">
      {list.length ? (
        list.map((item, idx) => {
          return (
            <div className="card" key={idx}>
              <img src={item.avatar_url} alt="error" />
              <h3>{item.login}</h3>
              <p className="id">Id: {item.id}</p>
              <a href={item.html_url} target="_blank">
                GitHub profile
              </a>
            </div>
          );
        })
      ) : (
        <div className="empty">No followers</div>
      )}
    </div>
  );
};

export default FollowerList;
