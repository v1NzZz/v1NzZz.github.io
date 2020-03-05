---
title: Staff
angled_header: Staff
staff_header: Une équipe expérimentée et déterminée
staff_subheader: Pour performer et atteindre le meilleur niveau
commitments_header: Nos valeurs, notre engagement&nbsp;!
commitments_subheader: Un gage de qualité
commitments:
  - title: Flexible
    text: |+
      Être agile et réactif dans nos coaching et notre accompagnement suite aux retours de nos athlètes, qu’ils soient positifs ou négatifs.
  - title: Ouvert
    text: |+
      Être ouvert et honnête. Être accessible aux autres de manière positive et professionnelle.
  - title: Engagé
    text: |+
      Agir avec intégrité et faire ce qui est juste.
  - title: Innovant
    text: |+
      Créer de nouveaux rythmes d'entraînements qui profiteront à nos athlètes et à leurs performances.
  - title: Passionné
    text: |+
      Travailler dur, jouer le jeu à fond en prenant du plaisir, tout en prenant soin de nous-mêmes dans chaque mission réalisée.
layout: default
---

<div>
  <div class="container">
    <h1 class="centered">{{ page.staff_header }}</h1>
    <h3 class="subtitle centered">{{ page.staff_subheader }}</h3>
  </div>

  {% include staff.html %}

  <section class="angled secondary">
    <h1 class="centered">{{ page.commitments_header }}</h1>
    <h3 class="subtitle centered">{{ page.commitments_subheader }}</h3>

    <div class="commitments grid-auto-fit">
      {% for commitment in page.commitments %}
        <div class="centered">
          <h3 class="uppercase underlined">{{ commitment.title }}</h3>
          <p>{{ commitment.text }}</p>
        </div>
      {% endfor %}
    </div>
  </section>
</div>
