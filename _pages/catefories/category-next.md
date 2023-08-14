---
title: "NextJS"
layout: archive
permalink: categories/next
author_profile: true
sidebar_main: true
---

{% assign posts = site.categories.Next %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}
