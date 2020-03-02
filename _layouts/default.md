---
---
<!doctype html>
<html class="no-js" lang="en">

{% include head.html %}

<body>

  {% include nav.html %}

  <main>
    <div class="top-angled-background">
      <div class="background">
        {% if page.angled_header %}
          <div class="angled-header">
            <h1>{{ page.angled_header }}</h1>
          </div>
        {% endif %}
      </div>
    </div>

    <div class="main-container">
      {{ content }}
    </div>
  </main>

  {% include footer.html %}
</body>

{% include scripts.html %}
