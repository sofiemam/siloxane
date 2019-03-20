/**
 * @author MBM
 */
const express = require('express');

const errorDbHandler = require('../middleware/erreur-db');

const router = express.Router();

// const chekAuth = require("../middleware/check-auth");

// const { suipiLike, suipiConcat } = require('../util');
// const { envoyerMailSmtp } = require('../outils/smtp');

// const Modele = require("../models/Modele");
// const SousModele = require("../models/Sous_modele");
// const Zone = require('../models/Zone');
// const FormatPage = require('../models/Format_Page');
// const Info_sous_modele = require('../models/Info_sous_modele');

// const Info_sous_modele_actif = require('../models/Info_sous_modele_actif');

// const Expediteur_smtp = require('../models/Expediteur_smtp');

// const Relation = require('../models/Relation');
// const Resultat_actif = require("../models/Resultat_actif");

// router.route('/getAllModeles').get(chekAuth, (req, res) => {
//   // Modele.query().eager('list_sous_modele').then(result => {
//   //   res.status(201).json(result);
//   // }).catch(error => errorDbHandler.sendErrorHttp(error, res));


//   Modele.query()

//     .eager({
//       list_sous_modele: true
//     })
//     .then(modele => {
//       let result = [];

//       modele.forEach((elementM, index) => {
//         let model = {
//           id: elementM.id,
//           intitule: elementM.intitule,
//           type: elementM.type,
//           image: elementM.image,

//           list_sous_modele: []
//         };

//         elementM.list_sous_modele.forEach((elementS, index) => {
//           if (elementS.date_suppression == null) {
//             model.list_sous_modele.push({
//               id: elementS.id,
//               intitule: elementS.intitule,
//               date_creation: elementS.date_creation,
//               date_valid_debut: elementS.date_valid_debut,
//               date_valid_fin: elementS.date_valid_fin,
//               date_suppression: elementS.date_suppression,
//               id_modele: elementS.id_modele,
//               id_utilisateur: elementS.id_utilisateur
//             });
//           }
//         });

//         result.push(model);
//       });

//       res.status(201).json(result);
//     })
//     .catch(err => errorDbHandler.sendErrorHttp(err, res));
// })

// router.route('/getAllSousModeles/:id').get(chekAuth, (req, res) => {
//   const idModele = req.params.id;
//   SousModele.query()
//     .join('Modele', 'Modele.id', '=', 'Sous_modele.id_modele')
//     // .eagerAlgorithm(SousModele.JoinEagerAlgorithm)
//     // .eager('Modele')
//     .select('Sous_modele.id', 'Sous_modele.id_modele', 'Modele.type as typeModele', 'Sous_modele.intitule')
//     .where('Modele.id', idModele)
//     .then(result => {
//       console.log('result', result)
//       res.status(201).json(result);
//     }).catch(error => errorDbHandler.sendErrorHttp(error, res));
// })

// router.route('/getSousModelById/:obj').get((req, res) => {
//   const obj = JSON.parse(req.params.obj);
//   const idSousModele = obj.idSousModele;
//   const idModele = obj.idModele;

//   Modele.query().findById(idModele)
//     .eager({
//       list_sous_modele: {
//         list_info_sous_modele: true
//       }
//     })
//     .modifyEager('list_sous_modele', builder => {
//       builder.where('id', '=', idSousModele);
//     })
//     .then(result => {
//       result.list_sous_modele[0].typeModele = result.type;
//       const resultat = result.list_sous_modele[0];

//       let arrayInfoSousModele = eval(resultat.list_info_sous_modele);
//       for (i = 0; i < arrayInfoSousModele.length; i++) {
//         if (arrayInfoSousModele[i].zone_num == 4201) {
//           arrayInfoSousModele[i].valeur = eval(arrayInfoSousModele[i].valeur) || [];
//         }

//       }
//       console.log(arrayInfoSousModele)
//       resultat.list_info_sous_modele = arrayInfoSousModele;

//       console.log('resultat', resultat)
//       // result.list_info_sous_modele = result.list_info_sous_modele.map(info => {
//       //   console.log('infos ', info)
//       //   if (info.zone_num == 4201) {
//       //     info.valeur = eval(info.valeur) || []
//       //   }

//       //   return info;
//       // })




//       res.status(201).json(resultat);
//     }).catch(error => errorDbHandler.sendErrorHttp(error, res));
// })

// router.route('/getZoneByNum/:numZone').get(chekAuth, (req, res) => {
//   const numZone = req.params.numZone; //"1"

//   Zone.query().where('num', numZone).then(result => {
//     res.status(201).json(result);
//   }).catch(error => errorDbHandler.sendErrorHttp(error, res));
// })

