import { useReferenceEnregistrement } from "./reference/referenceEnregistrement";
import { useReferenceFiche } from "./reference/referenceFiche";
import { useReferenceProcessus } from "./reference/referenceProcessus";
import { useReferenceSousProcessus } from "./reference/referenceSousProcessus";

export function getFormDataProcessus(references){

    const dateMiseApplication = references.champMiseApplication.current.value;
        const confidentiel = references.champConfidentiel.current.querySelector('input[type="radio"]:checked') 
            ? references.champConfidentiel.current.querySelector('input[type="radio"]:checked').value : '';
        const iso9001 = references.choixIso9001.current.textContent;
        const iso14001 = references.choixIso14001.current.textContent;
        const securite = references.choixSecurite.current.textContent;
        const siteIso9001 = references.choixSiteIso9001.current.textContent;
        const siteIso14001 = references.choixSiteIso14001.current.textContent; 
        const siteSecurite = references.choixSiteSecurite.current.textContent;
        
        const processusGlobal = references.choixProcessusGlobal.current.textContent;
        const processusLie = references.choixProcessusLie.current.textContent;
        
        const finalite = references.champFinalite.current.innerHTML;
        const domaineApplication = references.champDomaineApplication.current.innerHTML;
        const piloteProcessus = references.choixPilote.current.textContent;
        const conditionContrainte = references.champConditionContrainte.current.innerHTML;

        const donneeEntree = references.champDonneeEntre.current.innerHTML;
        const donneeSortie = references.champDonneeSortie.current.innerHTML;
        const processusAppelant = references.champProcessusAppelant.current.textContent;
        const procesussAppele = references.champProcessusAppele.current.textContent;

        const diffusionEmail = references.choixDiffusionEmail.current.textContent;
        const diffusionPapier = references.choixDiffusionPapier.current.textContent;

        const redacteur = references.choixRedacteur.current.textContent;
        const verificateur = references.choixVerificateur.current.textContent;
        const approbateur = references.choixApprobateur.current.textContent;

        const quiRealise = references.champQuiRealise.current.innerHTML;
        const quiDecide = references.champQuiDecide.current.innerHTML;
        const quiFaitQuoiDescription = references.champFaitQuoiDescription.current.innerHTML;
        const lienMoyenDescription = references.champLienMoyenDescription.current.innerHTML;

        const quiFaitQuoiCommentaire = references.champFaitQuoiCommentaire.current.innerHTML;
        const lienMoyenCommentaire = references.champLienMoyenCommentaire.current.innerHTML;

        const performanceAttendues = references.champPerformanceAttendues.current.innerHTML;
        const propositionSurveillance = references.champPropositionSurveillance.current.innerHTML;
        


        const formData = [
            {reference : 'champMiseApplication' , champ : 'dateApplication' , valeur : dateMiseApplication},
            {reference : 'champConfidentiel' , champ : 'confidentiel' , valeur : confidentiel},
            {reference : 'choixIso9001' , champ : 'iso9001' , valeur : iso9001},
            {reference : 'choixIso14001' , champ : 'iso14001' , valeur : iso14001},
            {reference : 'choixSecurite' , champ : 'securite' , valeur : securite},
            {reference : 'choixSiteIso9001' , champ : 'siteIso9001' , valeur : siteIso9001},
            {reference : 'choixSiteIso14001' , champ : 'siteIso14001' , valeur : siteIso14001},
            {reference : 'choixSiteSecurite' , champ : 'siteSecurite' , valeur : siteSecurite},
            {reference : 'choixProcessusGlobal' , champ : 'processusGlobal' , valeur : processusGlobal},
            {reference : 'choixProcessusLie' , champ : 'processusLie' , valeur : processusLie},
            {reference : 'champFinalite' , champ : 'finalite' , valeur : finalite},
            {reference : 'champDomaineApplication' , champ : 'domaineApplication' , valeur : domaineApplication},
            {reference : 'choixPilote' , champ : 'piloteProcessus' , valeur : piloteProcessus},
            {reference : 'champConditionContrainte' , champ : 'conditionContrainte' , valeur : conditionContrainte},
            {reference : 'champDonneeEntre' , champ : 'donneeEntree' , valeur : donneeEntree},
            {reference : 'champDonneeSortie' , champ : 'donneeSortie' , valeur : donneeSortie},
            {reference : 'champProcessusAppelant' , champ : 'processusAppelant' , valeur : processusAppelant},
            {reference : 'champProcessusAppele' , champ : 'procesussAppele' , valeur : procesussAppele},
            {reference : 'choixDiffusionEmail' , champ : 'diffusionEmail' , valeur : diffusionEmail},
            {reference : 'choixDiffusionPapier' , champ : 'diffusionPapier' , valeur : diffusionPapier},
            {reference : 'choixRedacteur' , champ : 'redacteur' , valeur : redacteur},
            {reference : 'choixVerificateur' , champ : 'verificateur' , valeur : verificateur},
            {reference : 'choixApprobateur' , champ : 'approbateur' , valeur : approbateur},
            {reference : 'champQuiRealise' , champ : 'quiRealise' , valeur :  quiRealise},
            {reference : 'champQuiDecide' , champ : 'quiDecide' , valeur :  quiDecide},
            {reference : 'champFaitQuoiDescription' , champ : 'quiFaitQuoi' , valeur :  quiFaitQuoiDescription},
            {reference : 'champLienMoyenDescription' , champ : 'lienMoyen' , valeur :  lienMoyenDescription},
            {reference : 'champFaitQuoiCommentaire' , champ : 'quiFaitQuoiCommentaire' , valeur : quiFaitQuoiCommentaire},
            {reference : 'champLienMoyenCommentaire' , champ : 'lienMoyenCommentaire' , valeur : lienMoyenCommentaire},
            {reference : 'champPerformanceAttendues' , champ : 'performanceAttendues' , valeur : performanceAttendues},
            {reference : 'champPropositionSurveillance' , champ : 'propositionSurveillance' , valeur : propositionSurveillance}
        ];

    return formData;
}



