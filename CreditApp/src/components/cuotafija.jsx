function Cuotafija({monto,plazo}) {
  let resultado =Math.trunc(monto/plazo)
  return (
    
      <div className="card" style={{backgroundColor : "Blue",flexDirection:"unset",padding:"0px",margin:"10px"}}>
        <div className="card-body" style={{width:"50%"}}>
            CUOTA FIJA POR MES
        </div>
        <div className="card-body" style={{width:"50%"}}>
            {resultado}
        </div>
      </div>
    
  );
}

export default Cuotafija;
