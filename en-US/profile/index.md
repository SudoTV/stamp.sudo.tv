---
title: Profile
layout: base
localization: en-US
---

# {{ page.title }}

## Visit a Viewer's Profile

Input the viewer's profile name and click `Go` button to redirect to the viewer's profile page.

{% include stamp/input/profile-jump.html %}

## Learn More

{% include navigation/absolute-link.html
    href="/create/profile"
    title="Create your own profile"
    description="Learn more about how to create your own profile"
%}

{% include navigation/absolute-link.html
    external=true
    with-origin=true
    href="https://sudo.tv/reprint/profile"
    title="How to Reprint Viewer Profiles"
    description="View your right and limitations to reprint SudoTV viewer profiles"
%}