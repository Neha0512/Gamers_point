import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from '@mui/material/Rating';
import TagFacesRoundedIcon from '@mui/icons-material/TagFacesRounded';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';

function GameCard(props) {
  return (
    <center>
    <Card border={props?.data?.editors_choice.toLowerCase()==="y"?"warning":"secondary"} style={{ width: '23rem', height:'13rem',margin:'2rem', borderRadius:'10%', border:'solid 4px' }}>
      <Card.Header className="d-flex justify-content-between ">
        <div style={{fontWeight:"750"}}>{props?.data?.title}</div>
        {props?.data?.editors_choice.toLowerCase()==="y"?
          <Tooltip title="Editors Choice" style={{cursor:"pointer"}}>
            <span>
              <TagFacesRoundedIcon fontSize="medium"/>
            </span>
          </Tooltip>:<div/>}
      </Card.Header>
      <Card.Body style={{ backgroundColor:"black", color:"white", borderRadius:'50px 25px'}}>
        <Card.Title style={{fontSize:"1em"}} className="d-flex justify-content-between align-items-center">
          <div> <strong> Platform:</strong>   {props?.data?.platform}</div> <br></br>
        </Card.Title>
        <Card.Text>
          <div className="d-flex align-items">
            <span> <strong> Rating: </strong> {props?.data?.score}</span>
            <Rating precision={0.1} name="customized-10" readOnly defaultValue={props?.data?.score} max={10} />
          </div>
           <br></br>
          <Chip size="small" color="secondary" label={props?.data?.genre}/>
           <br></br>
        </Card.Text>
      </Card.Body>
    </Card>
    </center>
  );
}

export default GameCard;