export function getFormDataSousProcessus(references){

    const dateMiseApplication = references.champMiseApplication.current.value;
        const confidentiel = references.champConfidentiel.current.querySelector('input[type="radio"]:checked') 
            ? references.champConfidentiel.current.querySelector('input[type="radio"]:checked').value : '';
        const iso9001 = references.choixIso9001.current.textContent;
        const iso14001 = references.choixIso14001.current.textContent;
        const securite = references.choixSecurite.current.textContent;
        const siteIso9001 = references.choixSiteIso9001.current.textContent;
        const siteIso14001 = references.choixSiteIso14001.current.textContent; 
        const siteSecurite = references.choixSiteSecurite.current.textContent;
        
        const processusGlobal = references.choixProcessusGlobal.current.textContent;
        const processusLie = references.choixProcessusLie.current.textContent;
        
        const finalite = references.champFinalite.current.innerHTML;
        const domaineApplication = references.champDomaineApplication.current.innerHTML;
        const piloteProcessus = references.choixPilote.current.textContent;
        const conditionContrainte = references.champConditionContrainte.current.innerHTML;

        const donneeEntree = references.champDonneeEntre.current.innerHTML;
        const donneeSortie = references.champDonneeSortie.current.innerHTML;
        const processusAppelant = references.champProcessusAppelant.current.textContent;
        const procesussAppele = references.champProcessusAppele.current.textContent;

        const diffusionEmail = references.choixDiffusionEmail.current.textContent;
        const diffusionPapier = references.choixDiffusionPapier.current.textContent;

        const redacteur = references.choixRedacteur.current.textContent;
        const verificateur = references.choixVerificateur.current.textContent;
        const approbateur = references.choixApprobateur.current.textContent;

        const lecteur = references.choixLecteur.current.textContent;

        const quiRealise = references.champQuiRealise.current.innerHTML;
        const quiDecide = references.champQuiDecide.current.innerHTML;
        const quiFaitQuoiDescription = references.champFaitQuoiDescription.current.innerHTML;
        const lienMoyenDescription = references.champLienMoyenDescription.current.innerHTML;

        const formData = [
            {reference : 'champMiseApplication' , champ : 'dateApplication' , valeur : dateMiseApplication},
            {reference : 'champConfidentiel' , champ : 'confidentiel' , valeur : confidentiel},
            {reference : 'choixIso9001' , champ : 'iso9001' , valeur : iso9001},
            {reference : 'choixIso14001' , champ : 'iso14001' , valeur : iso14001},
            {reference : 'choixSecurite' , champ : 'securite' , valeur : securite},
            {reference : 'choixSiteIso9001' , champ : 'siteIso9001' , valeur : siteIso9001},
            {reference : 'choixSiteIso14001' , champ : 'siteIso14001' , valeur : siteIso14001},
            {reference : 'choixSiteSecurite' , champ : 'siteSecurite' , valeur : siteSecurite},
            {reference : 'choixProcessusGlobal' , champ : 'processusGlobal' , valeur : processusGlobal},
            {reference : 'choixProcessusLie' , champ : 'processusLie' , valeur : processusLie},
            {reference : 'champFinalite' , champ : 'finalite' , valeur : finalite},
            {reference : 'champDomaineApplication' , champ : 'domaineApplication' , valeur : domaineApplication},
            {reference : 'choixPilote' , champ : 'piloteProcessus' , valeur : piloteProcessus},
            {reference : 'champConditionContrainte' , champ : 'conditionContrainte' , valeur : conditionContrainte},
            {reference : 'champDonneeEntre' , champ : 'donneeEntree' , valeur : donneeEntree},
            {reference : 'champDonneeSortie' , champ : 'donneeSortie' , valeur : donneeSortie},
            {reference : 'champProcessusAppelant' , champ : 'processusAppelant' , valeur : processusAppelant},
            {reference : 'champProcessusAppele' , champ : 'procesussAppele' , valeur : procesussAppele},
            {reference : 'choixDiffusionEmail' , champ : 'diffusionEmail' , valeur : diffusionEmail},
            {reference : 'choixDiffusionPapier' , champ : 'diffusionPapier' , valeur : diffusionPapier},
            {reference : 'choixRedacteur' , champ : 'redacteur' , valeur : redacteur},
            {reference : 'choixVerificateur' , champ : 'verificateur' , valeur : verificateur},
            {reference : 'choixApprobateur' , champ : 'approbateur' , valeur : approbateur},
            {reference : 'choixLecteur' , champ : 'lecteur' , valeur : lecteur },
            {reference : 'champQuiRealise' , champ : 'quiRealise' , valeur :  quiRealise},
            {reference : 'champQuiDecide' , champ : 'quiDecide' , valeur :  quiDecide},
            {reference : 'champFaitQuoiDescription' , champ : 'quiFaitQuoi' , valeur :  quiFaitQuoiDescription},
            {reference : 'champLienMoyenDescription' , champ : 'lienMoyen' , valeur :  lienMoyenDescription}
        ];

    return formData;
}


