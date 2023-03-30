import React, { useState } from "react";

const Kitten = ({ kitten }) => {
  const [teamMember, setTeamMember] = useState("");
  const [hidden, setHidden] = useState(false);

  if (hidden) {
    return null;
  } else
    return (
      <div style={{ display: "flex", flexDirection: "column", padding: "7px" }}>
        <button onClick={() => setHidden(true)}>hide</button>

        <img
          src={kitten}
          width={"auto"}
          height={200}
          style={{
            objectFit: "contain",
            backgroundColor: "#ace2df",
            padding: "7px",
          }}
        />

        <input
          style={{ textAlign: "center", fontSize: "36px" }}
          value={teamMember}
          onChange={(e) => setTeamMember(e.target.value)}
        />
      </div>
    );
};

export default Kitten;
