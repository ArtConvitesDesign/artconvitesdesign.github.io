import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Carde(props) {
    const url = '#/Convite?Produto=' + props.Id;
    return (
        <Card style={{ width: '18rem',height:'420px' ,overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'center',alignItems:'center'}}>
                <img style={{ width: '18rem', height: '250px' }} src={props.Img} />
            </div>
            <Card.Body>
                <Card.Title>{props.Titulo}</Card.Title>
                <Card.Text>{props.Texto}</Card.Text>
                <a  href={url} className='btn btn-primary'>Ver convite</a>
            </Card.Body>
        </Card>
    );
}

export default Carde;