import Header from "../../components/header/Header";
import AccordionListType from "../../components/list/AccordionListType";
import { useParams } from "react-router-dom";
import { getDataFromUrl } from "../../function";
import { useEffect } from "react";
import { useState } from "react";

export default function DocumentValable(){
    
    const { identifiant } = useParams();

    const[listeDocument , setListeDocument] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await getDataFromUrl(`${apiUrl}/viewdocument/valable/${identifiant}`);
                setListeDocument(response);
            }catch(error){
                console.error("Erreur lors de la récupération des données : ",error);
            }
        };
        fetchData();
    },[]);

    console.log(listeDocument);
    console.log(identifiant);

    const data =
    [
        {id:1,nomTypeDocument:'Processus',listeDocument:
            [   
                {id:1400,nom:'Planification',dateApplication:'03/01/2023',nombreRevision:8,status:'Applicable',confidentiel:false,modification:true},
                {id:1410,nom:'Procédure de sécurisation des matières premières',dateApplication:'16/03/2021',nombreRevision:0,status:'Applicable',confidentiel:true,modification:false}
            ]
        },
        {id:2,nomTypeDocument:'Fiche d\'instruction',listeDocument:
            [   
                {id:1420,nom:'Code de conduite des affaires , conflits d\'intérêt et formations compliance',dateApplication:'03/01/2023',nombreRevision:1,status:'Applicable',confidentiel:false,modification:true},
                {id:1421,nom:'Comité d\'Hygiène , de Santé et de Sécurité au travail',dateApplication:'09/08/2023',nombreRevision:4,status:'Applicable',confidentiel:false,modification:false},
                {id:1422,nom:'Gestion des changements',dateApplication:'05/09/2022',nombreRevision:4,status:'Applicable',confidentiel:false,modification:false},
                {id:1423,nom:'Gestion des RCA (Root Cause Analysis)',dateApplication:'24/08/2022',nombreRevision:1,status:'Applicable',confidentiel:false,modification:false}
            ]
        },
        {id:4,nomTypeDocument:'Enregistrement',listeDocument:
            [   
                {id:1458,nom:'Analyse des risques érgonomiques Ibity',dateApplication:'06/05/2021',nombreRevision:1,status:'Applicable',confidentiel:false,modification:false},
                {id:1455,nom:'Analyse des risques dépôts',dateApplication:'06/05/2022',nombreRevision:0,status:'Applicable',confidentiel:false,modification:false},
                {id:1453,nom:'Analyse des risques usine Ibity',dateApplication:'03/01/2023',nombreRevision:4,status:'Applicable',confidentiel:false,modification:true},
                {id:1452,nom:'Aspect Environnementaux Significatifs & Plan de Management Environnemental Ibity',dateApplication:'06/05/2022',nombreRevision:3,status:'Applicable',confidentiel:true,modifié:false}
            ]
        }
    ];

    return(
        <>
            <Header type="Valable"></Header>
            <div className="ui container" style={{paddingTop:'7.5em'}}>
                <AccordionListType data={data}></AccordionListType>
            </div>
        </>
    )
}