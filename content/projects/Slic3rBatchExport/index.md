+++
title = "slic3r tryout"
description = "A brief description of Hugo Shortcodes"
tags = [
    "shortcodes",
    "privacy",
]
+++

## <!--more-->

## WHAT IS IT ?:

An easy tool to export gcode from slic3r.

## BACKGROUND:

The option of slic3r command linx options wasn’t availabe under linux as described. The tools written to help perorming export 3mf -> save to stl -> export gcode as a batch operation.

## HOW TO USE:

1. Clone repo:
1. run under linux
1. git clone git@github.com:louiscklaw/slic3r_batch_export.git
1. pip install libxdo
1. update the file list in:
1. file_3mf_list # for the list of 3mf files
1. WORKSPACE_DIR and PROJ_HOME
1. SLIC3R_ACTIVE_CONFIG for slic3r configuration wanted
1. SLIC3R_BIN_PATH for slic3r binary
1. python batch_slic3r.py
1. REFERENCES / REPOSITORIES:
1. louiscklaw/slic3r_batch_export
