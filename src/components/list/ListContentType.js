import { useEffect } from 'react';
import './list.css';
export default function ListContentType(props){
    const {dataList} = props;
    
    useEffect(() => {
        const gridContainers = document.querySelectorAll('.liste');
    
        gridContainers.forEach((container, index) => {
          if (index % 2 === 1) {
            container.classList.add('alternate-color');
          }
        });
      }, []);



      return (
        <div className="content">
          {dataList.map((item, index) => (
            <div className="ui grid container liste" key={index}>
              <div className="row">
                
                <div className="nine wide column" style={{display:'flex'}}>
                  <div className="key">{item.confidentiel === true && <i className="key icon" style={{visibility:'visible',width:'2rem',color:'goldenrod'}}></i>}</div>
                  <div>{item.nom}</div>
                </div>

                <div className="two wide column">
                    {item.dateApplication}
                </div>

                <div className="one wide column">
                  {item.nombreRevision !== 0 && <span>{item.nombreRevision}</span>}
                </div>

                <div className="three wide column">
                  <i className="check circle outline icon" style={{ visibility: 'visible', marginRight: '10px', color: 'limegreen', fontSize: '1.1em'}}></i>
                    {item.status}
                    {item.modification === true && <span style={{ paddingLeft: '10px', color: 'red', fontSize: '1.65em' , fontWeight:'bold' }}>*</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
}