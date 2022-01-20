---
title: Acquire Stamp by Email
layout: base
localization: en-US
---

# {{ page.title }}

Some of the stamps are open to acquiring by email. For example, this stamp can be your first stamp to acquire. Click the stamp to learn more about it.

{% include stamp/thumbnail/medium.html
    stamp=site.data.stamp.hello-world
%}

Under every stamp detail page, there's a method of acquiring section in it, which looks like this:

<blockquote>
{% assign methods=page.localization %}

{% include stamp/method-text.html
    methods=site.data.stamp.hello-world.methods
%}
</blockquote>

If email is one of the methods of acquiring, send an email to [stamp@sudo.tv](mailto://stamp@sudo.tv) with the information of the stamp you want to acquire.
