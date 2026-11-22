
import './Card.css'

function Card(props){
    return(
        <>
     <section className='Card'>
        <h3>{props.name}</h3>
        <p style={{textAlign: "center", fontSize: 30,}}>{props.number} </p>
     </section>
        </>
    );
}
export default Card