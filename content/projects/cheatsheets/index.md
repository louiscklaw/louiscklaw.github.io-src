---
title: 'cheatsheets'
summary: home of my cheatsheets
date: 1900-01-20
weight: -1
aliases: ['/cheatsheets']
tags: ['cheatsheets']
# author: 'louiscklaw'
draft: false
cover_image: 'images/homeinfo.jpg'
---


{{< mermaid "restaurant client flow" >}}
flowchart LR
    id-->ps

    subgraph main page
      ps[MainPageStart]
      pd[MainPageDone]

      ps-->pd
    end

    subgraph initialize page
      is-->i1
      is-->i2
      is-->i3
      is-->i4
      
      i1-->id
      i2-->id
      i3-->id
      i4-->id

      i1[CheckVersionUpdate]
      i4[PreCacheValue_firebase?]
      i3[LoadSavedValue_localStorage]
      i2[CheckAuthenation]
      is[InitializeStart]
      id[InitializeDone]
    end




    
{{< /mermaid >}}
