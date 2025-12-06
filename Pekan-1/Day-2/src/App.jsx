function ProfileCard({ name, photo, bio, skills }) {
  const cardStyle = {
    width: "260px",
    padding: "16px",
    borderRadius: "12px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
  };

  const photoStyle = {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "8px",
  };

  const skillItemStyle = {
    backgroundColor: "#e2e8f0",
    padding: "4px 8px",
    borderRadius: "6px",
    marginRight: "6px",
    marginBottom: "6px",
    display: "inline-block",
    fontSize: "13px",
  };

  return (
    <div style={cardStyle}>
      <img src={photo} alt={name} style={photoStyle} />

      <h2 style={{ margin: "12px 0 6px" }}>{name}</h2>                                                               

      <p style={{ color: "#444", fontSize: "14px" }}>{bio}</p>

      <div style={{ marginTop: "12px" }}>
        <h4>Keahlian:</h4>
        <div>
          {skills.map((skill, index) => (
            <span key={index} style={skillItemStyle}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ProfileCard
      name="Fadhli Al Fajri"
      photo="https://via.placeholder.com/300x200"
      bio="Seorang front-end developer"
      skills={["JavaScript"]}
    />
  );
}