// router.route('/getModelesTree').get(chekAuth, async (req, res, next) => {
//   let nid = 1;
//   Modele.query()

//     .eager({
//       list_sous_modele: true
//     })
//     .then(modele => {
//       let result = [];

//       modele.forEach((elementM, index) => {
//         let sousModele = {
//           id: elementM.id,
//           nid: nid++,
//           text: elementM.intitule,
//           classIcon: 'theme-tree-icon',
//           expanded: false,
//           items: [],
//         };

//         elementM.list_sous_modele.forEach((elementS, index) => {
//           if (elementS.date_suppression == null) {

//             const sousModeleByType = {
//               id: elementS.id,
//               idParent: elementM.id,
//               nid: nid++,
//               text: elementS.intitule,
//               expanded: false,

//             }
//             switch (elementM.type) {
//               case 'EXP':
//                 sousModeleByType.classIcon = 'icone-modele-excel';
//                 break;
//               case 'UNI':
//                 sousModeleByType.classIcon = 'icone-modele-uni';
//                 break;
//               case 'LIS':
//                 sousModeleByType.classIcon = 'icone-modele-lis';
//                 break;

//               case 'ETI':
//                 sousModeleByType.classIcon = 'icone-modele-eti';
//                 break;
//               case 'WORD':
//                 sousModeleByType.classIcon = 'icone-modele-word';
//                 break;
//               case 'RUP':
//                 sousModeleByType.classIcon = 'icone-modele-rup';
//                 break;
//               case 'SMS':
//                 sousModeleByType.classIcon = 'icone-modele-sms';
//                 break;
//               case 'SMTP':
//                 sousModeleByType.classIcon = 'icone-modele-smtp';
//                 break;



//               default: sousModeleByType.classIcon = '';
//             }

//             sousModele.items.push(sousModeleByType);
//           }
//         });

//         result.push(sousModele);
//       });

//       res.status(201).json(result);
//     })
//     .catch(err => errorDbHandler.sendErrorHttp(err, res));
// });

// router.route('/getAllFormatsPage').get(chekAuth, (req, res) => {
//   FormatPage.query().then(result => {
//     res.status(201).json(result);
//   }).catch(error => errorDbHandler.sendErrorHttp(error, res));
// })

// router.route('/createSousModele/:obj').get(chekAuth, async (req, res, next) => {
//   const obj = JSON.parse(req.params.obj);
//   const idSousModele = obj.idSousModele;
//   const intitule = obj.intitule;
//   const idUser = obj.idUser;

//   SousModele.query().findById(idSousModele).eager('list_info_sous_modele').then(sousModele => {
//     delete sousModele.id;
//     sousModele.intitule = intitule;
//     sousModele.id_utilisateur = idUser;
//     sousModele.date_creation = new Date();
//     sousModele.date_valid_debut = null;
//     sousModele.date_valid_fin = null;
//     sousModele.date_suppression = null;



//     for (let i = 0; i < sousModele.list_info_sous_modele.length; i++) {
//       delete sousModele.list_info_sous_modele[i].id;
//       delete sousModele.list_info_sous_modele[i].id_sous_modele;

//     }

//     SousModele.query().insertGraph(sousModele)
//       .then(() => {
//         res.status(201).json("succes");
//       })
//       .catch(err => { errorDbHandler.sendErrorHttp(err, res) });
//   });

// });

// router.route('/deleteSousModele/:idSousModele').get(chekAuth, (req, res, next) => {

//   const idSousModele = req.params.idSousModele;

//   console.log('idSousModele : ', idSousModele);

//   SousModele.query().findById(idSousModele).then(data => {
//     data.date_suppression = new Date();
//     delete data.id;
//     SousModele.query().update(data).where('id', idSousModele)
//       .then(result => {
//         console.log('result : ', result);
//         if (result) res.status(201).json("succes");
//         else res.status(202).json("Resultat introuvable");
//       })
//       .catch(err => { errorDbHandler.sendErrorHttp(err, res) });
//   })
//     .catch(err => { errorDbHandler.sendErrorHttp(err, res) });
// })

// router.route('/updateSousModele/:obj').get(chekAuth, (req, res, next) => {
//   const obj = JSON.parse(req.params.obj);
//   if (!obj.list_info_sous_modele) {
//     res.status(400).json({ message: "veuillez modifier un sous modele" });
//     return;
//   }
//   let arrayInfoSousModele = obj.list_info_sous_modele;
//   for (i = 0; i < arrayInfoSousModele.length; i++) {
//     if (arrayInfoSousModele[i].zone_num == 4201 || arrayInfoSousModele[i].zone_num == 4301) {
//       // arrayInfoSousModele[i].valeur = (JSON.stringify(arrayInfoSousModele[i].valeur))
//     }
//   }
//   obj.list_info_sous_modele = arrayInfoSousModele;

