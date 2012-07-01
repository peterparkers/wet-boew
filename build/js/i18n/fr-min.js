/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * www.tbs.gc.ca/ws-nw/wet-boew/terms / www.sct.gc.ca/ws-nw/wet-boew/conditions
 */
(function(b){var a=window.pe||{fn:{}};a.dic={get:function(d,e,c){var f=(typeof d==="string"&&d!=="")|(typeof e==="string"&&e!=="")<<1|(typeof c==="string"&&c!=="")<<2;switch(f){case 1:return this.ind[d];case 3:return this.ind[d][e];case 7:return this.ind[d][e].replace("[MIXIN]",c);default:return""}},ago:function(d){var g,c,f,e;c=pe.date.convert(d);e=(arguments.length>1?arguments[1]:new Date());g=parseInt((e.getTime()-c)/1000,10);g=g+(e.getTimezoneOffset()*60);f="";if(g<60){f=this.get("%minute-ago")}else{if(g<120){f=this.get("%couple-of-minutes")}else{if(g<(45*60)){f=this.get("%minutes-ago","mixin",(parseInt(g/60,10)).toString())}else{if(g<(90*60)){f=this.get("%hour-ago")}else{if(g<(24*60*60)){f=this.get("%hours-ago","mixin",(parseInt(g/3600,10)).toString())}else{if(g<(48*60*60)){f=this.get("%yesterday")}else{f=this.get("%days-ago","mixin",(parseInt(g/86400,10)).toString())}}}}}}return f},ind:{"%all":"Tous","%home":"Accueil","%top-of-page":"Haut de la page","%you-are-in":"Vous êtes dans :","%welcome-to":"Bienvenue à : "+b("#gcwu-title").text(),"%search":"Recherche","%search-for-terms":"Recherche de terme(s) :","%no-match-found":"Aucune correspondance trouvée","%matches-found":{mixin:"[MIXIN] correspondance(s) trouvées"},"%menu":"Menu","%hide":"Masquer","%error":"Erreur","%colon":"&#160;:","%minute-ago":"il ya une minute","%couple-of-minutes":"il ya quelques minutes","%minutes-ago":{mixin:"il ya [MIXIN] minutes"},"%hour-ago":"il ya une heure","%hours-ago":{mixin:"il ya [MIXIN] heures"},"%days-ago":{mixin:"il ya [MIXIN] jours"},"%yesterday":"hier","%archived-page":"Cette page Web a été archivée dans le Web.","%sub-menu-help":"(ouvrir le sous-menu avec la touche de la flèche descendante et le fermer avec la touche d'échappement)","%tab-rotation":{disable:"Arrêter la rotation d'onglets",enable:"Lancer la rotation d'onglets"},"%play":"Jouer","%stop":"Pause","%close":"Fermer","%rewind":"Reculer ","%next":"Prochaine","%previous":"Précedent","%fast-forward":"Avancer ","%mute":{enable:"Activer le mode muet",disable:"Désactiver le mode muet"},"%closed-caption":{disable:"Masquer le sous-titrage",enable:"Afficher le sous-titrage"},"%audio-description":{enable:"Activer l'audiodescription",disable:"Désactiver l'audiodescription"},"%progress-bar":"utilisez les touches GAUCHE ou DROITE pour avancer ou reculer le progrès des médias","%no-video":"Votre navigateur ne semble pas avoir les capacité nécessaires pour lire cette vidéo, s'il vous plaît télécharger la vidéo ci-dessous","%position":"Position actuelle&#160;: ","%duration":"Temps total&#160;: ","%buffered":"Mis en mémoire-tampon&#160;: ","%favourite":"Lien préféré","%email":"Courriel","%share-text":"Partagez cette page","%share-hint":" avec {s} (Ouvre dans une nouvelle fenêtre)","%share-email-subject":"Page qui est intéressante","%share-email-body":"J'espère que cette page vous intéresse :\n{t} ({u})","%share-manual":"S'il vous pla&#238;t fermer ce dialogue et\nappuyer sure Ctrl-D pour ajouter cette page à vos signets.","%share-showall":"Tous montrer ({n})","%share-showall-title":"Tout les sites de mise en signet","%form-not-submitted":"Le formulaire n'a pu être soumis car ","%errors-found":" erreurs ont été trouvées.","%error-found":" erreur a été trouvée.","%show-toc":"Afficher","%show-image":"afficher.png","%hide-image":"cacher.png","%table-contents":" la table des mati&#232;res"}};b(document).trigger("languageloaded");window.pe=a;return a}(jQuery));