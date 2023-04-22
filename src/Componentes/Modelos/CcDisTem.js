import React, { useState } from 'react';
import '../../Hojas-de-estilo/CocomoII.css';
import Select from 'react-select';
import Input from '../Input';
import Boton from '../Boton';

function CcDisTemp(){

  const A = 2.94;

  const [ B , setB ] = useState(1.1997);
  const [ pmNom , setPMnom ] = useState(0);
  const [ pmEst , setPMest ] = useState(0);
  const [ Arcpx , setRcpx ] = useState(1);
  const [ Aruse , setRuse ] = useState(1);
  const [ Apdif , setPdif ] = useState(1);
  const [ Apers , setPers ] = useState(1);
  const [ Aprex , setPrex ] = useState(1);
  const [ Afcil , setFcil ] = useState(1);
  const [ Asced , setSced ] = useState(1);
  const [ Aprec , setPrec ] = useState(3.72);
  const [ Aflex , setFlex ] = useState(3.04);
  const [ Aresl , setResl ] = useState(4.24);
  const [ Ateam , setTeam ] = useState(3.29);
  const [ Apmat , setPmat ] = useState(4.68);
  const [ Ksloc , setKsloc ] = useState('');

  //Multiplicadores de esfuerzo

  const rcpx = [
    { label:"xlo", value:0.73 },
    { label:"vlo", value:0.81 },
    { label:"lo", value:0.98 },
    { label:"nom", value:1 },
    { label:"hi", value:1.3 },
    { label:"vhi", value:1.74 },
    { label:"xhi", value:2.35 }
  ]
  
  const ruse = [
    { label:"lo", value:0.95 },
    { label:"nom", value:1 },
    { label:"hi", value:1.07 },
    { label:"vhi", value:1.15 },
    { label:"xhi", value:1.24 }
  ]
  
  const pdif = [
    { label:"lo", value:0.87 },
    { label:"nom", value:1 },
    { label:"hi", value:1.29 },
    { label:"vhi", value:1.81 },
    { label:"xhi", value:2.61 }
  ]
  
  const pers = [
    { label:"xlo", value:2.12 },
    { label:"vlo", value:1.62 },
    { label:"lo", value:1.26 },
    { label:"nom", value:1 },
    { label:"hi", value:0.83 },
    { label:"vhi", value:0.63 },
    { label:"xhi", value:0.5 }
  ]
  
  const prex = [
    { label:"xlo", value:1.59 },
    { label:"vlo", value:1.33 },
    { label:"lo", value:1.12 },
    { label:"nom", value:1 },
    { label:"hi", value:0.87 },
    { label:"vhi", value:0.71 },
    { label:"xhi", value:0.62 }
  ]
  
  const fcil = [
    { label:"xlo", value:1.43 },
    { label:"vlo", value:1.3 },
    { label:"lo", value:1.1 },
    { label:"nom", value:1 },
    { label:"hi", value:0.87 },
    { label:"vhi", value:0.73 },
    { label:"xhi", value:0.62 }
  ]
  
  const sced = [
    { label:"vlo", value:1.43 },
    { label:"lo", value:1.14 },
    { label:"nom", value:1 },
    { label:"hi", value:1 },
    { label:"vhi", value:1 }
  ]
  
  //Factores de escala

  const prec = [
    { label:"vlo", value:6.2 },
    { label:"lo", value:4.96 },
    { label:"nom", value:3.72 },
    { label:"hi", value:2.48 },
    { label:"vhi", value:1.24 },
    { label:"xhi", value:0 }
  ]

  const flex = [
    { label:"vlo", value:5.07 },
    { label:"lo", value:4.05 },
    { label:"nom", value:3.04 },
    { label:"hi", value:2.03 },
    { label:"vhi", value:1.01 },
    { label:"xhi", value:0 }
  ]
  
  const resl = [
    { label:"vlo", value:7.07 },
    { label:"lo", value:5.65 },
    { label:"nom", value:4.24 },
    { label:"hi", value:2.83 },
    { label:"vhi", value:1.41 },
    { label:"xhi", value:0 }
  ]
  
  const team = [
    { label:"vlo", value:5.48 },
    { label:"lo", value:4.38 },
    { label:"nom", value:3.29 },
    { label:"hi", value:2.19 },
    { label:"vhi", value:1.1 },
    { label:"xhi", value:0 }
  ]

  const pmat = [
    { label:"vlo", value:7.8 },
    { label:"lo", value:6.24 },
    { label:"nom", value:4.68 },
    { label:"hi", value:3.12 },
    { label:"vhi", value:1.56 },
    { label:"xhi", value:0 } 
  ]

  const handleSelectChangeRcpx = ( { value } ) => {
    console.log("Rcpx: " + value);
    setRcpx(value);
  }

  const handleSelectChangeRuse = ( { value } ) => {
    console.log("Ruse: " + value);
    setRuse(value);
  }

  const handleSelectChangePdif = ( { value } ) => {
    console.log("Pdif: " + value);
    setPdif(value);
  }

  const handleSelectChangePers = ( { value } ) => {
    console.log("Pers: " + value);
    setPers(value);
  }

  const handleSelectChangePrex = ( { value } ) => {
    console.log("Prex: " + value);
    setPrex(value);
  }

  const handleSelectChangeFcil = ( { value } ) => {
    console.log("Fcil: " + value);
    setFcil(value);
  }

  const handleSelectChangeSced = ( { value } ) => {
    console.log("Sced: " + value);
    setSced(value);
  }

  const handleSelectChangePrec = ( { value } ) => {
    console.log("Prec: " + value);
    setPrec(value);
  }

  const handleSelectChangeFlex = ( { value } ) => {
    console.log("Flex: " + value);
    setFlex(value);
  }

  const handleSelectChangeResl = ( { value } ) => {
    console.log("Resl: " + value);
    setResl(value);
  }

  const handleSelectChangeTeam = ( { value } ) => {
    console.log("Team: " + value);
    setTeam(value);
  }

  const handleSelectChangePmat = ( { value } ) => {
    console.log("Pmat: " + value);
    setPmat(value);
  }

  function handleChange(name,value) {
    switch(name){
      case 'ksloc':
        setKsloc(value);
        //console.log('Ksloc: ' + Ksloc);
        break;
      default:
        break;
    }
  };

  function calculoB(){
    setB(1.01 + 0.01 * ( Aprec + Aflex + Aresl + Ateam + Apmat ));
    console.log('B: ' + B);
  }

  function calculoPMnominal(){
    calculoB();
    setPMnom( A * Math.pow(Ksloc,B) );
    console.log('A: ' + A);
    console.log('Ksloc: ' + Ksloc);
    console.log('Exponente' + Math.pow(Ksloc,B))
    console.log('pmNom: ' + pmNom);
  }

  const calcularEstimacion = () => {
    
    calculoPMnominal();
    setPMest( pmNom * ( Arcpx * Aruse * Apdif * Apers * Aprex * Afcil * Asced ) );
    console.log('pmEst: ' + pmEst);
    //console.log('Entra a calcularEstimacion');
  }

  return(
    <>
    <hr/>
    <div className='contenedor-principal'>
      <div>
        Multiplicadores de esfuerzo <br/>{Arcpx}<br/>
        <table>
          <tbody>
            <tr>
              <td>RCPX:</td>
              <td><Select options={ rcpx } defaultValue={ rcpx[3] } onChange={ handleSelectChangeRcpx } /></td>
            </tr>
            <tr>
              <td>RUSE:</td>
              <td><Select options={ ruse } defaultValue={ ruse[1] } onChange={ handleSelectChangeRuse }/></td>
            </tr>
            <tr>
              <td>PDIF:</td>
              <td><Select options={ pdif } defaultValue={ pdif[1] } onChange={ handleSelectChangePdif } /></td>
            </tr>
            <tr>
              <td>PERS:</td>
              <td><Select options={ pers } defaultValue={ pers[3] } onChange={ handleSelectChangePers } /></td>
            </tr>
            <tr>
              <td>PREX:</td>
              <td><Select options={ prex } defaultValue={ prex[3] } onChange={ handleSelectChangePrex } /></td>
            </tr>
            <tr>
              <td>FCIL:</td>
              <td><Select options={ fcil } defaultValue={ fcil[3] } onChange={ handleSelectChangeFcil } /></td>
            </tr>
            <tr>
              <td>SCED:</td>
              <td><Select options={ sced } defaultValue={ sced[2] } onChange={ handleSelectChangeSced }/></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        Factor exponencial de escala <br/><br/>
        <table>
          <tbody>
            <tr>
              <td>PREC:</td>
              <td><Select options={ prec } defaultValue={ prec[2] } onChange={ handleSelectChangePrec } /></td>
            </tr>
            <tr>
              <td>FLEX:</td>
              <td><Select options={ flex } defaultValue={ flex[2] } onChange={ handleSelectChangeFlex } /></td>
            </tr>
            <tr>
              <td>RESL:</td>
              <td><Select options={ resl } defaultValue={ resl[2] } onChange={ handleSelectChangeResl } /></td>
            </tr>
            <tr>
              <td>TEAM:</td>
              <td><Select options={ team } defaultValue={ team[2] } onChange={ handleSelectChangeTeam } /></td>
            </tr>
            <tr>
              <td>PMAT:</td>
              <td><Select options={ pmat } defaultValue={ pmat[2] } onChange={ handleSelectChangePmat } /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>KSLOC: {Ksloc}</td>
              <td>
              <Input
                attribute={{
                  id: 'ksloc',
                  name: 'ksloc',
                  type: 'number',
                  placeholder: '0'
                }}
                handleChange={handleChange}
              />
              </td>
            </tr>
            <tr>
              <td>P estimado:</td>
              <td>{pmEst}</td>
            </tr>
            <tr>
              <td><Boton
                    name='boton'
                    funcion={calcularEstimacion}
                    texto='Calcular' />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default CcDisTemp;