//   SousModele.query().findById(obj.id).then(data => {

//     data.list_info_sous_modele = obj.list_info_sous_modele;
//     // delete data.id;
//     SousModele.query().upsertGraph(data).where('id', obj.id)
//       .then(result => {
//         console.log('data ### : ', data);
//         if (result) res.status(201).json("succes");
//         else res.status(202).json("Resultat introuvable");
//       })
//       .catch(err => { errorDbHandler.sendErrorHttp(err, res) });
//   })
//     .catch(err => { errorDbHandler.sendErrorHttp(err, res) });
// })

// //#region  Lancer Edition

// // recuperer le contenu du SMTP d'un sous modèle
// router.route('/getContenuSmtpSousModele/:idSousModele').get(chekAuth, (req, res) => {
//   const idSousModele = req.params.idSousModele;
//   if (!idSousModele) {
//     res.status(400).json({ message: "veuillez renseignez l'id du sous modèle" });
//     return;
//   }

//   Info_sous_modele_actif.query()
//     .findOne({ 'zone_num': 4402, 'id_sous_modele': idSousModele })
//     .then(contenu1 => {
//       if (!!contenu1) {
//         // si le contenu existe dans Info_sous_modele_actif
//         res.status(201).json(contenu1.valeur);
//       } else {
//         // sinon on le recupere de Info_sous_modele
//         Info_sous_modele.query()
//           .findOne({ 'zone_num': 4402, 'id_sous_modele': idSousModele })
//           .then(contenu2 => {
//             res.status(201).json(contenu2 ? contenu2.valeur : '');
//           })
//           .catch(error => errorDbHandler.sendErrorHttp(error, res));
//       }
//     }).catch(error => errorDbHandler.sendErrorHttp(error, res));
// })

// // enregistrer les parametres d'un modele de lancement edition
// router.route('/saveParametreSousModeleActif').post(chekAuth, (req, res) => {
//   // console.log('req.body', req.body);
//   const idUser = req.body.idUser;
//   const idSousModele = req.body.idSousModele;

//   // params SMTP
//   const contenuSmtp = req.body.paramSousModele.contenuSmtp;

//   if (!idSousModele || !contenuSmtp) {
//     res.status(400).json({ message: "veuillez renseignez l'id du sous modèle et le contenu du smtp" });
//     return;
//   }

//   Info_sous_modele_actif.query()
//     .findOne({ 'zone_num': 4402, 'id_sous_modele': idSousModele })
//     .then(ism => {
//       if (!!ism) { // modifier
//         Info_sous_modele_actif.query().patch({ valeur: contenuSmtp })
//           .where('id_sous_modele', idSousModele)
//           .andWhere('zone_num', 4402)
//           .then(objRes => {
//             res.status(201).json('modification succes');
//           })
//           .catch(error => errorDbHandler.sendErrorHttp(error, res));
//       } else { // inserer
//         Info_sous_modele_actif.query().insert({
//           zone_num: 4402,
//           valeur: contenuSmtp,
//           id_sous_modele: idSousModele
//         }).then(() => res.status(201).json('insertion succes'))
//           .catch(error => errorDbHandler.sendErrorHttp(error, res));
//       }
//     }).catch(error => errorDbHandler.sendErrorHttp(error, res));
// })

// // recuperer la liste des email de l'expediteur
// router.route('/getListEmailExpediteur/:obj').get(chekAuth, (req, res) => {
//   const obj = JSON.parse(req.params.obj);
//   const text = obj.text || '';
//   const idUser = obj.idUser;

//   if (!idUser) {
//     res.status(400).json({ message: "veuillez renseignez l'id de l'utilisateur" });
//     return;
//   }

//   Expediteur_smtp.query()
//     .limit(10)
//     .where('id_utilisateur', idUser)
//     .andWhereRaw(suipiLike('email', '%' + text + '%'))
//     .pluck('email')
//     .then(listEmail => res.status(201).json(listEmail))
//     .catch(error => errorDbHandler.sendErrorHttp(error, res));
// })

// // ajouter un expediteur smtp
// router.route('/ajouterEmailExpediteur').post(chekAuth, (req, res) => {
//   const emailExpediteur = req.body.emailExpediteur.toLowerCase() || '';
//   const idUser = req.body.idUser;

//   const regx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//   if (!idUser) {
//     res.status(400).json("veuillez renseignez l'id de l'utilisateur");
//     return;
//   }

//   if (emailExpediteur.length === 0 || !regx.test(emailExpediteur)) {
//     res.status(400).json("veuillez renseignez un email valide");
//     return;
//   }

