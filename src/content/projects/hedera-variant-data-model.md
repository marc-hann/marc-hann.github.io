---
title: Genetic variant data model
year: 2024
role: Lead · Backend
stack: [TypeScript, PostgreSQL]
status: Live
featured: true
order: 1
illustration: variant-model
---

Genetic variants are hard to model. Each one is heavily annotated, and its position depends on the reference genome it is described against. At the same time, [Hedera Prime](#hedera-prime-mvp) has to keep a record of every variant that has passed through the system.

I designed and implemented a scalable data model for variant data. It keeps that full record while the database structure stays optimised for the volume of single-nucleotide variants (SNVs) that sequencing produces.

It meets two key requirements. The same variant can be recognised every time it appears, however large the dataset grows. And everything connected to a variant is versioned, both the annotations from external sources as they get updated and the data users add within the app, so every change stays traceable.
