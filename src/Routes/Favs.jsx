import Card from "../Components/Card";
import { useDocsContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Favs = () => {

  const { state } = useDocsContext()
 { console.log(state.favs)}

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.map((fav) => (                    
          <Card name={fav.name} username={fav.username} key={fav.id} idDoc={fav.id}/>
        ))}
      </div>
    </>
  );
};

export default Favs;