export function getFormDataEnregistrement(references){
        // if (!references || !references.champConfidentiel?.current) {
        //     console.warn("References are not fully initialized", references);
        //     console.log(references.champConfidentiel);
        //     return []; // Or handle this scenario as needed
        // }

        const confidentiel = references.champConfidentiel.current.querySelector('input[type="radio"]:checked') 
            ? references.champConfidentiel.current.querySelector('input[type="radio"]:checked').value : '';
        const iso9001 = references.choixIso9001.current.textContent ;
        const iso14001 = references.choixIso14001.current.textContent;
        const securite = references.choixSecurite.current.textContent;
        
        const siteIso9001 = references.choixSiteIso9001.current.textContent;
        const siteIso14001 = references.choixSiteIso14001.current.textContent; 
        const siteSecurite = references.choixSiteSecurite.current.textContent;
        
        const processusGlobal = references.choixProcessusGlobal.current.textContent;
        const processusLie = references.choixProcessusLie.current.textContent;
        
      
        const diffusionEmail = references.choixDiffusionEmail.current.textContent;
        const diffusionPapier = references.choixDiffusionPapier.current.textContent;
        const diffusionEmailExterne = references.choixDiffusionEmailExterne.current.textContent;

        const redacteur = references.choixRedacteur.current.textContent;
        
        var lecteur = '';
        if(references.choixLecteur.current){
            lecteur = references.choixLecteur.current.textContent ;
        }else{
            console.log("pas de lecteur");
        }
        

        const champLibre = references.champChampLibre.current.innerHTML;

        const formData = [
            {reference : 'champConfidentiel' , champ : 'confidentiel' , valeur : confidentiel},
            {reference : 'choixIso9001' , champ : 'iso9001' , valeur : iso9001},
            {reference : 'choixIso14001' , champ : 'iso14001' , valeur : iso14001},
            {reference : 'choixSecurite' , champ : 'securite' , valeur : securite},
            {reference : 'choixSiteIso9001' , champ : 'siteIso9001' , valeur : siteIso9001},
            {reference : 'choixSiteIso14001' , champ : 'siteIso14001' , valeur : siteIso14001},
            {reference : 'choixSiteSecurite' , champ : 'siteSecurite' , valeur : siteSecurite},
            {reference : 'choixProcessusGlobal' , champ : 'processusGlobal' , valeur : processusGlobal},
            {reference : 'choixProcessusLie' , champ : 'processusLie' , valeur : processusLie},
            
            {reference : 'choixDiffusionEmail' , champ : 'diffusionEmail' , valeur : diffusionEmail},
            {reference : 'choixDiffusionEmailExterne' , champ : 'diffusionEmailExterne' , valeur : diffusionEmailExterne},
            {reference : 'choixDiffusionPapier' , champ : 'diffusionPapier' , valeur : diffusionPapier},
            {reference : 'choixRedacteur' , champ : 'redacteur' , valeur : redacteur},
           
            {reference : 'choixLecteur' , champ : 'lecteur' , valeur : lecteur },
            {reference : 'champChampLibre' , champ : 'champLibre' , valeur : champLibre}
        ];

    return formData;
}

