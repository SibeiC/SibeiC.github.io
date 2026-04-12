---
layout: default
title: Sibei's GitHub Page
permalink: /
---

## Pages

{% assign sorted_pages = site.pages | sort: "title" %}
{% for p in sorted_pages %}{% if p.title and p.url != page.url %}{% unless p.url contains '/zh/' or p.url == '/404.html' %}- [{{ p.title }}]({{ p.url }})
{% endunless %}{% endif %}{% endfor %}

## Trips

{% assign sorted_trips = site.trips | sort: "date_range" | reverse %}
{% for trip in sorted_trips %}- [{{ trip.title }}]({{ trip.url | relative_url }})
{% endfor %}
