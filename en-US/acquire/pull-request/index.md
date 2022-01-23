---
title: Acquire Stamp by Pull Request
layout: base
localization: en-US
---

# {{ page.title }}

Some of the stamps are open to acquiring by pull request. For example, this stamp can be your first stamp to acquire. Click the stamp to learn more about it.

{% include stamp/earn.html
    stamp0=site.data.stamp.pull-request-acquirer
%}

Under every stamp detail page, there's a method of acquiring section in it, which looks like this:

<blockquote>
{% assign methods=page.localization %}

{% include stamp/method-text.html
    methods=site.data.stamp.pull-request-acquirer.methods
%}
</blockquote>

If email is one of the methods of acquiring, send a pull-request to acquire it. If you have any question regards stamps, send an email to [stamp@sudo.tv](mailto://stamp@sudo.tv) to contact us.
