import './css/base.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ValeurModal from './ValeurModal';
export default function Base(props){

    
    const {type , references , edition} = props;

    return(
        <>
            <div className="paper-one">
                    <div className="entete" contentEditable='false'>
                        <div contentEditable='false' className="logo">
                            <img src="/logo.png" alt="" style={{width:'9em',margin:'0 auto'}}/>
                        </div>
                        <div className='titre' contentEditable="false" style={{textAlign:'center'}}>
                            <div className="div-content-editable" role="textbox"  suppressContentEditableWarning={true} contentEditable={edition} style={{textAlign:'center',color:'red',height:'fit-content'}}>
                                <h1>Titre du document</h1> 
                            </div>
                            
                            <div style={{marginTop:'0.8em',fontWeight:'800'}}>
                                <h3>{type}</h3> 
                            </div>

                            <div >Ce document est en cours de rédaction !</div >
                        </div>
                        <div contentEditable='false' className='information'>
                            <div>
                                <span className='information-list'>Page :</span><span className='information-value'> 1 / 4</span>
                            </div>

                            <div > 
                                <span className='information-list'>Etat :</span><span className='information-value'> Brouillon</span>
                            </div>
                            
                            <div > 
                                <span className='information-list'>N° Révision :</span>
                                <span className='information-value'></span>
                            </div>

                            <div>
                                <span className='information-list'>Date : </span>
                                <span className='information-value'></span>
                            </div>
                        </div>
                    </div>

                {/* début section 1 presentation */}
                    <div className='presentation'>
                        <div className='title'>Présentation</div>
                        
                        <div className='presentation-grid'>
                            <div className='presentrow-one'>
                                
                                {type === 'Enregistrement' || type === 'Navigateur' ? (
                                    <>
                                        <div className='champ'></div>
                                        <div className='valeur-champ'></div>
                                    </>
                                ) : (
                                    <>
                                        <div className='champ'>Mise en application le</div>
                                        <div className='valeur-champ'><input type='date' ref={references.champMiseApplication}/></div>
                                    </>
                                )}

                                
                                <div className='champ'>Pays</div>
                                <div className='valeur-champ'>Madagascar</div>
                            </div>

                            <div className='presentrow-two'>
                                <div className='champ'>&nbsp;</div>
                                <div className='valeur-champ'>&nbsp;</div>
                                
                                <div className='champ'>Confidentiel</div>
                                <div className='valeur-champ' ref={references.champConfidentiel} style={{paddingTop:'0.2em',display:'flex'}}>
                                    {console.log(edition)}
                                    {edition ? (
                                        <>
                                            <div style={{display:'flex',alignItems:'center'}}>
                                                <input type='radio' name='confidentiel' value={'Oui'} id='oui'/>
                                                <label htmlFor='oui'>Oui</label>
                                            </div>

                                            <div style={{display:'flex',alignItems:'center',marginLeft:'20px'}}>
                                                <input type='radio' name='confidentiel' value={'Non'} id='non'/>
                                                <label htmlFor='non'>Non</label>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            Oui / Non
                                        </>
                                    )}
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                {/* fin section 1 presentation */}

                {/* début section 2 liste iso */}
                    <div className='liste-iso'>
                        <div className='title'>
                            <div></div>
                            <div style={{paddingLeft:'1em'}}>ISO 9001</div>
                            <div style={{paddingLeft:'1em'}}>ISO 14001</div>
                            <div style={{paddingLeft:'1em'}}>Sécurité</div>
                        </div>
                        <div className='activité'>
                            <div className='champ'>Activités</div>

                            <ValeurModal type="activite" reference={references.choixIso9001} edition={edition}></ValeurModal>
                            
                            <ValeurModal type="activite" reference={references.choixIso14001} edition={edition}></ValeurModal>

                            <ValeurModal type="activite" reference={references.choixSecurite} edition={edition}></ValeurModal>       
                        </div>

                        

                        <div className='site'>
                            <div className='champ'>Site</div>

                            <ValeurModal type="site" reference={references.choixSiteIso9001} edition={edition}></ValeurModal>

                            <ValeurModal type="site" reference={references.choixSiteIso14001}edition={edition}></ValeurModal>

                            <ValeurModal type="site" reference={references.choixSiteSecurite} edition={edition}></ValeurModal>
                        </div> 
                    </div>
                {/* fin section 2 liste iso */}

                {/* début section 3 liste processus iso */}
                    <div className='liste-processus'>
                        <div className='title'>
                            <div style={{paddingLeft:'1.5em'}}>Processus Global</div>
                            <div style={{paddingLeft:'1.5em'}}>Processus Lie</div>
                        </div>
                        <div className='processus'>

                            <div className='valeur-champ-choice'>
                                <span className='span-value' ref={references.choixProcessusGlobal}> </span>
                            </div>

                            <div className='valeur-champ' ref={references.choixProcessusLie}>&nbsp;</div>
                        </div>
                    </div>
                {/* fin section 3 liste processus iso */}
                
                {/* début section 4 finalité */}
                {type === 'Enregistrement' || type === 'Navigateur' ?(
                     <></>
                ) : (
                    <div className='finalite' contentEditable="false">
                        <div className='finalite-row'>
                            <div className='champ'>Finalités</div>
                            <div className='div-content-editable valeur-champ' role="textbox" ref={references.champFinalite} suppressContentEditableWarning={true} contentEditable={edition}></div>
                        </div>

                        <div className='finalite-row'>
                            <div className='champ'>Domaine d'application</div>
                            <div className='div-content-editable valeur-champ' role="textbox" ref={references.champDomaineApplication} suppressContentEditableWarning={true} contentEditable={edition}></div>
                        </div>
                        
                        {type === "Fiche d'instruction" ?(
                            <></>
                        ) :  (
                            <div className='finalite-row'>
                                <div className='champ'>Pilote du processus</div>
                                <div className='div-content-editable valeur-champ' role="textbox" ref={references.choixPilote}></div>
                            </div>
                        )}
                        

                        <div className='finalite-row'>
                            <div className='champ'>Condition ou contrainte</div>
                            <div className='div-content-editable valeur-champ' role="textbox" ref={references.champConditionContrainte} suppressContentEditableWarning={true} contentEditable={edition}></div>
                        </div>
                    </div>
                )

                }
                {/* fin section 4 finalité */}

                {/* début section 5 données */}
                {type === 'Enregistrement' || type === 'Navigateur' || type === "Fiche d'instruction" ? (
                    <></>
                ) : (
                    <div className='donnees' contentEditable="false">
                        <div className='donnees-titre'>
                            <div style={{paddingLeft:'1.5em'}}>Données d'entrée</div>
                            <div style={{paddingLeft:'1.5em'}}>Données de sortie</div>
                        </div>

                        <div className='donnees-valeur'>
                            <div className='div-content-editable valeur-champ' role="textbox" ref={references.champDonneeEntre} suppressContentEditableWarning={true} contentEditable={edition}></div>
                            <div className='div-content-editable valeur-champ' role="textbox" ref={references.champDonneeSortie} suppressContentEditableWarning={true} contentEditable={edition}></div>
                        </div>
                    </div>
                )}

                {/* fin section 5 données */}

                {/* début section 6 processus appel*/}
                { type === 'Enregistrement' || type === 'Navigateur' || type === "Fiche d'instruction" ? (
                    <></>
                ) : ( 
                    <div className='processus-appel'>
                        <div className='titre'>
                            <div style={{paddingLeft:'1.5em'}}>Processus Appelant</div>
                            <div style={{paddingLeft:'1.5em'}}>Processus Appelé</div>
                        </div>
                        <div className='valeur'>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                )}
                {/* fin section 6 processus appel*/}
                
                {/* debut intersection pour Rédacteur */}
                { type === 'Enregistrement' || type === 'Navigateur' ?(
                    <div className='redacteur-row' contentEditable='false'>
                        <div className='champ'>Rédacteur</div>
                        <div className='div-content-editable valeur-champ' role="textbox" ref={references.choixRedacteur} suppressContentEditableWarning={true} contentEditable={edition} ></div>
                    </div>
                ) : (
                    <></>
                )} 
                

                {/* fin intersection pour Rédacteur */}


                {/* début section 7 diffusion */}
                    <div className='diffusion'>
                        <div className='diffusion-titre'>Diffusion</div>
                        
                        {type === 'Enregistrement' || type === 'Navigateur' ?(
                            <>
                                <div className='diffusion-row'>
                                    <div className='champ' style={{minHeight:'6em'}}>Par email</div>
                                    <div className='valeur-champ' ref={references.choixDiffusionEmail}></div>
                                </div>

                                <div className='diffusion-row'>
                                    <div className='champ' style={{minHeight:'6em'}}>Adresse email externe</div>
                                    <div className='valeur-champ' ref={references.choixDiffusionEmailExterne}></div>
                                </div>

                                <div className='diffusion-row'>
                                    <div className='champ'style={{minHeight:'5em'}}>Par papier</div>
                                    <div className='valeur-champ' ref={references.choixDiffusionPapier}></div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='diffusion-row'>
                                    <div className='champ' >Par email</div>
                                    <div className='valeur-champ' ref={references.choixDiffusionEmail}></div>
                                </div>

                                <div className='diffusion-row'>
                                    <div className='champ' >Par papier</div>
                                    <div className='valeur-champ'></div>
                                </div>
                            </>
                        )}
                        
                    </div>
                {/* fin section 7 diffusion */}

                {/* début section 8 workflow */}
                    { type === 'Enregistrement' || type === 'Navigateur' ? (
                        <></>
                    ) : ( 
                        <div className='workflow'>
                            <div className='workflow-titre'>Circuit de validation</div>

                            <div className='workflow-row'>
                                <div className='champ'>Rédacteur</div>
                                <div className='valeur-champ'></div>
                                <div className='valeur-champ' style={{color:'rgb(15, 150, 15)',fontWeight:'800'}}>En cours de rédaction...</div>
                            </div>

                            <div className='workflow-row'>
                                <div className='champ'>Vérificateur</div>
                                <div className='valeur-champ'></div>
                                <div className='valeur-champ' style={{color:'rgb(15, 150, 15)',fontWeight:'800'}}>En attente</div>
                            </div>

                            <div className='workflow-row'>
                                <div className='champ'>Approbateur</div>
                                <div className='valeur-champ'></div>
                                <div className='valeur-champ' style={{color:'rgb(15, 150, 15)',fontWeight:'800'}}>En attente</div>
                            </div>
                        </div>
                    )}
                {/* fin section 8 workflow */}
            </div>
        </>
    );
}

