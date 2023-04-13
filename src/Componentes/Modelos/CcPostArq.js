import React, { useState } from 'react';
import '../../Hojas-de-estilo/CocomoII.css';
import Select from 'react-select';
import Input from '../Input';
import Boton from '../Boton';


function CcPostArq(){

  const A = 2.94;

  const [ B , setB ] = useState(1.1997);
  const [ pmNom , setPMnom ] = useState(0);
  const [ pmEst , setPMest ] = useState(0);

  const [ Arely , setRely ] = useState(1);
  const [ Adata , setData ] = useState(1);
  const [ Acplx , setCplx ] = useState(1);
  const [ Aruse , setRuse ] = useState(1);
  const [ Adocu , setDocu ] = useState(1);

  const [ Atime , setTime ] = useState(1);
  const [ Astor , setStor ] = useState(1);
  const [ Apvol , setPvol ] = useState(1);

  const [ Aacap , setAcap ] = useState(1);
  const [ Apcap , setPcap ] = useState(1);
  const [ Apcon , setPcon ] = useState(1);
  const [ Aaexp , setAexp ] = useState(1);
  const [ Apexp , setPexp ] = useState(1);
  const [ Altex , setLtex ] = useState(1);

  const [ Atool , setTool ] = useState(1);
  const [ Asite , setSite ] = useState(1);
  const [ Asced , setSced ] = useState(1);
  

  const [ Aprec , setPrec ] = useState(3.72);
  const [ Aflex , setFlex ] = useState(3.04);
  const [ Aresl , setResl ] = useState(4.24);
  const [ Ateam , setTeam ] = useState(3.29);
  const [ Apmat , setPmat ] = useState(4.68);
  const [ Ksloc , setKsloc ] = useState('');

  //Multiplicadores de esfuerzo

  //Producto
  const rely = [
    { label:"vlo", value:0.82 },
    { label:"lo", value:0.92 },
    { label:"nom", value:1 },
    { label:"hi", value:1.10 },
    { label:"vhi", value:1.26 }
  ]

  const data = [
    { label:"lo", value:0.90 },
    { label:"nom", value:1 },
    { label:"hi", value:1.14 },
    { label:"vhi", value:1.28 }
  ]
  
  const docu = [
    { label:"vlo", value:0.81 },
    { label:"lo", value:0.91 },
    { label:"nom", value:1 },
    { label:"hi", value:1.11 },
    { label:"vhi", value:1.23 }
  ]

  const cplx = [
    { label:"vlo", value:0.73 },
    { label:"lo", value:0.87 },
    { label:"nom", value:1 },
    { label:"hi", value:1.17 },
    { label:"vhi", value:1.34 },
    { label:"xhi", value:1.74 }
  ]
  
  const ruse = [
    { label:"lo", value:0.95 },
    { label:"nom", value:1 },
    { label:"hi", value:1.07 },
    { label:"vhi", value:1.15 },
    { label:"xhi", value:1.24 }
  ]
  
  //Plataforma
  const time = [
    { label:"nom", value:1 },
    { label:"hi", value:1.11 },
    { label:"vhi", value:1.29 },
    { label:"xhi", value:1.63 }
  ]

  const stor = [
    { label:"nom", value:1 },
    { label:"hi", value:1.05 },
    { label:"vhi", value:1.17 },
    { label:"xhi", value:1.46 }
  ]
  
  const pvol = [
    { label:"lo", value:0.87 },
    { label:"nom", value:1 },
    { label:"hi", value:1.15 },
    { label:"vhi", value:1.30 }
  ]

  //Personal
  const acap = [
    { label:"vlo", value:1.42 },
    { label:"lo", value:1.19 },
    { label:"nom", value:1 },
    { label:"hi", value:0.85 },
    { label:"vhi", value:0.71 }
  ]

  const aexp = [
    { label:"vlo", value:1.22 },
    { label:"lo", value:1.10 },
    { label:"nom", value:1 },
    { label:"hi", value:0.88 },
    { label:"vhi", value:0.81 }
  ]

  const pcap = [
    { label:"vlo", value:1.34 },
    { label:"lo", value:1.15 },
    { label:"nom", value:1 },
    { label:"hi", value:0.88 },
    { label:"vhi", value:0.76 }
  ]

  const pexp = [
    { label:"vlo", value:1.19 },
    { label:"lo", value:1.09 },
    { label:"nom", value:1 },
    { label:"hi", value:0.91 },
    { label:"vhi", value:0.85 }
  ]

  const ltex = [
    { label:"vlo", value:1.20 },
    { label:"lo", value:1.09 },
    { label:"nom", value:1 },
    { label:"hi", value:0.91 },
    { label:"vhi", value:0.84 }
  ]

  const pcon = [
    { label:"vlo", value:1.29 },
    { label:"lo", value:1.12 },
    { label:"nom", value:1 },
    { label:"hi", value:0.9 },
    { label:"vhi", value:0.81 }
  ]

  //Proyecto

  const tool = [
    { label:"vlo", value:1.17 },
    { label:"lo", value:1.09 },
    { label:"nom", value:1 },
    { label:"hi", value:0.9 },
    { label:"vhi", value:0.78 }
  ]

  const sced = [
    { label:"vlo", value:1.43 },
    { label:"lo", value:1.14 },
    { label:"nom", value:1 },
    { label:"hi", value:1 },
    { label:"vhi", value:1 }
  ]

  const site = [
    { label:"vlo", value:1.22 },
    { label:"lo", value:1.09 },
    { label:"nom", value:1 },
    { label:"hi", value:0.93 },
    { label:"vhi", value:0.86 },
    { label:"xhi", value:0.8 }
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

//Asignacion de valores cada que cambia el input de seleccion

  //Producto

  const handleSelectChangeRely = ( { value } ) => {
    console.log("Rely: " + value);
    setRely(value);
  }

  const handleSelectChangeData = ( { value } ) => {
    console.log("Data: " + value);
    setData(value);
  }

  const handleSelectChangeDocu = ( { value } ) => {
    console.log("Docu: " + value);
    setDocu(value);
  }

  const handleSelectChangeCplx = ( { value } ) => {
    console.log("Cplx: " + value);
    setCplx(value);
  }

  const handleSelectChangeRuse = ( { value } ) => {
    console.log("Ruse: " + value);
    setRuse(value);
  }

  //Plataforma

  const handleSelectChangeTime = ( { value } ) => {
    console.log("Time: " + value);
    setTime(value);
  }

  const handleSelectChangeStor = ( { value } ) => {
    console.log("Stor: " + value);
    setStor(value);
  }

  const handleSelectChangePvol = ( { value } ) => {
    console.log("Pvol: " + value);
    setPvol(value);
  }

  //Personal

  const handleSelectChangeAcap = ( { value } ) => {
    console.log("Acap: " + value);
    setAcap(value);
  }

  const handleSelectChangeAexp = ( { value } ) => {
    console.log("Aexp: " + value);
    setAexp(value);
  }

  const handleSelectChangePcap = ( { value } ) => {
    console.log("Pcap: " + value);
    setPcap(value);
  }

  const handleSelectChangePexp = ( { value } ) => {
    console.log("Pexp: " + value);
    setPexp(value);
  }

  const handleSelectChangeLtex = ( { value } ) => {
    console.log("Ltex: " + value);
    setLtex(value);
  }

  const handleSelectChangePcon = ( { value } ) => {
    console.log("Pcon: " + value);
    setPcon(value);
  }

  //Proyecto

  const handleSelectChangeTool = ( { value } ) => {
    console.log("Tool: " + value);
    setTool(value);
  }

  const handleSelectChangeSite = ( { value } ) => {
    console.log("Site: " + value);
    setSite(value);
  }

  const handleSelectChangeSced = ( { value } ) => {
    console.log("Sced: " + value);
    setSced(value);
  }

//Factores de escala

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
    setPMnom( A * Math.pow(Ksloc,B) );
    console.log('A: ' + A);
    console.log('Ksloc: ' + Ksloc);
    console.log('Exponente' + Math.pow(Ksloc,B))
    console.log('pmNom: ' + pmNom);
  }

  const calcularEstimacion = () => {
    calculoB();
    calculoPMnominal();
    setPMest( pmNom * ( Arely * Adata * Adocu * Acplx * Aruse * Atime * Astor * Apvol * Aacap * Aaexp * Apcap * Apexp * Altex * Apcon * Atool * Asced * Asite ) );
    console.log('pmEst: ' + pmEst);
    //console.log('Entra a calcularEstimacion');
  }

  return(
    <div className='contenedor-principal'>
      <div>
      Multiplicadores de esfuerzo<br/><br/>
        <table>
          <tbody>
            <tr>Producto</tr>
            <tr>
              <td>RELY:</td>
              <td><Select options={ rely } defaultValue={ rely[2] } onChange={ handleSelectChangeRely } /></td>
            </tr>
            <tr>
              <td>DATA:</td>
              <td><Select options={ data } defaultValue={ data[1] } onChange={ handleSelectChangeData } /></td>
            </tr>
            <tr>
              <td>DOCU:</td>
              <td><Select options={ docu } defaultValue={ docu[2] } onChange={ handleSelectChangeDocu } /></td>
            </tr>
            <tr>
              <td>CPLX:</td>
              <td><Select options={ cplx } defaultValue={ cplx[2] } onChange={ handleSelectChangeCplx } /></td>
            </tr>
            <tr>
              <td>RUSE:</td>
              <td><Select options={ ruse } defaultValue={ ruse[1] } onChange={ handleSelectChangeRuse }/></td>
            </tr>
            <br/>Producto<br/>
            <tr>
              <td>TIME:</td>
              <td><Select options={ time } defaultValue={ time[0] } onChange={ handleSelectChangeTime } /></td>
            </tr>
            <tr>
              <td>STOR:</td>
              <td><Select options={ stor } defaultValue={ stor[0] } onChange={ handleSelectChangeStor } /></td>
            </tr>
            <tr>
              <td>PVOL:</td>
              <td><Select options={ pvol } defaultValue={ pvol[1] } onChange={ handleSelectChangePvol } /></td>
            </tr>
            <tr>
              <td>SCED:</td>
              <td><Select options={ sced } defaultValue={ sced[2] } onChange={ handleSelectChangeSced }/></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <table>
          <tbody>
            <tr/>Personal<tr/>
            <tr>
              <td>ACAP:</td>
              <td><Select options={ acap } defaultValue={ acap[2] } onChange={ handleSelectChangeAcap }/></td>
            </tr>
            <tr>
              <td>AEXP:</td>
              <td><Select options={ aexp } defaultValue={ aexp[2] } onChange={ handleSelectChangeAexp }/></td>
            </tr>
            <tr>
              <td>PCAP:</td>
              <td><Select options={ pcap } defaultValue={ pcap[2] } onChange={ handleSelectChangePcap }/></td>
            </tr>
            <tr>
              <td>PEXP:</td>
              <td><Select options={ pexp } defaultValue={ pexp[2] } onChange={ handleSelectChangePexp }/></td>
            </tr>
            <tr>
              <td>LTEX:</td>
              <td><Select options={ ltex } defaultValue={ ltex[2] } onChange={ handleSelectChangeLtex }/></td>
            </tr>
            <tr>
              <td>PCON:</td>
              <td><Select options={ pcon } defaultValue={ pcon[2] } onChange={ handleSelectChangePcon }/></td>
            </tr>
            <tr/>Proyecto<tr/>
            <tr>
              <td>TOOL:</td>
              <td><Select options={ tool } defaultValue={ tool[2] } onChange={ handleSelectChangeTool }/></td>
            </tr>
            <tr>
              <td>SCED:</td>
              <td><Select options={ sced } defaultValue={ sced[2] } onChange={ handleSelectChangeSced }/></td>
            </tr>
            <tr>
              <td>SITE:</td>
              <td><Select options={ site } defaultValue={ site[2] } onChange={ handleSelectChangeSite }/></td>
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
              <td><Boton
                    name='boton'
                    calcularEstimacion={calcularEstimacion}
                    texto='Calcular' />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CcPostArq;