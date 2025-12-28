import ProfileCard from "./evaluasi-harian2/ProfileCard";
import DiscountPrice from "./evaluasi-harian2/DiscountPrice";
import LoginStatus from "./evaluasi-harian2/LoginStatus";
import MessageInfo from "./evaluasi-harian2/MessageInfo";
import FruitList from "./evaluasi-harian2/FruitList";

function App() {
  return (
    <>
    <ProfileCard
      name="Fadhli Al Fajri"
      photo="https://via.placeholder.com/300x200"
      bio="Seorang Front-End Developer"
      skills={["HTML", "CSS", "JavaScript"]}
    />

    <DiscountPrice />
    <LoginStatus />
    <MessageInfo />

    <FruitList 
    fruits={['Apel', 'Pisang', 'Mangga']} 
    />

  </>
  );
}

export default App