//   Expediteur_smtp.query().findOne({ email: emailExpediteur, id_utilisateur: idUser }).then(result => {
//     if (!result) {
//       Expediteur_smtp.query()
//         .insert({ email: emailExpediteur, id_utilisateur: idUser })
//         .then(() => res.status(201).json('succes insert emailExpediteur'))
//         .catch(error => errorDbHandler.sendErrorHttp(error, res));
//     } else {
//       res.status(201).json('l\'adresse email existe déjà !')
//     }
//   })
//     .catch(error => errorDbHandler.sendErrorHttp(error, res));
// })

// // recuperer la liste des destinataires de SMTP à partir du resultat actif
// router.route('/getListDestinataireSmtp/:obj').get(chekAuth, (req, res) => {
//   const obj = JSON.parse(req.params.obj);
//   const idUser = obj.idUser;
//   const nomColone = obj.nomColone;
//   const ordre = obj.ordre;
//   const limit = obj.limit;
//   const pageIndex = obj.pageIndex;
//   // console.log('obj', obj)

//   if (!idUser) {
//     res.status(400).json({ message: "veuillez renseignez l'id du sous modèle" });
//     return;
//   }
//   if (!nomColone || !ordre || !limit) {
//     res.status(400).json({ message: "veuillez renseignez les parametres obligatoire : nomColone - ordre et limit" });
//     return;
//   }

//   Resultat_actif.query()
//     .findOne("id_utilisateur", idUser)
//     .pluck('resultat')
//     .then(async result => {
//       const obj = JSON.parse(result);
//       const listIds = eval(obj.relation_ids) || [];
//       const listIdsRela = Object.values(listIds);

//       if (listIdsRela.length > 0) {
//         let queryRelation = Relation.query()
//           .limit(limit)
//           .offset(pageIndex * limit)
//           .eager('[list_info_relation,Personne.[list_info_personne],Organisme.[list_info_organisme],Fonction]')
//           .joinRelation('[Personne]')
//           .orderBy('Personne.nom', ordre)
//           .orderBy('Personne.prenom', ordre)
//           .modifyEager('Personne.list_info_personne', builder => {
//             builder.findOne('zone_num', 1204); // recuperer juste la zone du courriel
//           })
//           .modifyEager('Organisme.list_info_organisme', builder => {
//             builder.findOne('zone_num', 3204); // recuperer juste la zone du courriel
//           })
//           .modifyEager('list_info_relation', builder => {
//             builder.findOne('zone_num', 2204); // recuperer juste la zone du courriel
//           });

//         for (let i = 0; i < listIdsRela.length; i += 1000) {
//           queryRelation = queryRelation.orWhereIn('Relation.id', listIdsRela.slice(i, i + 1000));
//         }

//         queryRelation.then(listDest => { //BeenTabDestinataireSmtp
//           let listDestinataire = [];
//           for (let i = 0; i < listDest.length; i++) {
//             listDestinataire.push({
//               idPersonne: listDest[i].Personne.id,
//               idFonction: listDest[i].Fonction.id,
//               idOrganisme: listDest[i].Organisme.id,
//               personne: listDest[i].Personne.nom + ' ' + listDest[i].Personne.prenom,
//               fonction: listDest[i].Fonction.libelle,
//               organisme: listDest[i].Organisme.libelle,
//               courrielPersonne: listDest[i].Personne.list_info_personne.length > 0 ? listDest[i].Personne.list_info_personne[0].valeur : '',
//               courrielFonction: listDest[i].list_info_relation.length > 0 ? listDest[i].list_info_relation[0].valeur : '',
//               courrielOrganisme: listDest[i].Organisme.list_info_organisme.length > 0 ? listDest[i].Organisme.list_info_organisme[0].valeur : ''
//             })
//           }
//           res.status(201).json({
//             items: listDestinataire,
//             totalCount: listIdsRela.length
//           });
//         }).catch(error => errorDbHandler.sendErrorHttp(error, res));

//       } else {
//         res.status(201).json(listIdsRela);
//       }

//     })
//     .catch(error => errorDbHandler.sendErrorHttp(error, res));
// })
// //#endregion

// /****************** SMTP *********************/
// router.route('/ajouterSmtp').post(chekAuth, (req, res) => {
//   const idSmtp = req.body.idSmtp;

//   res.status(201).json({ message: "succes" });
// })

// router.route('/sendSmtp').post(chekAuth, (req, res) => {
//   const idSmtp = req.body.idSmtp;
//   const test = envoyerMailSmtp('test@gmail.com', 'mohammed', 'bennani.d.mohammed@gmail.com', 'un test',
//     'ceci est un test pour une utilisation final de la fonction smtp', []);
//   test.then(resu => console.log('test', resu)).catch(console.error);
//   res.status(201).json({ message: "en cous d'envoi" });
// })

module.exports = router;
