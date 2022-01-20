---
title: Acquire Stamp by Email
layout: base
localization: en-US
---

# {{ page.title }}

Some of the stamps are open to acquire by email. For example, this stamp can be your first stamp to acquire. Click the the stamp to learn more about it.

{% include stamp/thumbnail/medium.html
    stamp=site.data.stamp.hello-world
%}

Under every stamp detail page, there's a methods of acquiring section in it, which looks like this:

<blockquote>
{% assign methods=page.localization %}

{% include stamp/method-text.html
    methods=site.data.stamp.hello-world.methods
%}
</blockquote>

If email is one of the method of acquiring, send a email to [stamp@sudo.tv](mailto://stamp@sudo.tv) with the information of the stamp you want to acquire.
