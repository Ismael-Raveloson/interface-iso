import React, { Component } from 'react'
import {
  AccordionTitle,
  AccordionContent,
  Accordion,
  Icon
} from 'semantic-ui-react'
import ListContentType from './ListContentType';
import './css/list.css';

export default class AccordionListType extends Component {
  state = { 
    activeIndex: 0,
    allExpanded: false,
  };

  expandAll = () =>{
    this.setState({ allExpanded: true });
  }

  collapseAll = () =>{
    this.setState({ allExpanded: false });
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex , allExpanded } = this.state

    let newIndex;
    if (allExpanded) {
      newIndex = activeIndex === index ? -1 : index;
    } else {
      newIndex = index;
    }
    
    if(activeIndex === newIndex){
      newIndex = '';
    }
    // const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex , allExpanded } = this.state
    const { data } = this.props;

    return (
      <Accordion>
        {data.map((item,index) =>(
          <div key={item.idTypeDocument}>
            <AccordionTitle active={activeIndex === index} index={index} onClick={this.handleClick} className='accordion-section'>
              <section style={{fontWeight:'bold',fontSize:'1.1em',marginTop:'1em'}} className="accordion-title-typedoc"><Icon name='dropdown' />{item.nomTypeDocument} </section>
            </AccordionTitle>

            <AccordionContent style={{marginTop:'1em'}} active={activeIndex === index} className="accordion content">
              <ListContentType dataList={item.listeDocument} typeDocument={item.idTypeDocument}></ListContentType>
            </AccordionContent>
          </div>
        ))}
      </Accordion>
    )
  }

}