import './App.css';
import Header from './Header';
import Stories from './Stories';
import FeedForm from "./FeedForm";
import FeedPost from "./FeedPost";
import feed1 from "./resources/feed1.jpg";
import feed2 from "./resources/feed2.jpg";
import feed3 from "./resources/feed3.png";
import foto from "./resources/foto.jpg";



function App() {
  return (
    <div className="App">
      <Header />
      <Stories />
      <FeedForm />


      <FeedPost nome="Raphael Da Silva" horario="20:00" conteudo="Os dois devem estar no mesmo nível da hierarquia, caso contrário, haverá desequilíbrio quando um desejar e o outro conceder, porque desejar parece algo pequeno e o conceder algo grande, então, um dos parceiros se mostra como carente e como alguém que recebe, tal como uma criança, e o outro mostra-se como alguém que ajuda, que dá, como se tornasse um pai ou uma mãe." foto={feed1} photo_profile={foto} />
      <FeedPost nome="Raphael Da Silva" horario="10:00" conteudo="A reverência aos nossos ancestrais nos da força para alcançar nossa felicidade.👨‍👩‍👧" foto={feed2} photo_profile={foto}/>
      <FeedPost nome="Raphael Da Silva" horario="05:00" conteudo="PROBLEMAS COM INSÔNIA?Hoje teremos um trabalho feito para te ajudar combater esse PESADELO Entre em contato para se inscrever Aguardamos você😴" foto={feed3} photo_profile={foto}/>


    </div>
  );
}

export default App;