export function getFormDataFiche(references){

    const dateMiseApplication = references.champMiseApplication.current.value;
        const confidentiel = references.champConfidentiel.current.querySelector('input[type="radio"]:checked') 
            ? references.champConfidentiel.current.querySelector('input[type="radio"]:checked').value : '';
        const iso9001 = references.choixIso9001.current.textContent;
        const iso14001 = references.choixIso14001.current.textContent;
        const securite = references.choixSecurite.current.textContent;
        const siteIso9001 = references.choixSiteIso9001.current.textContent;
        const siteIso14001 = references.choixSiteIso14001.current.textContent; 
        const siteSecurite = references.choixSiteSecurite.current.textContent;
        
        const processusGlobal = references.choixProcessusGlobal.current.textContent;
        const processusLie = references.choixProcessusLie.current.textContent;
        
        const finalite = references.champFinalite.current.innerHTML;
        const domaineApplication = references.champDomaineApplication.current.innerHTML;
        const conditionContrainte = references.champConditionContrainte.current.innerHTML;

       
        const diffusionEmail = references.choixDiffusionEmail.current.textContent;
        const diffusionPapier = references.choixDiffusionPapier.current.textContent;

        const redacteur = references.choixRedacteur.current.textContent;
        const verificateur = references.choixVerificateur.current.textContent;
        const approbateur = references.choixApprobateur.current.textContent;

        var lecteur = '';
        if(references.choixLecteur.current){
            lecteur = references.choixLecteur.current.textContent ;
        }else{
            console.log("pas de lecteur");
        }
        const quiFaitQuoiDescription = references.champFaitQuoiCommentaire.current.innerHTML;
        const lienMoyenDescription = references.champLienMoyenCommentaire.current.innerHTML;

        const formData = [
            {reference : 'champMiseApplication' , champ : 'dateApplication' , valeur : dateMiseApplication},
            {reference : 'champConfidentiel' , champ : 'confidentiel' , valeur : confidentiel},
            {reference : 'choixIso9001' , champ : 'iso9001' , valeur : iso9001},
            {reference : 'choixIso14001' , champ : 'iso14001' , valeur : iso14001},
            {reference : 'choixSecurite' , champ : 'securite' , valeur : securite},
            {reference : 'choixSiteIso9001' , champ : 'siteIso9001' , valeur : siteIso9001},
            {reference : 'choixSiteIso14001' , champ : 'siteIso14001' , valeur : siteIso14001},
            {reference : 'choixSiteSecurite' , champ : 'siteSecurite' , valeur : siteSecurite},
            {reference : 'choixProcessusGlobal' , champ : 'processusGlobal' , valeur : processusGlobal},
            {reference : 'choixProcessusLie' , champ : 'processusLie' , valeur : processusLie},
            {reference : 'champFinalite' , champ : 'finalite' , valeur : finalite},
            {reference : 'champDomaineApplication' , champ : 'domaineApplication' , valeur : domaineApplication},
            {reference : 'champConditionContrainte' , champ : 'conditionContrainte' , valeur : conditionContrainte},

            {reference : 'choixDiffusionEmail' , champ : 'diffusionEmail' , valeur : diffusionEmail},
            {reference : 'choixDiffusionPapier' , champ : 'diffusionPapier' , valeur : diffusionPapier},
            
            {reference : 'choixRedacteur' , champ : 'redacteur' , valeur : redacteur},
            {reference : 'choixVerificateur' , champ : 'verificateur' , valeur : verificateur},
            {reference : 'choixApprobateur' , champ : 'approbateur' , valeur : approbateur},
            {reference : 'choixLecteur' , champ : 'lecteur' , valeur : lecteur },

            {reference : 'champFaitQuoiDescription' , champ : 'quiFaitQuoi' , valeur :  quiFaitQuoiDescription},
            {reference : 'champLienMoyenDescription' , champ : 'lienMoyen' , valeur :  lienMoyenDescription}
        ];

    return formData;
}



