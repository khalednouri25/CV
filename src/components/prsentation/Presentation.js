import React, { Component } from 'react'
import '../../css/Presentation.scss'
class Presentation extends Component {
  render() {
    return(
      <div className="presentation">
        <div className="title">
          Qui suis-je?
        </div>
        <div className="text-presentation">
          <ul>
            <li>
              Diplômé d'une maitrise en informatique obtenue á l'UQÁM. 
            </li>  
            <li>
              Connaissances solides avec plus de 7 ans d’études et d’application de différentes technologies et langages de programmation (TypeScript, JavaScript, Java, JSON, JQuery, Ajax, C#, SQL, PHP, HTML5, CSS) et Frameworks (React, Bootstrap, Angular, .Net).
            </li>
            <li>
              Grande facilité à s’adapter à un nouvel environnement.
            </li>
            <li>
              Curieux, créatif et a toujours de bonnes idées.
            </li>
            <li>
              Polyvalent et passionné, le souci du détail devient ma priorité.
            </li>
          </ul>
        </div>
        <div className="formation">
          <h1>Formations et Réalisations académiques </h1>
          <h3>Maîtrise en informatique | 2019</h3>
          <h4>Université du Québec à Montréal (UQÀM)</h4>
          <ul>
            <li>
              Développement d’une nouvelle approche de détection de communautés (clustering) dans les graphes bipartis en utilisant le langage Python.
            </li>
            <li>
              Réalisation d’un mémoire portant sur la détection de communautés dans les graphes bipartis.
            </li>
            <li>
              Comparaison et application des différents algorithmes de classification et de clustering des
                données sur différentes données massives.
            </li>
            <li>
              Réalisation d’un projet portant sur les exigences et spécification des systèmes logiciels.
            </li>
            <li>
              Conception d’une base de données d’un parc zoologique avec les contraintes et les triggers en
                utilisant SQL.
            </li>
            <li>
              Réalisation d’un projet qui se rattache à l’indexation et la recherche des textes dans un corpus
                textuel en utilisant la bibliothèque Lucene et le langage de programmation Java.
            </li>
            <li>
              <span>Principaux cours étudiés :</span> apprentissage automatique, exigences et spécifications des systèmes logiciels, nouvelles perspectives en base de données, reconnaissance des formes,
                clustering et classification des données massives.
            </li>

          </ul>
        </div>

        <div className="lagn_log">
          <h1>
            Langages et Logiciels
          </h1>
          <ul>
            <li>
              TypeScript, JavaScript, Java, HTML5, CSS, ASP.Net, C#,  Python, C++, PHP, SQL, Matlab, RDF, SPARQL, .
            </li>
            <li>
              React,  Bootstrap, JSON, JQuery, Ajax,
            </li>
            <li>
              Git, Nutcache, Github, VS code, MS Visual Studio, WebStrom, Pycharm, PhpMyAdmin, Eclipce.
            </li>
          </ul>
        </div>
        
        <div className="competences">
          <h1>
            Compétences
          </h1>
          <ul>
            <li>
              Développement d’une application intelligente basée sur les agents BDI (Belief, Desire, Intention) avec Java et XML.            </li>
            <li>
              Développement d’une application d’apprentissage de code de la route en utilisant Java et SQL.      
            </li>
            <li>
              Réalisation des cahiers de charge pour des projets informatiques.
            </li>
            <li>
              Capacité à travailler en équipe et à proposer des recommandations.       
           </li>
            <li>
              <span>Langues:</span> Français, Anglais (fonctionnel) et Arabe.
            </li>
            <li>
              <span>Autres: </span> permis de conduire classe 5, une automobile.
            </li>
          </ul>
        </div>

        <div className="realisations">
          <h1>
            Réalisations :
          </h1>
          <ul>
            <li>
              <span>Article: BiNeTClus,</span> Bipartite Network Community Detection based on Transactional Clustering, Accepté le 05/09/2020)
            </li>
            <li>
              <span>Mémoire de maîtrise: </span> La détectoin de communautés dans les graphes bipartis: <a href="https://archipel.uqam.ca/12673/1/M16118.pdf"> https://archipel.uqam.ca/12673/1/M16118.pdf</a> (avec mention excellent)
            </li>
            <li>
              <span>Github:</span> <a href="https://github.com/khalednouri25">https://github.com/khalednouri25</a>
            </li>
          </ul>
        </div>

        <div className="experiences">
          <h1>
            experiences
          </h1>
          <h4>
            Développement de petites applications (front-end, back-end) Mars 2020 á ce jours (GitHub) 
         </h4>
         <ul>
           <li>
             Développement de composants react (sign in, sign up) qui se connectent au server (php) et la base de données (Github).
           </li>
           <li>
             Développement d’un Contact Manager (reactjs, php, Sql) (Github):
             <ul>
               <li>
                 Afficher la liste des contacts depuis la base de données.
               </li>
               <li>
                 Ajouter un nouveau contact.
               </li>
               <li>
                 Afficher une Pie Chart basant sur le sexe des contacts.
               </li>
             </ul>
           </li>
           <li>
             Présenter Mon CV par des composants react.
           </li>
           <li>
             Developpement de Reset Password par des composants react et php (back-end).
           </li>
         </ul>

         <h4>
           Deux ans de stage au laboratoire Latece (Laboratoire de recherche sur les technologies du commerce électronique) de l’UQÁM.
         </h4>
         <ul>
           <li>
             Développement d’une nouvelle application de clustering des graphes bipartis avec Python.
           </li>
           <li>
             Participer aux conférences.
           </li>
           <li>
             Faire des recherches et des comparaisons sur différentes approches d’analyse de données.
           </li>
           <li>
             Implémentation et comparaison de quelques approches récentes de clustering des graphes.
           </li>
         </ul>

         <h4>
           Surveillant des examens | 2016 à 2019
         </h4>
         <p>
           Centre communautaire de loisirs Sainte-Catherine d’Alexandrie, Montréal
         </p>
         <ul>
           <li>
             Présenter des cours d’informatique aux personnes âgées.
           </li>
           <li>
             Aider les personnes âgées á utiliser l’ordinateur.
           </li>
         </ul>
         <h4>
           Technicien informatique et Gérant d’une pharmacie | 2014 à 2015
         </h4>
         <p>
           Pharmacie Nouri Fayçal, Constantine, Algérie.
         </p>

         <ul>
           <li>
             Assurer la maintenance du logiciel de vente (CHIFA).
           </li>
           <li>
             Informatiser les prescriptions.
           </li>
           <li>
             Vendeur de médicaments.
           </li>
           <li>
             Effectuer l’inventaire.
           </li>
         </ul>

         <h4>
           Master en génie logiciel| 2014
         </h4>
         <p>
           Université de Constantine 2, Algérie.
         </p>
         <ul>
           <li>
             Réalisation d’un mémoire qui se rattache sur les agents intelligents BDI (Belief – Desire – Intention).
           </li>
           <li>
             Développement d’une application intelligente basée sur les agents intelligents BDI avec Java et XML.
           </li>
           <li>
             Développement d’une application web qui se base sur les webs services SOAP, avec PHP.
           </li>
         </ul>

         <h4>
           Licence en génie logiciel, Algérie 2008 | 2012
         </h4>
         <p>
           Université de Constantine 2
         </p>
         <ul>
           <li>
             Réalisation d’un mémoire qui se rattache au développement d’une application d’apprentissage du Code de la route.
           </li>
           <li>
             Modélisation, développement et conception d’une application d’apprentissage du code de la route en utilisant UML, Java et SQL.
           </li>
         </ul>
         <h4>
           Delf B2 (diplôme d’études en langue française) 2012
         </h4>
         <p>
           Centre culturel français – Constantine – Algérie
         </p>
        </div>
      </div>
    )
  }
}

export default Presentation