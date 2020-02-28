---
layout: default
story_title: "Notre histoire"
story: |+
  Le projet cyber athlète à vue le jour le 24 juillet 2019, ayant pour objectif de créer un collectif de joueurs répondant à divers critères. Le concept est d’assembler différents joueurs partageant les mêmes aspirations, ainsi qu’une mentalité compatible de manière à s’entraider lors d’entraînements collectifs. En d’autres mots, il s’agit de mettre en place, de manière concrète et structurée, des entraînements semblables aux organisations existantes dans le sport traditionnel. Notre but premier, est de gagner la confiance des joueurs. C’était la condition ​sine qua non ​ avant de lancer notre structure. C'est pour cela que nous avons lancé notre projet concrètement en janvier, car nous avons réussi à avoir la confiance de tous les joueurs. Nous avons prouvé qu'avec cet encadrement et la volonté de travail les joueurs pourraient réussir.
logo_title: "Notre emblème"
logo_story: |+
  cyA a décidé d’arborer la représentation d’un cerveau. À l’image de la réflexion sur la génèse du projet, nous voulons que nos joueurs et notre équipe, jouent, s'entraînent et évoluent dans la vie de manière intelligente. cyA est un prolongement de l'enseignement du savoir être et du savoir faire, nécessaire au développement de chaques individus. Si le ventre est le centre de nos émotions, le cerveau est celui de l’intelligence, de la réflexion et du questionnement. C’est sous son égide que notre structure se place, en prônant l’esport sain sous toutes ses facettes. Si cyA sur le logo est disposé en cy.A, c’est pour démarquer entre le simple cerveau cybernétique purement codé, avec l’athlète travaillant jour et nuit pour ses objectifs. cyA est la rencontre entre l’intelligence, et la performance.
colors_title: "Nos couleurs"
colors_story: |+
  cyA a choisi 2 couleurs prédominantes le rouge et le violet.

  Le violet suggère la délicatesse, la douceur et le rêve. Il réfère à la magie, au fantastique, à l’imaginaire. Cette couleur véhicule des valeurs de sérénité et de spiritualité et peut être associée à la prospérité et à la noblesse.

  Le rouge est symbole d’amour, de chaleur, de sensualité et de passion. Il apporte une sensation de chaleur. C’est la couleur la plus puissante, la plus dynamique et avec le plus fort potentiel d’action.

  Le blanc est omniprésent, il représente la myéline. Cette substance se retrouve dans le cerveau protège, et sert à la propagation nerveuse de l’information pour les neurones.
  Ensemble les 3 couleurs représentent à la perfection les membres de cyA. Ils sont débordant de passion, de dynamisme au coeur de l’action, tout en laissant place à leurs réflexions. Le tout, lié par la myéline, accélérateur d’information.
---
<div>

<section>
  <h2>{{ page.story_title }}</h2>
  <p>
    {{ page.story }}
  </p>
</section>

<section>
  <h2>{{ page.logo_title }}</h2>
  <p>
    {{ page.logo_story}}
  </p>
</section>

<section>
  <div>
    <h2>{{ page.colors_title }}</h2>
    {% for p in page.colors_story %}
    <p>{{ p }}</p>
    {% endfor %}
  </div>
</section>
</div>

